// async callback hell type
// nesting

function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
        getNextData();
    }
    },2000)
}

//real callback hell  
console.log("callback hell example");   
getData(1, () => {
    console.log("getting data2...");
    getData(2,() => {
    console.log("getting data3...");
        getData(3, () => {
        console.log("getting data4...");
            getData(4, () => {             
                console.log("end of data...");
        });
        });
    });
}); 


//output :  data 1
//          console.log("getting data2...");
//          data 2
//          console.log("getting data3...");
//          data 3
//          console.log("getting data4...");
//          data 4
//          console.log("end of data...");
