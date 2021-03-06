//! Signals used to send data between threads.
use std::io;
use std::fmt::{self, Debug};

use crossbeam::channel::{Sender, Receiver, TrySendError};
use crossbeam::channel::{unbounded as channel, bounded};
use mio::{Poll, PollOpt, Registration, SetReadiness, Ready, Evented, Token};

use crate::reactor::{Reactor, Reaction, EventedReactor};
use crate::errors;

use super::Capacity;


// -----------------------------------------------------------------------------
//              - Signal sender -
// -----------------------------------------------------------------------------
/// Evented signal sender, used to send data between threads.
/// A sender can not be created by it self, but has to exist as a result
/// of a receiver. Thus a sender can only be created from a receiver.
pub struct SignalSender<T> {
    sender: Sender<T>,
    set_readiness: SetReadiness,
}

impl<T> SignalSender<T> {
    fn new(sender: Sender<T>, set_readiness: SetReadiness) -> Self {
        Self {
            sender,
            set_readiness,
        }
    }

    /// Send data to a receiver.
    pub fn send(&self, val: T) -> Result<(), TrySendError<T>>{
        let _ = self.set_readiness.set_readiness(Ready::readable());
        self.sender.send(val)?;
        Ok(())
    }
}

impl<T> Clone for SignalSender<T> {
    fn clone(&self) -> Self {
        SignalSender::new(
            self.sender.clone(),
            self.set_readiness.clone(),
        )
    }
}

impl<T: Debug> Debug for SignalSender<T> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}


// -----------------------------------------------------------------------------
//              - Signal receiver -
// -----------------------------------------------------------------------------
/// Evented receiver.
pub struct SignalReceiver<T> {
    receiver: Receiver<T>,
    registration: Registration,

    set_readiness: SetReadiness,
    sender: Sender<T>,
}

impl<T> From<Capacity> for SignalReceiver<T> {
    fn from(cap: Capacity) -> Self {
        match cap {
            Capacity::Unbounded => Self::unbounded(),
            Capacity::Bounded(cap) => Self::bounded(cap)
        }
    }
}

impl<T> From<&Capacity> for SignalReceiver<T> {
    fn from(cap: &Capacity) -> Self {
        match cap {
            Capacity::Unbounded => Self::unbounded(),
            Capacity::Bounded(cap) => Self::bounded(*cap)
        }
    }
}

impl<T> SignalReceiver<T> {
    /// Create an unbounded receiver
    pub fn unbounded() -> Self {
        let (sender, receiver) = channel();
        Self::with_sender_receiver(sender, receiver)
    }

    /// Create a bounded receiver.
    /// Setting the capacity to zero means no data will be held in the 
    /// queue and the sending thread will block until the data is picked up
    /// by this receiver.
    pub fn bounded(capacity: usize) -> Self {
        let (sender, receiver) = bounded(capacity);
        Self::with_sender_receiver(sender, receiver)
    }

    fn with_sender_receiver(sender: Sender<T>, receiver: Receiver<T>) -> Self {
        let (registration, set_readiness) = Registration::new2();
        Self {
            receiver,
            registration,

            sender,
            set_readiness,
        }
    }

    /// Try to receive a value from the underlying channel
    pub fn try_recv(&self) -> errors::Result<T> {
        let res = self.receiver.try_recv();
        Ok(res?)
    }

    /// Create an instance of a sender.
    /// It's possible to create several senders for the same receiver.
    pub fn sender(&self) -> SignalSender<T> {
        SignalSender {
            set_readiness: self.set_readiness.clone(),
            sender: self.sender.clone(),
        }
    }
}



// -----------------------------------------------------------------------------
//              - Reactive signal receiver -
// -----------------------------------------------------------------------------
/// React when new data is ready to be received
///
///```no_run
/// # use std::thread;
/// # use sonr::prelude::*;
/// # use sonr::sync::signal::{SignalReceiver, ReactiveSignalReceiver, SignalSender};
/// # use sonr::sync::Capacity;
///
/// # fn main() {
/// let rx: SignalReceiver<u8> = SignalReceiver::unbounded();
/// let tx = rx.sender();
///
/// let handle = thread::spawn(move || {
///     let handle = System::init().unwrap();
///     let rx = ReactiveSignalReceiver::new(rx).unwrap();
///
///     let run = rx.map(|val| {
///         // Received value, signaling System
///         // to stop
///         handle.send(SystemEvent::Stop);
///     });
///
///     System::start(run);
/// });
///
/// tx.send(123);
///
/// handle.join();
/// # }
/// ```
///
pub struct ReactiveSignalReceiver<T> {
    inner: EventedReactor<SignalReceiver<T>>,
}

impl<T> ReactiveSignalReceiver<T> {
    /// Create a new signal receiver
    pub fn new(inner: SignalReceiver<T>) -> errors::Result<Self> {
        Ok(Self {
            inner: EventedReactor::new(inner, Ready::readable())?,
        })
    }

    /// Attempt to receive data.
    /// Should be called after the receiver reacts to an event.
    pub fn try_recv(&self) -> errors::Result<T> {
        Ok(self.inner.inner().try_recv()?)
    }

    /// Get an instance of the [`Token`] used to register
    /// the receiver with the [`System`].
    ///
    /// [`Token`]: ../../struct.Token.html
    /// [`System`]: ../../system/struct.System.html
    pub fn token(&self) -> Token {
        self.inner.token()
    }

    /// Create a signal sender for the underlying receiver.
    pub fn sender(&self) -> SignalSender<T> {
        self.inner.inner().sender()
    }
}

impl<T> Evented for SignalReceiver<T> {
    fn register(&self, poll: &Poll, token: Token, interest: Ready, opts: PollOpt) -> io::Result<()> {
        self.registration.register(poll, token, interest, opts)
    }

    fn reregister(&self, poll: &Poll, token: Token, interest: Ready, opts: PollOpt) -> io::Result<()> {
        self.registration.reregister(poll, token, interest, opts)
    }

    fn deregister(&self, poll: &Poll) -> io::Result<()> {
        poll.deregister(&self.registration)
    }
}

impl<T: Send + 'static> Reactor for ReactiveSignalReceiver<T> {
    type Output = T;
    type Input = ();

    fn react(&mut self, reaction: Reaction<Self::Input>) -> Reaction<Self::Output> {
        if let Reaction::Event(event) = reaction {
            if self.inner.token() == event.token() {
                if let Ok(val) = self.try_recv() {
                    return Reaction::Value(val)
                }
            } else {
                return Reaction::Event(event);
            }
        }

        if let Reaction::Continue = reaction {
            if let Ok(val) = self.try_recv() {
                return Reaction::Value(val);
            }
        }

        match reaction {
            Reaction::Event(e) => Reaction::Event(e),
            Reaction::Continue => Reaction::Continue,
            Reaction::Value(_) => Reaction::Continue,
        }
    }
}
