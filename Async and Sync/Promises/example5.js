// Promise chaining
function getData(dataId, getNextData){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success ... ");
      if(getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

let promise1 = getData(1);
promise1.then((res) => {
  console.log(res);
});