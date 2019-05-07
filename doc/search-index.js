var N=null,E="",T="t",U="u",searchIndex={};
var R=["pollopt","result","Continue","sonr::reactor","reaction","token","ready","register","reregister","sonr::net","eventedreactor","inner_mut","Get `Token` registered with the listener;","unbounded","Push a value onto the queue","dequeue","bounded","signalsender","sonr::sync","try_recv","signalreceiver","subscriber","Create a new subscriber of the data","Associates readiness notifications with [`Evented`] handles.","An readiness event returned by [`Poll::poll`].","to_owned","clone_into","try_from","borrow_mut","try_into","type_id","borrow","typeid","sonr::reactor::consumers","sonr::reactor::producers","sonr::system","sonr::net::tcp","sonr::net::stream","sonr::net::uds","sonr::sync::queue","sonr::sync::signal","sonr::sync::broadcast","sonr::errors","partial_cmp","sonr::prelude","option","ordering","from_raw_fd","tcplistener","deregister","formatter","into_raw_fd","as_raw_fd","stream_ref","stream_mut","capacity","duration","readable","writable","is_empty","Removes all options represented by `other` from `self`.","contains","Returns true if `self` is a superset of `other`.","readiness","connect","socketaddr","tcpstream","shutdown","local_addr","try_clone","Creates a new independently owned handle to the underlying…","Sets the value for the `IP_TTL` option on this socket.","Gets the value of the `IP_TTL` option for this socket.","set_only_v6","Sets the value for the `IPV6_V6ONLY` option on this socket.","Gets the value of the `IPV6_V6ONLY` option for this socket.","take_error","Get the value of the `SO_ERROR` option on this socket.","unixlistener","accept_std","Accepts a new incoming connection to this listener.","Returns the local socket address of this listener.","unixstream","from_stream","peer_addr","Returns the value of the `SO_ERROR` option.","Shuts down the read, write, or both halves of this…","read_bufs","Read in a list of buffers all at once.","write_bufs","Write a list of buffers all at once.","Evented","Reaction","ReactiveGenerator","EventedReactor","SystemEvent","ReactiveTcpListener","ReactiveTcpStream","StreamRef","ReactiveUdsListener","ReactiveUdsStream","ReactiveQueue","ReactiveDeque","SignalSender","SignalReceiver","ReactiveSignalReceiver","Broadcast","ReactiveBroadcast","SetReadiness","Registration","TcpStream","TcpListener","UnixListener","UnixStream"];

