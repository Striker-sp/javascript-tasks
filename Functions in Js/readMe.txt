Functions in JS : 
Block of code that performs a specific task, can be invoked whenever needed

Function Definition:
Defining a function or simply creating a function

Syntax:
1.
function functionName( ) {
//do some work 
}
2.
function functionName( param1, param2 ...) {
//do some work
}

Function Call:
Calling a function or simply making the function work 
functionName( );

Function params or parameters :
function params are local variables of function which have block scope of function simply means that that particular function exist for that particular block of code defined within curly braces {}

Arrow function => :
Compact way to write function or simple way to defining a function

Syntax:
const functionName = ( param1, param2 ...) => {
//do some work
}

Example:
const sum = ( a, b ) => {
return a + b;
}


forEach Loop in Arrays : 
arr.forEach( callBackFunction )
CallbackFunction : Here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function

Syntax:
arr.forEach( ( val ) => {
console.log(val);
})


what are higher order function/method : 
they take a function as a parameter or returns a function 
Note : Callback Function are higher order function
ex: forEach