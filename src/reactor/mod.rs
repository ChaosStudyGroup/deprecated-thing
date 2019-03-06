use mio::{Event, Evented, Ready, Token};
use std::fmt::{self, Debug, Formatter};
use std::io::{self, ErrorKind::WouldBlock, Read, Write};

use super::system::System;
use crate::errors::Result;

pub mod combinators;
pub mod producers;

use combinators::{And, Chain, Map, Noop};

pub enum Reaction<T> {
    NoReaction,
    Event(Event),
    Value(T),
    Stream(T),
}

// TODO: remove this
impl<T> Reaction<T> {
    fn print(&self) {
        match self {
            Reaction::NoReaction => eprintln!("{:?}", "NO REACTION"),
            Reaction::Value(_) => eprintln!("{:?}", "VALUE"),
            Reaction::Stream(_) => eprintln!("{:?}", "STREAM"),
            Reaction::Event(_) => eprintln!("{:?}", "EVENT"),
        }
    }
}

impl<T: Debug> Debug for Reaction<T> {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match &self {
            Reaction::NoReaction => write!(f, "Reaction::NoReaction"),
            Reaction::Event(event) => write!(f, "Reaction::Event({:?})", event),
            Reaction::Value(val) => write!(f, "Reaction::Value({:?})", val),
            Reaction::Stream(val) => write!(f, "Reaction::Stream({:?})", val),
        }
    }
}

/// A reactor ...
pub trait Reactive: Sized {
    /// The output passed to the next reactor in the chain.
    type Output;

    /// Expected input type from the previous reactor in the chain.
    type Input;

    /// The generated output is passed as the input to the
    /// next reactor in the chain.
    ///
    /// `react` is called repeatedly until the reaction returns
    /// `Reaction::NoReaction`
    fn react(&mut self, reaction: Reaction<Self::Input>) -> Reaction<Self::Output> {
        Reaction::NoReaction
    }

    /// Chain two reactors together.
    /// The output of the first reactor is the input of the second reactor.
    fn chain<T: Reactive>(self, to: T) -> Chain<Self, T> {
        Chain::new(self, to)
    }

    // TODO: might be redundant
    /// Create a chain with a [`Noop`] as the second
    /// in the chain.
    ///
    /// [`Noop`]: combinators/struct.Noop.html
    fn noop(self) -> Chain<Self, Noop<Self::Output>> {
        Chain::new(self, Noop::new())
    }

    /// Run two reactors independent of each other.
    /// ```no_run
    /// # use sonr::reactor::Reactive;
    /// # use sonr::errors::Result;
    /// use sonr::system::System;
    /// use sonr::net::tcp::ReactiveTcpListener;
    ///
    /// fn main() -> Result<()> {
    ///     System::init();
    ///     let first_listener = ReactiveTcpListener::bind("127.0.0.1:5000")?;
    ///     let second_listener = ReactiveTcpListener::bind("127.0.0.1:5001")?;
    ///     let server = first_listener.and(second_listener);
    ///     System::start(server);
    /// #   Ok(())
    /// }
    /// ```
    fn and<C: Reactive>(self, second: C) -> And<Self, C> {
        And::new(self, second)
    }

    /// Capture the output of a reactor in a closure.
    /// ```no_run
    /// // Create a listener, print the address every time
    /// // the listener accepts a new connection, then push that
    /// // connection onto a queue.
    /// # use sonr::net::tcp;
    /// # use sonr::sync::queue::ReactiveQueue;
    /// # use sonr::errors::Result;
    /// # use sonr::prelude::*;
    /// # fn main() -> Result<()> {
    /// System::init();
    /// let listener = tcp::ReactiveTcpListener::bind("127.0.0.1:5000")?;
    /// let queue = ReactiveQueue::unbounded();
    /// let server = listener.map(|(stream, addr)| {
    ///     eprintln!("address is: {:?}", addr);
    ///     stream
    /// }).chain(queue);
    /// System::start(server);
    /// # Ok(())
    /// # }
    /// ```
    fn map<F, T>(self, callback: F) -> Map<Self, F, T> {
        Map::new(self, callback)
    }
}

// -----------------------------------------------------------------------------
// 		- An evented Reactor -
// -----------------------------------------------------------------------------
/// The `EventedReactor` is driven by the `System`.
/// TODO more documentation
pub struct EventedReactor<E: Evented> {
    inner: E,
    token: Token,
    interest: Ready,
    pub(crate) is_readable: bool,
    pub(crate) is_writable: bool,
}

impl<E> Debug for EventedReactor<E>
where
    E: Debug + Evented,
{
    fn fmt(&self, f: &mut Formatter) -> fmt::Result {
        f.debug_struct("EventedReactor")
            .field("inner", &self.inner)
            .field("token", &self.token)
            .field("interest", &self.interest)
            .field("is_readable", &self.is_readable)
            .field("is_writable", &self.is_writable)
            .finish()
    }
}

impl<E: Evented> EventedReactor<E> {
    /// Create a new instance of an `EventedReactor`.
    pub fn new(inner: E, interest: Ready) -> Result<Self> {
        let token = System::reserve_token()?;
        System::register(&inner, interest, token)?;

        Ok(Self {
            inner,
            token,
            interest,
            is_readable: false,
            is_writable: false,
        })
    }

    /// Reference to the underlying evented type
    pub fn inner(&self) -> &E {
        &self.inner
    }

    /// Mutable reference to the underlying evented type
    pub fn inner_mut(&mut self) -> &mut E {
        &mut self.inner
    }

    /// Return the `Token` used to register the inner type with
    /// poll.
    pub fn token(&self) -> Token {
        self.token
    }

    /// Return the interests of the reactor, usually readable and/or writable.
    pub fn interest(&self) -> Ready {
        self.interest
    }
}

impl<E: Evented + Read> Read for EventedReactor<E> {
    fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
        let res = self.inner_mut().read(buf);

        match res {
            Err(ref e) if e.kind() == WouldBlock => {
                self.is_readable = false;
                let res = System::reregister(&self);
                match res {
                    Ok(()) => (),
                    Err(e) => {
                        return Err(io::Error::new(
                            io::ErrorKind::Other,
                            format!("failed to reregister evented: {:?}", e),
                        ));
                    }
                }
            }
            Err(_) => self.is_readable = false,
            Ok(0) => self.is_readable = false,
            _ => {}
        }

        res
    }
}

impl<E: Evented + Write> Write for EventedReactor<E> {
    fn write(&mut self, buf: &[u8]) -> io::Result<usize> {
        let res = self.inner_mut().write(buf);

        match res {
            Err(ref e) if e.kind() == WouldBlock => {
                self.is_writable = false;
                let res = System::reregister(&self);
                match res {
                    Ok(()) => (),
                    Err(e) => {
                        return Err(io::Error::new(
                            io::ErrorKind::Other,
                            format!("failed to reregister evented: {:?}", e),
                        ));
                    }
                }
            }
            Err(_) => self.is_writable = false,
            _ => {}
        }

        res
    }

    fn flush(&mut self) -> io::Result<()> {
        self.inner_mut().flush()
    }
}

impl<E: Evented> Drop for EventedReactor<E> {
    fn drop(&mut self) {
        System::free_token(self.token());
    }
}