searchIndex["sonr"]={"doc":"Simple Opinionated Networking in Rust","i":[[3,"Token","sonr",R[23],N,N],[12,"0",E,E,0,N],[3,"Event",E,R[24],N,N],[8,R[91],E,"A value that may be registered with `Poll`",N,N],[10,R[7],E,"Register `self` with the given `Poll` instance.",1,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[10,R[8],E,"Re-register `self` with the given `Poll` instance.",1,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[10,R[49],E,"Deregister `self` from the given `Poll` instance",1,[[["self"],["poll"]],[R[1],["error"]]]],[3,"PollOpt",E,"Options supplied when registering an `Evented` handle with…",N,N],[3,"Poll",E,"Polls for readiness events on all registered values.",N,N],[3,"Ready",E,"A set of readiness event kinds",N,N],[3,R[108],E,"Updates the readiness state of the associated…",N,N],[3,R[109],E,"Handle to a user space `Poll` registration.",N,N],[3,"PreVec",E,"`PreVec`: a collection that allows inserts at a specific…",N,N],[0,"reactor",E,"Reactors are the heart of Sonr and work by pushing data…",N,N],[3,"And",R[3],"Use `and` to run more than one (evented) reactor in…",N,N],[3,"Chain",E,"Chain two [`Reactor`]s together, making the output of the…",N,N],[3,"Map",E,"Map will capture the `Reaction::Value(val)` returned by…",N,N],[3,"Or",E,E,N,N],[3,R[94],E,"The `EventedReactor` is driven by the [`System`].",N,N],[4,"Either",E,"Either A or B Used as output when…",N,N],[13,"A",E,"A branch",2,N],[13,"B",E,"B branch",2,N],[4,R[92],E,"Input / Output of a [`Reactor`].",N,N],[13,R[2],E,R[2],3,N],[13,"Event",E,"A Mio event.",3,N],[13,"Value",E,"Value",3,N],[11,"new",E,"Create a chain of two [`Reactors`].",4,[[["f"],[T]],["self"]]],[11,"new",E,"Create a new `And` from two reactors.",5,[[[T],[U]],["self"]]],[11,"new",E,"Create a new map from a reactor and a closure.",6,[[["s"],["f"]],["self"]]],[0,"consumers",E,"Consumers consume the output of other reactors.",N,N],[3,"Consume",R[33],"Consume the output of a `Reactor`.",N,N],[11,"new",E,"Create a new `Consume`",7,[[],["self"]]],[0,"producers",R[3],"There are two producers: * [`Mono`] *…",N,N],[3,R[93],R[34],"The [`ReactiveGenerator`] reacts as soon as the [`System`]…",N,N],[3,"Mono",E,"A [`Mono`] reacts as soon as the [`System`] starts and…",N,N],[11,"new",E,"Creates a new `ReactiveGenerator` with the given collection.",8,[[["vec"]],[R[1]]]],[11,"new",E,"Create a new `Mono`.",9,[[[T]],[R[1]]]],[8,"Reactor",R[3],"A reactor reacts to a [`Reaction`] and returns a…",N,N],[16,"Output",E,"The output passed to the next reactor in the chain.",10,N],[16,"Input",E,"Expected input type from the previous reactor in the chain.",10,N],[10,"react",E,"The generated output is passed as the input to the next…",10,[[["self"],[R[4]]],[R[4]]]],[11,"chain",E,"Chain two reactors together. The output of the first…",10,[[["self"],[T]],["chain"]]],[11,"and",E,"Run two reactors independent of each other. ```no_run #…",10,[[["self"],["c"]],["and"]]],[11,"map",E,"Capture the output of a reactor in a closure. `no_run //…",10,[[["self"],["f"]],["map"]]],[11,"or",E,"Pass the output from a reactor into one of two reactors…",10,[[["self"],[T]],["or"]]],[11,"new",E,"Create a new instance of an `EventedReactor`.",11,[[["e"],[R[6]]],[R[1]]]],[11,"inner",E,"Reference to the underlying evented type",11,[[["self"]],["e"]]],[11,R[11],E,"Mutable reference to the underlying evented type",11,[[["self"]],["e"]]],[11,R[5],E,"Return the `Token` used to register the inner type with…",11,[[["self"]],[R[5]]]],[11,"interest",E,"Return the interests of the reactor, usually readable…",11,[[["self"]],[R[6]]]],[0,"system","sonr","The `System` handles polling events, registering evented…",N,N],[3,"System",R[35],"`System` is thread local and has to exist for each thread…",N,N],[4,R[95],E,"Specific event the [`System`] responds to NOTE: There…",N,N],[13,"Stop",E,"Stop the System",12,N],[11,"init",E,"Initialise the system for the current thread. Should only…",13,[[],[R[1],[R[17]]]]],[11,R[7],E,"Register an `Evented` with the System.",13,N],[11,R[8],E,"Reregister an evented reactor.",13,[[[R[10]]],[R[1]]]],[11,"start",E,"Start the event loop. This will run until…",13,[[["r"]],[R[1]]]],[11,"free_token",E,"The token can be registered with another reactor. This is…",13,[[[R[5]]]]],[11,"reserve_token",E,"Reserve a token",13,[[],[R[1],[R[5]]]]],[11,"send",E,"Send a system event to the current system.",13,[[["systemevent"]]]],[0,"net","sonr","Network Reactors",N,N],[0,"tcp",R[9],"Reactive Tcp networking",N,N],[3,R[110],R[36],"A non-blocking TCP stream between a local socket and a…",N,N],[3,R[111],E,"A structure representing a socket server",N,N],[3,R[96],E,"Accept incoming connections and output `(TcpStream,…",N,N],[6,R[97],E,"A reactive tcp stream. See [`Stream`].",N,N],[11,"new",E,"Create a new listener from a mio::TcpListener",14,[[[R[48]]],[R[1]]]],[11,"bind",E,"Create a new listener from an address",14,[[["str"]],[R[1]]]],[11,R[5],E,R[12],14,[[["self"]],[R[5]]]],[11,R[64],E,"Create a new reactive tcp stream from a &SocketAddr",15,[[[R[65]]],[R[1]]]],[0,"stream",R[9],"Stream",N,N],[3,"Stream",R[37],"When a [`Stream`] `react`s the inner evented reactor is…",N,N],[8,R[98],E,"Anything that has a stream",N,N],[16,R[91],E,"The Evented type for the Stream",16,N],[10,R[53],E,"Immutable reference to the stream",16,[[["self"]],["stream"]]],[10,R[54],E,"Mutable reference to the stream",16,[[["self"]],["stream"]]],[11,R[5],E,"Stream token",16,[[["self"]],[R[5]]]],[11,"into_inner",E,"Consume the stream and return the underlying evented reactor",17,[[["self"]],[R[10]]]],[11,"new",E,"Create a new stream",17,[[[T]],[R[1]]]],[11,R[5],E,"The token used to track readiness of the underlying stream",17,[[["self"]],[R[5]]]],[11,R[57],E,"Is the underlying object readable?",17,[[["self"]],["bool"]]],[11,R[58],E,"Is the underlying object writable?",17,[[["self"]],["bool"]]],[11,"inner",E,"Reference the underlying object",17,[[["self"]],[T]]],[11,R[11],E,"Mutable reference to the underlying object",17,[[["self"]],[T]]],[0,"uds",R[9],"Unix Domain Sockets",N,N],[3,R[112],R[38],"A structure representing a Unix domain socket server.",N,N],[3,R[113],E,"A Unix stream socket.",N,N],[3,R[99],E,"Accept incoming connections and output `(UnixStream,…",N,N],[6,R[100],E,"Type alias for `Stream<UnixStream>`",N,N],[11,"bind",E,"Create a new Reactive UnixListener",18,N],[11,R[5],E,R[12],18,[[["self"]],[R[5]]]],[11,R[64],E,"Create a new reactive uds stream from a &str",19,[[["str"]],[R[1]]]],[0,"sync","sonr","Reactive queue, broadcaster and single mpsc",N,N],[4,"Capacity",R[18],"Queue / Signal capacity",N,N],[13,"Unbounded",E,"Unlimited number of messages",20,N],[13,"Bounded",E,"Limited number of messages",20,N],[0,"queue",E,"Reactive queue / dequeue",N,N],[3,R[101],R[39],"A reactive work stealing queue.",N,N],[3,"Queue",E,"An evented work stealing queue.",N,N],[3,R[102],E,"A reactive dequeue.",N,N],[3,"Dequeue",E,"An evented work stealing dequeue",N,N],[11,R[13],E,"Create an unbounded reactive queue",21,[[],["self"]]],[11,R[16],E,"Create an bounded reactive queue. Setting the capacity to…",21,[[["usize"]],["self"]]],[11,"push",E,R[14],21,[[["self"],[T]]]],[11,"deque",E,"Create an instance of a [`Dequeue`]. A [`Dequeue`] is not…",21,[[["self"]],[R[15]]]],[11,R[13],E,"Create an unbounded queue",22,[[],["self"]]],[11,R[16],E,"Create a bounded queue. Setting the capacity to zero means…",22,[[["usize"]],["self"]]],[11,"push",E,R[14],22,[[["self"],[T]]]],[11,"deque",E,"Create an instance of a [`Dequeu`].",22,[[["self"]],[R[15]]]],[11,"new",E,"Create a new reactive dequeue fro man existing [`Dequeue`]",23,[[[R[15]]],[R[1]]]],[11,R[16],E,"Create a bounded dequeue. Setting the capacity to zero…",24,[[["stealer"],["usize"]],["self"]]],[11,R[13],E,"Create an unbounded dequeue ",24,[[["stealer"]],["self"]]],[11,"sender",E,"Get the signal sender that notifies the dequeue of…",24,[[["self"]],[R[17]]]],[11,"steal",E,"Attempt to steal data",24,[[["self"]],["steal"]]],[0,"signal",R[18],"Signals used to send data between threads.",N,N],[3,R[103],R[40],"Evented signal sender, used to send data between threads.…",N,N],[3,R[104],E,"Evented receiver.",N,N],[3,R[105],E,"React when new data is ready to be received",N,N],[11,"send",E,"Send data to a receiver.",25,[[["self"],[T]],[R[1],["trysenderror"]]]],[11,R[13],E,"Create an unbounded receiver",26,[[],["self"]]],[11,R[16],E,"Create a bounded receiver. Setting the capacity to zero…",26,[[["usize"]],["self"]]],[11,R[19],E,"Try to receive a value from the underlying channel",26,[[["self"]],[R[1]]]],[11,"sender",E,"Create an instance of a sender. It's possible to create…",26,[[["self"]],[R[17]]]],[11,"new",E,"Create a new signal receiver",27,[[[R[20]]],[R[1]]]],[11,R[19],E,"Attempt to receive data. Should be called after the…",27,[[["self"]],[R[1]]]],[11,R[5],E,"Get an instance of the [`Token`] used to register the…",27,[[["self"]],[R[5]]]],[11,"sender",E,"Create a signal sender for the underlying receiver.",27,[[["self"]],[R[17]]]],[0,"broadcast",R[18],"Broadcast ",N,N],[3,R[106],R[41],"Broadcast value to all subscribers.",N,N],[3,R[107],E,"A reactive broadcaster",N,N],[11,R[13],E,"Create an unbounded broadcaster",28,[[],["self"]]],[11,R[16],E,"Create an bounded broadcaster",28,[[["usize"]],["self"]]],[11,R[21],E,R[22],28,[[["self"]],[R[20]]]],[11,"publish",E,"Publish data to all subscribers. Note that the published…",28,[[["self"],[T]]]],[11,R[16],E,"Create a bounded reactive broadcast",29,[[["usize"]],["self"]]],[11,R[13],E,"Create an unbounded reactive broadcast",29,[[],["self"]]],[11,R[21],E,R[22],29,[[["self"]],[R[20]]]],[0,"errors","sonr","SONR default `Error`",N,N],[4,"Error",R[42],"Wrapping error type.",N,N],[13,"Io",E,"std::io::Error",30,N],[13,"NoConnection",E,"No connection: A connection with a specific `Token` no…",30,N],[13,"ConnectionRemoved",E,"The connection was removed either by closing the socket or…",30,N],[13,"NoCapacity",E,"The `PreVec` does not have capacity for the new entry",30,N],[13,"AlreadyRegistered",E,"The session was already registered. A session can only be…",30,N],[13,"NoUdsConnection",E,"No unix domain socket waiting for a connection",30,N],[13,"TryRecvError",E,"Try receive error",30,N],[13,"RecvError",E,"Receive error",30,N],[13,"AddrParseError",E,"Address parse error",30,N],[13,"FromUtf8Error",E,"From UTF8 error",30,N],[6,"Result",E,"Result type: `std::result::Error<T, Error>`",N,N],[11,"with_capacity","sonr","Create a `PreVec` with a set capacity. Inserting above…",31,[[["usize"]],["self"]]],[11,"with_capacity_and_offset",E,"Create a `PreVec` with a set capacity and offset.",31,[[["usize"],["usize"]],["self"]]],[11,R[55],E,"Return the capacity",31,[[["self"]],["usize"]]],[11,"offset",E,"Return the offset",31,[[["self"]],["usize"]]],[11,"prevent_growth",E,"Prevent inserting above the capacity.",31,[[["self"]]]],[11,"enable_growth",E,"Enable the collection to grow and allocate more space.",31,[[["self"]]]],[11,"in_range",E,"Check if the index is within the range of the collection…",31,[[["self"],["usize"]],["bool"]]],[11,"set_offset",E,"Set the offset of the collection.",31,[[["self"],["usize"]]]],[11,"get",E,"Get an entry at a specific index",31,[[["self"],["usize"]],[R[45]]]],[11,"get_mut",E,"Get a mutable entry at a specific index",31,[[["self"],["usize"]],[R[45]]]],[11,"insert",E,"Insert a value in the next available slot and return the…",31,[[["self"],[T]],[R[1],["usize"]]]],[11,"remove",E,"Remove at index (inserting an empty entry)",31,[[["self"],["usize"]],[R[45]]]],[11,"len",E,"Number of occupied slots",31,[[["self"]],["usize"]]],[11,R[59],E,"Returns `true` if the collection has no entries",31,[[["self"]],["bool"]]],[11,"clear",E,"Remove all entries",31,[[["self"]]]],[0,"prelude",E,E,N,N],[3,"Token",R[44],R[23],N,N],[12,"0",E,E,0,N],[3,"Event",E,R[24],N,N],[11,"from",E,E,0,[[[T]],[T]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[25],E,E,0,[[["self"]],[T]]],[11,R[26],E,E,0,N],[11,R[27],E,E,0,[[[U]],[R[1]]]],[11,R[31],E,E,0,[[["self"]],[T]]],[11,R[30],E,E,0,[[["self"]],[R[32]]]],[11,R[28],E,E,0,[[["self"]],[T]]],[11,R[29],E,E,0,[[["self"]],[R[1]]]],[11,"from",E,E,32,[[[T]],[T]]],[11,"into",E,E,32,[[["self"]],[U]]],[11,R[25],E,E,32,[[["self"]],[T]]],[11,R[26],E,E,32,N],[11,R[27],E,E,32,[[[U]],[R[1]]]],[11,R[31],E,E,32,[[["self"]],[T]]],[11,R[30],E,E,32,[[["self"]],[R[32]]]],[11,R[28],E,E,32,[[["self"]],[T]]],[11,R[29],E,E,32,[[["self"]],[R[1]]]],[11,"from","sonr",E,33,[[[T]],[T]]],[11,"into",E,E,33,[[["self"]],[U]]],[11,R[25],E,E,33,[[["self"]],[T]]],[11,R[26],E,E,33,N],[11,R[27],E,E,33,[[[U]],[R[1]]]],[11,R[31],E,E,33,[[["self"]],[T]]],[11,R[30],E,E,33,[[["self"]],[R[32]]]],[11,R[28],E,E,33,[[["self"]],[T]]],[11,R[29],E,E,33,[[["self"]],[R[1]]]],[11,"from",E,E,34,[[[T]],[T]]],[11,"into",E,E,34,[[["self"]],[U]]],[11,R[27],E,E,34,[[[U]],[R[1]]]],[11,R[31],E,E,34,[[["self"]],[T]]],[11,R[30],E,E,34,[[["self"]],[R[32]]]],[11,R[28],E,E,34,[[["self"]],[T]]],[11,R[29],E,E,34,[[["self"]],[R[1]]]],[11,"from",E,E,35,[[[T]],[T]]],[11,"into",E,E,35,[[["self"]],[U]]],[11,R[25],E,E,35,[[["self"]],[T]]],[11,R[26],E,E,35,N],[11,R[27],E,E,35,[[[U]],[R[1]]]],[11,R[31],E,E,35,[[["self"]],[T]]],[11,R[30],E,E,35,[[["self"]],[R[32]]]],[11,R[28],E,E,35,[[["self"]],[T]]],[11,R[29],E,E,35,[[["self"]],[R[1]]]],[11,"from",E,E,36,[[[T]],[T]]],[11,"into",E,E,36,[[["self"]],[U]]],[11,R[25],E,E,36,[[["self"]],[T]]],[11,R[26],E,E,36,N],[11,R[27],E,E,36,[[[U]],[R[1]]]],[11,R[31],E,E,36,[[["self"]],[T]]],[11,R[30],E,E,36,[[["self"]],[R[32]]]],[11,R[28],E,E,36,[[["self"]],[T]]],[11,R[29],E,E,36,[[["self"]],[R[1]]]],[11,"from",E,E,37,[[[T]],[T]]],[11,"into",E,E,37,[[["self"]],[U]]],[11,R[27],E,E,37,[[[U]],[R[1]]]],[11,R[31],E,E,37,[[["self"]],[T]]],[11,R[30],E,E,37,[[["self"]],[R[32]]]],[11,R[28],E,E,37,[[["self"]],[T]]],[11,R[29],E,E,37,[[["self"]],[R[1]]]],[11,"from",E,E,31,[[[T]],[T]]],[11,"into",E,E,31,[[["self"]],[U]]],[11,R[27],E,E,31,[[[U]],[R[1]]]],[11,R[31],E,E,31,[[["self"]],[T]]],[11,R[30],E,E,31,[[["self"]],[R[32]]]],[11,R[28],E,E,31,[[["self"]],[T]]],[11,R[29],E,E,31,[[["self"]],[R[1]]]],[11,"from",R[3],E,5,[[[T]],[T]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[27],E,E,5,[[[U]],[R[1]]]],[11,R[31],E,E,5,[[["self"]],[T]]],[11,R[30],E,E,5,[[["self"]],[R[32]]]],[11,R[28],E,E,5,[[["self"]],[T]]],[11,R[29],E,E,5,[[["self"]],[R[1]]]],[11,"from",E,E,4,[[[T]],[T]]],[11,"into",E,E,4,[[["self"]],[U]]],[11,R[27],E,E,4,[[[U]],[R[1]]]],[11,R[31],E,E,4,[[["self"]],[T]]],[11,R[30],E,E,4,[[["self"]],[R[32]]]],[11,R[28],E,E,4,[[["self"]],[T]]],[11,R[29],E,E,4,[[["self"]],[R[1]]]],[11,"from",E,E,6,[[[T]],[T]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[27],E,E,6,[[[U]],[R[1]]]],[11,R[31],E,E,6,[[["self"]],[T]]],[11,R[30],E,E,6,[[["self"]],[R[32]]]],[11,R[28],E,E,6,[[["self"]],[T]]],[11,R[29],E,E,6,[[["self"]],[R[1]]]],[11,"from",E,E,38,[[[T]],[T]]],[11,"into",E,E,38,[[["self"]],[U]]],[11,R[27],E,E,38,[[[U]],[R[1]]]],[11,R[31],E,E,38,[[["self"]],[T]]],[11,R[30],E,E,38,[[["self"]],[R[32]]]],[11,R[28],E,E,38,[[["self"]],[T]]],[11,R[29],E,E,38,[[["self"]],[R[1]]]],[11,"from",E,E,11,[[[T]],[T]]],[11,"into",E,E,11,[[["self"]],[U]]],[11,R[27],E,E,11,[[[U]],[R[1]]]],[11,R[31],E,E,11,[[["self"]],[T]]],[11,R[30],E,E,11,[[["self"]],[R[32]]]],[11,R[28],E,E,11,[[["self"]],[T]]],[11,R[29],E,E,11,[[["self"]],[R[1]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,R[27],E,E,2,[[[U]],[R[1]]]],[11,R[31],E,E,2,[[["self"]],[T]]],[11,R[30],E,E,2,[[["self"]],[R[32]]]],[11,R[28],E,E,2,[[["self"]],[T]]],[11,R[29],E,E,2,[[["self"]],[R[1]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,R[27],E,E,3,[[[U]],[R[1]]]],[11,R[31],E,E,3,[[["self"]],[T]]],[11,R[30],E,E,3,[[["self"]],[R[32]]]],[11,R[28],E,E,3,[[["self"]],[T]]],[11,R[29],E,E,3,[[["self"]],[R[1]]]],[11,"from",R[33],E,7,[[[T]],[T]]],[11,"into",E,E,7,[[["self"]],[U]]],[11,R[27],E,E,7,[[[U]],[R[1]]]],[11,R[31],E,E,7,[[["self"]],[T]]],[11,R[30],E,E,7,[[["self"]],[R[32]]]],[11,R[28],E,E,7,[[["self"]],[T]]],[11,R[29],E,E,7,[[["self"]],[R[1]]]],[11,"from",R[34],E,8,[[[T]],[T]]],[11,"into",E,E,8,[[["self"]],[U]]],[11,R[27],E,E,8,[[[U]],[R[1]]]],[11,R[31],E,E,8,[[["self"]],[T]]],[11,R[30],E,E,8,[[["self"]],[R[32]]]],[11,R[28],E,E,8,[[["self"]],[T]]],[11,R[29],E,E,8,[[["self"]],[R[1]]]],[11,"from",E,E,9,[[[T]],[T]]],[11,"into",E,E,9,[[["self"]],[U]]],[11,R[27],E,E,9,[[[U]],[R[1]]]],[11,R[31],E,E,9,[[["self"]],[T]]],[11,R[30],E,E,9,[[["self"]],[R[32]]]],[11,R[28],E,E,9,[[["self"]],[T]]],[11,R[29],E,E,9,[[["self"]],[R[1]]]],[11,"from",R[35],E,13,[[[T]],[T]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[27],E,E,13,[[[U]],[R[1]]]],[11,R[31],E,E,13,[[["self"]],[T]]],[11,R[30],E,E,13,[[["self"]],[R[32]]]],[11,R[28],E,E,13,[[["self"]],[T]]],[11,R[29],E,E,13,[[["self"]],[R[1]]]],[11,"from",E,E,12,[[[T]],[T]]],[11,"into",E,E,12,[[["self"]],[U]]],[11,R[27],E,E,12,[[[U]],[R[1]]]],[11,R[31],E,E,12,[[["self"]],[T]]],[11,R[30],E,E,12,[[["self"]],[R[32]]]],[11,R[28],E,E,12,[[["self"]],[T]]],[11,R[29],E,E,12,[[["self"]],[R[1]]]],[11,"from",R[36],E,39,[[[T]],[T]]],[11,"into",E,E,39,[[["self"]],[U]]],[11,R[27],E,E,39,[[[U]],[R[1]]]],[11,R[31],E,E,39,[[["self"]],[T]]],[11,R[30],E,E,39,[[["self"]],[R[32]]]],[11,R[28],E,E,39,[[["self"]],[T]]],[11,R[29],E,E,39,[[["self"]],[R[1]]]],[11,"from",E,E,40,[[[T]],[T]]],[11,"into",E,E,40,[[["self"]],[U]]],[11,R[27],E,E,40,[[[U]],[R[1]]]],[11,R[31],E,E,40,[[["self"]],[T]]],[11,R[30],E,E,40,[[["self"]],[R[32]]]],[11,R[28],E,E,40,[[["self"]],[T]]],[11,R[29],E,E,40,[[["self"]],[R[1]]]],[11,"from",E,E,14,[[[T]],[T]]],[11,"into",E,E,14,[[["self"]],[U]]],[11,R[27],E,E,14,[[[U]],[R[1]]]],[11,R[31],E,E,14,[[["self"]],[T]]],[11,R[30],E,E,14,[[["self"]],[R[32]]]],[11,R[28],E,E,14,[[["self"]],[T]]],[11,R[29],E,E,14,[[["self"]],[R[1]]]],[11,"from",R[37],E,17,[[[T]],[T]]],[11,"into",E,E,17,[[["self"]],[U]]],[11,R[27],E,E,17,[[[U]],[R[1]]]],[11,R[31],E,E,17,[[["self"]],[T]]],[11,R[30],E,E,17,[[["self"]],[R[32]]]],[11,R[28],E,E,17,[[["self"]],[T]]],[11,R[29],E,E,17,[[["self"]],[R[1]]]],[11,"from",R[38],E,41,[[[T]],[T]]],[11,"into",E,E,41,[[["self"]],[U]]],[11,R[27],E,E,41,[[[U]],[R[1]]]],[11,R[31],E,E,41,[[["self"]],[T]]],[11,R[30],E,E,41,[[["self"]],[R[32]]]],[11,R[28],E,E,41,[[["self"]],[T]]],[11,R[29],E,E,41,[[["self"]],[R[1]]]],[11,"from",E,E,42,[[[T]],[T]]],[11,"into",E,E,42,[[["self"]],[U]]],[11,R[27],E,E,42,[[[U]],[R[1]]]],[11,R[31],E,E,42,[[["self"]],[T]]],[11,R[30],E,E,42,[[["self"]],[R[32]]]],[11,R[28],E,E,42,[[["self"]],[T]]],[11,R[29],E,E,42,[[["self"]],[R[1]]]],[11,"from",E,E,18,[[[T]],[T]]],[11,"into",E,E,18,[[["self"]],[U]]],[11,R[27],E,E,18,[[[U]],[R[1]]]],[11,R[31],E,E,18,[[["self"]],[T]]],[11,R[30],E,E,18,[[["self"]],[R[32]]]],[11,R[28],E,E,18,[[["self"]],[T]]],[11,R[29],E,E,18,[[["self"]],[R[1]]]],[11,"from",R[18],E,20,[[[T]],[T]]],[11,"into",E,E,20,[[["self"]],[U]]],[11,R[25],E,E,20,[[["self"]],[T]]],[11,R[26],E,E,20,N],[11,R[27],E,E,20,[[[U]],[R[1]]]],[11,R[31],E,E,20,[[["self"]],[T]]],[11,R[30],E,E,20,[[["self"]],[R[32]]]],[11,R[28],E,E,20,[[["self"]],[T]]],[11,R[29],E,E,20,[[["self"]],[R[1]]]],[11,"from",R[39],E,21,[[[T]],[T]]],[11,"into",E,E,21,[[["self"]],[U]]],[11,R[27],E,E,21,[[[U]],[R[1]]]],[11,R[31],E,E,21,[[["self"]],[T]]],[11,R[30],E,E,21,[[["self"]],[R[32]]]],[11,R[28],E,E,21,[[["self"]],[T]]],[11,R[29],E,E,21,[[["self"]],[R[1]]]],[11,"from",E,E,22,[[[T]],[T]]],[11,"into",E,E,22,[[["self"]],[U]]],[11,R[27],E,E,22,[[[U]],[R[1]]]],[11,R[31],E,E,22,[[["self"]],[T]]],[11,R[30],E,E,22,[[["self"]],[R[32]]]],[11,R[28],E,E,22,[[["self"]],[T]]],[11,R[29],E,E,22,[[["self"]],[R[1]]]],[11,"from",E,E,23,[[[T]],[T]]],[11,"into",E,E,23,[[["self"]],[U]]],[11,R[27],E,E,23,[[[U]],[R[1]]]],[11,R[31],E,E,23,[[["self"]],[T]]],[11,R[30],E,E,23,[[["self"]],[R[32]]]],[11,R[28],E,E,23,[[["self"]],[T]]],[11,R[29],E,E,23,[[["self"]],[R[1]]]],[11,"from",E,E,24,[[[T]],[T]]],[11,"into",E,E,24,[[["self"]],[U]]],[11,R[27],E,E,24,[[[U]],[R[1]]]],[11,R[31],E,E,24,[[["self"]],[T]]],[11,R[30],E,E,24,[[["self"]],[R[32]]]],[11,R[28],E,E,24,[[["self"]],[T]]],[11,R[29],E,E,24,[[["self"]],[R[1]]]],[11,"from",R[40],E,25,[[[T]],[T]]],[11,"into",E,E,25,[[["self"]],[U]]],[11,R[25],E,E,25,[[["self"]],[T]]],[11,R[26],E,E,25,N],[11,R[27],E,E,25,[[[U]],[R[1]]]],[11,R[31],E,E,25,[[["self"]],[T]]],[11,R[30],E,E,25,[[["self"]],[R[32]]]],[11,R[28],E,E,25,[[["self"]],[T]]],[11,R[29],E,E,25,[[["self"]],[R[1]]]],[11,"from",E,E,26,[[[T]],[T]]],[11,"into",E,E,26,[[["self"]],[U]]],[11,R[27],E,E,26,[[[U]],[R[1]]]],[11,R[31],E,E,26,[[["self"]],[T]]],[11,R[30],E,E,26,[[["self"]],[R[32]]]],[11,R[28],E,E,26,[[["self"]],[T]]],[11,R[29],E,E,26,[[["self"]],[R[1]]]],[11,"from",E,E,27,[[[T]],[T]]],[11,"into",E,E,27,[[["self"]],[U]]],[11,R[27],E,E,27,[[[U]],[R[1]]]],[11,R[31],E,E,27,[[["self"]],[T]]],[11,R[30],E,E,27,[[["self"]],[R[32]]]],[11,R[28],E,E,27,[[["self"]],[T]]],[11,R[29],E,E,27,[[["self"]],[R[1]]]],[11,"from",R[41],E,28,[[[T]],[T]]],[11,"into",E,E,28,[[["self"]],[U]]],[11,R[25],E,E,28,[[["self"]],[T]]],[11,R[26],E,E,28,N],[11,R[27],E,E,28,[[[U]],[R[1]]]],[11,R[31],E,E,28,[[["self"]],[T]]],[11,R[30],E,E,28,[[["self"]],[R[32]]]],[11,R[28],E,E,28,[[["self"]],[T]]],[11,R[29],E,E,28,[[["self"]],[R[1]]]],[11,"from",E,E,29,[[[T]],[T]]],[11,"into",E,E,29,[[["self"]],[U]]],[11,R[27],E,E,29,[[[U]],[R[1]]]],[11,R[31],E,E,29,[[["self"]],[T]]],[11,R[30],E,E,29,[[["self"]],[R[32]]]],[11,R[28],E,E,29,[[["self"]],[T]]],[11,R[29],E,E,29,[[["self"]],[R[1]]]],[11,"from",R[42],E,30,[[[T]],[T]]],[11,"into",E,E,30,[[["self"]],[U]]],[11,R[27],E,E,30,[[[U]],[R[1]]]],[11,R[31],E,E,30,[[["self"]],[T]]],[11,R[30],E,E,30,[[["self"]],[R[32]]]],[11,R[28],E,E,30,[[["self"]],[T]]],[11,R[29],E,E,30,[[["self"]],[R[1]]]],[11,"read",R[36],E,39,N],[11,R[43],"sonr",E,33,[[["self"],[R[0]]],[R[45],[R[46]]]]],[11,"lt",E,E,33,[[["self"],[R[0]]],["bool"]]],[11,"le",E,E,33,[[["self"],[R[0]]],["bool"]]],[11,"gt",E,E,33,[[["self"],[R[0]]],["bool"]]],[11,"ge",E,E,33,[[["self"],[R[0]]],["bool"]]],[11,R[43],R[44],E,0,[[["self"],[R[5]]],[R[45],[R[46]]]]],[11,"lt",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,"le",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,"gt",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,"ge",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,R[43],"sonr",E,35,[[["self"],[R[6]]],[R[45],[R[46]]]]],[11,"lt",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"le",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"gt",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"ge",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"from",R[44],E,0,[[["usize"]],[R[5]]]],[11,"from","sonr",E,35,[[["unixready"]],[R[6]]]],[11,"drop",E,E,37,N],[11,"bitor_assign",E,E,35,N],[11,R[47],R[36],E,39,[[["i32"]],[R[66]]]],[11,R[47],E,E,40,[[["i32"]],[R[48]]]],[11,R[7],E,E,40,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,E,40,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,E,40,[[["self"],["poll"]],[R[1],["error"]]]],[11,R[7],E,E,39,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,E,39,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,E,39,[[["self"],["poll"]],[R[1],["error"]]]],[11,R[7],"sonr",E,37,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,E,37,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,E,37,[[["self"],["poll"]],[R[1],["error"]]]],[11,"bitand",E,E,33,[[["self"],[R[0]]],[R[0]]]],[11,"bitand",E,E,35,[[["self"],[T]],[R[6]]]],[11,"hash",R[44],E,0,N],[11,"bitor","sonr",E,35,[[["self"],[T]],[R[6]]]],[11,"bitor",E,E,33,[[["self"],[R[0]]],[R[0]]]],[11,"eq",R[44],E,32,[[["self"],["event"]],["bool"]]],[11,"ne",E,E,32,[[["self"],["event"]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[5]]],["bool"]]],[11,"eq","sonr",E,33,[[["self"],[R[0]]],["bool"]]],[11,"ne",E,E,33,[[["self"],[R[0]]],["bool"]]],[11,"eq",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"ne",E,E,35,[[["self"],[R[6]]],["bool"]]],[11,"write",R[36],E,39,N],[11,"flush",E,E,39,[[["self"]],[R[1],["error"]]]],[11,"fmt",E,E,39,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt","sonr",E,33,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt",R[44],E,32,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt","sonr",E,37,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt",E,E,34,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt",R[44],E,0,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt","sonr",E,35,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt",R[36],E,40,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt","sonr",E,36,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"sub_assign",E,E,35,N],[11,"clone",E,E,36,[[["self"]],["setreadiness"]]],[11,"clone",E,E,33,[[["self"]],[R[0]]]],[11,"clone",R[44],E,32,[[["self"]],["event"]]],[11,"clone","sonr",E,35,[[["self"]],[R[6]]]],[11,"clone",R[44],E,0,[[["self"]],[R[5]]]],[11,R[51],R[36],E,39,[[["self"]],["i32"]]],[11,R[51],E,E,40,[[["self"]],["i32"]]],[11,"bitand_assign","sonr",E,35,N],[11,"cmp",E,E,33,[[["self"],[R[0]]],[R[46]]]],[11,"cmp",E,E,35,[[["self"],[R[6]]],[R[46]]]],[11,"cmp",R[44],E,0,[[["self"],[R[5]]],[R[46]]]],[11,R[52],R[36],E,39,[[["self"]],["i32"]]],[11,R[52],"sonr",E,34,[[["self"]],["i32"]]],[11,R[52],R[36],E,40,[[["self"]],["i32"]]],[11,"bitxor_assign","sonr",E,35,N],[11,"sub",E,E,33,[[["self"],[R[0]]],[R[0]]]],[11,"sub",E,E,35,[[["self"],[T]],[R[6]]]],[11,"bitxor",E,E,33,[[["self"],[R[0]]],[R[0]]]],[11,"bitxor",E,E,35,[[["self"],[T]],[R[6]]]],[11,"read",R[38],E,42,N],[11,R[52],E,E,42,[[["self"]],["i32"]]],[11,R[52],E,E,41,[[["self"]],["i32"]]],[11,R[47],E,E,41,[[["i32"]],[R[78]]]],[11,R[47],E,E,42,[[["i32"]],[R[82]]]],[11,"write",E,E,42,N],[11,"flush",E,E,42,[[["self"]],[R[1],["error"]]]],[11,"fmt",E,E,42,[[["self"],[R[50]]],[R[1],["error"]]]],[11,"fmt",E,E,41,[[["self"],[R[50]]],[R[1],["error"]]]],[11,R[51],E,E,42,[[["self"]],["i32"]]],[11,R[51],E,E,41,[[["self"]],["i32"]]],[11,R[7],E,E,42,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,E,42,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,E,42,[[["self"],["poll"]],[R[1],["error"]]]],[11,R[7],E,E,41,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,E,41,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,E,41,[[["self"],["poll"]],[R[1],["error"]]]],[11,"react",R[3],E,4,[[["self"],[R[4]]],[R[4]]]],[11,"react",E,E,5,[[["self"],[R[4]]],[R[4]]]],[11,"react",E,E,6,[[["self"],[R[4]]],[R[4]]]],[11,"react",E,E,38,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[33],E,7,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[34],E,8,[[["self"],[R[4]]],[R[4]]]],[11,"react",E,E,9,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[36],E,14,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[37],E,17,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[38],E,18,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[39],E,21,[[["self"],[R[4]]],[R[4]]]],[11,"react",E,E,23,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[40],E,27,[[["self"],[R[4]]],[R[4]]]],[11,"react",R[41],E,29,[[["self"],[R[4]]],[R[4]]]],[11,R[53],"sonr",E,15,[[["self"]],["self"]]],[11,R[54],E,E,15,[[["self"]],["self"]]],[11,R[53],E,E,19,[[["self"]],["self"]]],[11,R[54],E,E,19,[[["self"]],["self"]]],[11,"as_ref",R[37],E,17,[[["self"]],["stream"]]],[11,"clone",R[40],E,25,[[["self"]],["self"]]],[11,"clone",R[41],E,28,[[["self"]],["self"]]],[11,"clone",R[18],E,20,[[["self"]],[R[55]]]],[11,"from",R[3],E,3,[[["event"]],[R[4]]]],[11,"from",R[37],E,17,[[[R[10]]],["self"]]],[11,"from",R[40],E,26,[[[R[55]]],["self"]]],[11,"from",E,E,26,[[[R[55]]],["self"]]],[11,"from",R[41],E,28,[[[R[55]]],["self"]]],[11,"from",R[42],E,30,[[["error"]],["error"]]],[11,"from",E,E,30,[[["recverror"]],["error"]]],[11,"from",E,E,30,[[["tryrecverror"]],["error"]]],[11,"from",E,E,30,[[["addrparseerror"]],["error"]]],[11,"from",E,E,30,[[["fromutf8error"]],["error"]]],[11,"drop",R[3],E,11,[[["self"]]]],[11,"index","sonr",E,31,[[["self"],["usize"]],[T]]],[11,"index_mut",E,E,31,[[["self"],["usize"]],[T]]],[11,"fmt",R[3],E,3,[[["self"],[R[50]]],[R[1]]]],[11,"fmt",E,E,11,[[["self"],[R[50]]],[R[1]]]],[11,"fmt",R[35],E,12,[[["self"],[R[50]]],[R[1]]]],[11,"fmt",R[37],E,17,[[["self"],[R[50]]],[R[1]]]],[11,"fmt",R[40],E,25,[[["self"],[R[50]]],[R[1]]]],[11,"fmt",R[42],E,30,[[["self"],[R[50]]],[R[1]]]],[11,"read",R[3],E,11,N],[11,"read",R[37],E,17,N],[11,"write",R[3],E,11,N],[11,"flush",E,E,11,[[["self"]],[R[1]]]],[11,"write",R[37],E,17,N],[11,"flush",E,E,17,[[["self"]],[R[1]]]],[11,R[7],R[39],E,24,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1]]]],[11,R[8],E,E,24,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1]]]],[11,R[49],E,E,24,[[["self"],["poll"]],[R[1]]]],[11,R[7],R[40],E,26,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1]]]],[11,R[8],E,E,26,[[["self"],["poll"],[R[5]],[R[6]],[R[0]]],[R[1]]]],[11,R[49],E,E,26,[[["self"],["poll"]],[R[1]]]],[11,"new",R[44],"Creates a new `Event` containing `readiness` and `token`",32,[[[R[6]],[R[5]]],["event"]]],[11,R[63],E,"Returns the event's readiness.",32,[[["self"]],[R[6]]]],[11,R[5],E,"Returns the event's token.",32,[[["self"]],[R[5]]]],[11,"empty","sonr","Return a `PollOpt` representing no set options.",33,[[],[R[0]]]],[11,"edge",E,"Return a `PollOpt` representing edge-triggered…",33,[[],[R[0]]]],[11,"level",E,"Return a `PollOpt` representing level-triggered…",33,[[],[R[0]]]],[11,"oneshot",E,"Return a `PollOpt` representing oneshot notifications.",33,[[],[R[0]]]],[11,"is_edge",E,"Returns true if the options include edge-triggered…",33,[[["self"]],["bool"]]],[11,"is_level",E,"Returns true if the options include level-triggered…",33,[[["self"]],["bool"]]],[11,"is_oneshot",E,"Returns true if the options includes oneshot.",33,[[["self"]],["bool"]]],[11,R[61],E,R[62],33,[[["self"],[R[0]]],["bool"]]],[11,"insert",E,"Adds all options represented by `other` into `self`.",33,N],[11,"remove",E,R[60],33,N],[11,"new",E,"Return a new `Poll` handle.",34,[[],[R[1],["poll","error"]]]],[11,R[7],E,"Register an `Evented` handle with the `Poll` instance.",34,[[["self"],["e"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[8],E,"Re-register an `Evented` handle with the `Poll` instance.",34,[[["self"],["e"],[R[5]],[R[6]],[R[0]]],[R[1],["error"]]]],[11,R[49],E,"Deregister an `Evented` handle with the `Poll` instance.",34,[[["self"],["e"]],[R[1],["error"]]]],[11,"poll",E,"Wait for readiness events",34,[[["self"],["events"],[R[45],[R[56]]]],[R[1],["usize","error"]]]],[11,"poll_interruptible",E,"Like `poll`, but may be interrupted by a signal",34,[[["self"],["events"],[R[45],[R[56]]]],[R[1],["usize","error"]]]],[11,"empty",E,"Returns the empty `Ready` set.",35,[[],[R[6]]]],[11,R[57],E,"Returns a `Ready` representing readable readiness.",35,[[],[R[6]]]],[11,R[58],E,"Returns a `Ready` representing writable readiness.",35,[[],[R[6]]]],[11,"all",E,"Returns a `Ready` representing readiness for all operations.",35,[[],[R[6]]]],[11,R[59],E,"Returns true if `Ready` is the empty set",35,[[["self"]],["bool"]]],[11,"is_readable",E,"Returns true if the value includes readable readiness",35,[[["self"]],["bool"]]],[11,"is_writable",E,"Returns true if the value includes writable readiness",35,[[["self"]],["bool"]]],[11,"insert",E,"Adds all readiness represented by `other` into `self`.",35,N],[11,"remove",E,R[60],35,N],[11,R[61],E,R[62],35,[[["self"],[T]],["bool"]]],[11,"from_usize",E,"Create a `Ready` instance using the given `usize`…",35,[[["usize"]],[R[6]]]],[11,"as_usize",E,"Returns a `usize` representation of the `Ready` value.",35,[[["self"]],["usize"]]],[11,R[63],E,"Returns the registration's current readiness.",36,[[["self"]],[R[6]]]],[11,"set_readiness",E,"Set the registration's readiness",36,[[["self"],[R[6]]],[R[1],["error"]]]],[11,"new2",E,"Create and return a new `Registration` and the associated…",37,N],[11,R[64],R[36],"Create a new TCP stream and issue a non-blocking connect…",39,[[[R[65]]],[R[1],[R[66],"error"]]]],[11,"connect_stream",E,"Creates a new `TcpStream` from the pending socket inside…",39,[[[R[66]],[R[65]]],[R[1],[R[66],"error"]]]],[11,R[83],E,"Creates a new `TcpStream` from a standard `net::TcpStream`.",39,[[[R[66]]],[R[1],[R[66],"error"]]]],[11,R[84],E,"Returns the socket address of the remote peer of this TCP…",39,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[68],E,"Returns the socket address of the local half of this TCP…",39,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[69],E,R[70],39,[[["self"]],[R[1],[R[66],"error"]]]],[11,R[67],E,R[86],39,[[["self"],[R[67]]],[R[1],["error"]]]],[11,"set_nodelay",E,"Sets the value of the `TCP_NODELAY` option on this socket.",39,[[["self"],["bool"]],[R[1],["error"]]]],[11,"nodelay",E,"Gets the value of the `TCP_NODELAY` option on this socket.",39,[[["self"]],[R[1],["bool","error"]]]],[11,"set_recv_buffer_size",E,"Sets the value of the `SO_RCVBUF` option on this socket.",39,[[["self"],["usize"]],[R[1],["error"]]]],[11,"recv_buffer_size",E,"Gets the value of the `SO_RCVBUF` option on this socket.",39,[[["self"]],[R[1],["usize","error"]]]],[11,"set_send_buffer_size",E,"Sets the value of the `SO_SNDBUF` option on this socket.",39,[[["self"],["usize"]],[R[1],["error"]]]],[11,"send_buffer_size",E,"Gets the value of the `SO_SNDBUF` option on this socket.",39,[[["self"]],[R[1],["usize","error"]]]],[11,"set_keepalive",E,"Sets whether keepalive messages are enabled to be sent on…",39,[[["self"],[R[45],[R[56]]]],[R[1],["error"]]]],[11,"keepalive",E,"Returns whether keepalive messages are enabled on this…",39,[[["self"]],[R[1],[R[45],"error"]]]],[11,"set_ttl",E,R[71],39,[[["self"],["u32"]],[R[1],["error"]]]],[11,"ttl",E,R[72],39,[[["self"]],[R[1],["u32","error"]]]],[11,R[73],E,R[74],39,[[["self"],["bool"]],[R[1],["error"]]]],[11,"only_v6",E,R[75],39,[[["self"]],[R[1],["bool","error"]]]],[11,"set_linger",E,"Sets the value for the `SO_LINGER` option on this socket.",39,[[["self"],[R[45],[R[56]]]],[R[1],["error"]]]],[11,"linger",E,"Gets the value of the `SO_LINGER` option on this socket.",39,[[["self"]],[R[1],[R[45],"error"]]]],[11,R[76],E,R[77],39,[[["self"]],[R[1],[R[45],"error"]]]],[11,"peek",E,"Receives data on the socket from the remote address to…",39,N],[11,R[87],E,R[88],39,N],[11,R[89],E,R[90],39,N],[11,"bind",E,"Convenience method to bind a new TCP listener to the…",40,[[[R[65]]],[R[1],[R[48],"error"]]]],[11,"from_std",E,"Creates a new `TcpListener` from an instance of a…",40,[[[R[48]]],[R[1],[R[48],"error"]]]],[11,"accept",E,"Accepts a new `TcpStream`.",40,[[["self"]],[R[1],["error"]]]],[11,R[79],E,"Accepts a new `std::net::TcpStream`.",40,[[["self"]],[R[1],["error"]]]],[11,R[68],E,R[81],40,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[69],E,R[70],40,[[["self"]],[R[1],[R[48],"error"]]]],[11,"set_ttl",E,R[71],40,[[["self"],["u32"]],[R[1],["error"]]]],[11,"ttl",E,R[72],40,[[["self"]],[R[1],["u32","error"]]]],[11,R[73],E,R[74],40,[[["self"],["bool"]],[R[1],["error"]]]],[11,"only_v6",E,R[75],40,[[["self"]],[R[1],["bool","error"]]]],[11,R[76],E,R[77],40,[[["self"]],[R[1],[R[45],"error"]]]],[11,"bind",R[38],"Creates a new `UnixListener` bound to the specified socket.",41,[[["p"]],[R[1],[R[78],"error"]]]],[11,"from_listener",E,"Consumes a standard library `UnixListener` and returns a…",41,[[[R[78]]],[R[1],[R[78],"error"]]]],[11,"accept",E,R[80],41,[[["self"]],[R[1],[R[45],"error"]]]],[11,R[79],E,R[80],41,[[["self"]],[R[1],[R[45],"error"]]]],[11,R[69],E,R[70],41,[[["self"]],[R[1],[R[78],"error"]]]],[11,R[68],E,R[81],41,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[76],E,R[85],41,[[["self"]],[R[1],[R[45],"error"]]]],[11,R[64],E,"Connects to the socket named by `path`.",42,[[["p"]],[R[1],[R[82],"error"]]]],[11,R[83],E,"Consumes a standard library `UnixStream` and returns a…",42,[[[R[82]]],[R[1],[R[82],"error"]]]],[11,"pair",E,"Creates an unnamed pair of connected sockets.",42,[[],[R[1],["error"]]]],[11,R[69],E,R[70],42,[[["self"]],[R[1],[R[82],"error"]]]],[11,R[68],E,"Returns the socket address of the local half of this…",42,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[84],E,"Returns the socket address of the remote half of this…",42,[[["self"]],[R[1],[R[65],"error"]]]],[11,R[76],E,R[85],42,[[["self"]],[R[1],[R[45],"error"]]]],[11,R[67],E,R[86],42,[[["self"],[R[67]]],[R[1],["error"]]]],[11,R[87],E,R[88],42,N],[11,R[89],E,R[90],42,N]],"p":[[3,"Token"],[8,R[91]],[4,"Either"],[4,R[92]],[3,"Chain"],[3,"And"],[3,"Map"],[3,"Consume"],[3,R[93]],[3,"Mono"],[8,"Reactor"],[3,R[94]],[4,R[95]],[3,"System"],[3,R[96]],[6,R[97]],[8,R[98]],[3,"Stream"],[3,R[99]],[6,R[100]],[4,"Capacity"],[3,R[101]],[3,"Queue"],[3,R[102]],[3,"Dequeue"],[3,R[103]],[3,R[104]],[3,R[105]],[3,R[106]],[3,R[107]],[4,"Error"],[3,"PreVec"],[3,"Event"],[3,"PollOpt"],[3,"Poll"],[3,"Ready"],[3,R[108]],[3,R[109]],[3,"Or"],[3,R[110]],[3,R[111]],[3,R[112]],[3,R[113]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);