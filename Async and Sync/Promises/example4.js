// Promise chaining

function asyncFunction1(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Success...");
    }, 2000);
  });
}

function asyncFunction2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Success...");
    }, 2000);
  });
}

function asyncFunction3(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data3");
      resolve("Success...");
    }, 2000);
  });
}

console.log("fetching data1...")
let promise1 = asyncFunction1();
promise1.then((res) => {
console.log(res);
console.log("fetching data2...")
  let promise2 = asyncFunction2();
  promise2.then((res) => {
  console.log(res);
  console.log("fetching data3...")
    let promise3 = asyncFunction3();
    promise2.then((res) => {
    console.log(res);
    });
  });
});
