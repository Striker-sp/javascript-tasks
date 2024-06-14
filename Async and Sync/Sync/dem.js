// Sync JS
// In Sync JS the code is executed one after another simply means line by line depending on wich line is written and called first
//Synchronous code will block further execution of the remaining code until it finishes the current one 

console.group("This is Sync Code");
document.write("This is Sync Code example");
document.write("Hi"); // First 
document.write("<br>");

document.write("Coder");// Second 
document.write("<br>");

document.write("How are you"); // Third
document.write("<br>");

//  Async JS
// Asynchronous code allows the program to be executed immediately

console.group("This is Async Code");
document.write("This is Async Code example");
document.write("<br>");
document.write("Hi");
document.write("<br>");

setTimeout(() => {
	document.write("Let us see what happens");
}, 2000);

document.write("<br>");
document.write("End");
document.write("<br>");
