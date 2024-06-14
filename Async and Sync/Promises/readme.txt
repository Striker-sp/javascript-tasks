Promises : 
Promise is for “eventual” completion of task. It is an object in JS.
It is a solution to callback hell.
let promise = new Promise( (resolve, reject) => { .... } )
Function with 2 handlers
        Note : resolve & reject are callbacks provided by JS



A JavaScript Promise object can be:
Pending : the result is undefined
Resolved : the result is a value (fulfilled)
Rejected : the result is an error object
resolve( result )
reject( error )
        Note : Promise has state (pending, fulfilled) & some
        result (result for resolve & error for reject).


To use Promises after getting the promise we generally have .then() and .catch() functions
The .then() function is used to display a message when the promise is fulfilled 
and similarly the .catch() function is used to display a message when promise is rejected
.then( ) & .catch( )
promise.then( ( res ) => { .... } )
promise.catch( ( err ) ) => { .... } )
provides message text in then() and catch()
        Note :  message in then() is of success in code execution
                and message in catch() is of error in code execution