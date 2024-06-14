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

getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
    getData(3).then((res) => {
      console.log(res);
    });
  });
});