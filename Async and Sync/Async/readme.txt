Async :
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.
async await >> promise chains >> callback hell


ex: Sending Apis as request and receiving it as response

    console.log("1");
    console.log("2");
    console.log("Hi");
    console.log("3");
    console.log("4");

    output : 
    1
    2
    3
    4
    Hi