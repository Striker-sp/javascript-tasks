// async callbacks type

const hello = () => {
  console.log("timeout of 2 seconds");
  console.log("hello");
}
 
setTimeout(hello , 2000);