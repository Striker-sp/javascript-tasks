console.log("1");
console.log("2");

setTimeout(() => {
	console.log("hello...");
}, 2000);  //timeout meaning time barrier required to make function run async i.e. parallely

console.log("3");
console.log("4");