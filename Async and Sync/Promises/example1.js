function getData(dataId, getNextData){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("data", dataId);
            // resolve("success");
            reject("error occured");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );