// async callback hell type

let age = 20;
console.log("Age is greater than 18 then he is senior");
console.log("Age is greater than 60 then he is senior");
console.log("Age is less than 60 then he is middle");
console.log("Age is less than 18 then he is child");

console.log("Age is :", age);

if(age>=18){
  if(age>=60){
  console.log("senior");
}
  else{
    console.log("younger");
  }
}
 else{
    console.log("child");
}