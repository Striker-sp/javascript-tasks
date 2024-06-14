let arr = ["Mumbai", "Delhi" ,"Pune"]
arr.forEach((val, idx ,arr) => {  //each value at each index
    console.log(val.toUpperCase(), idx ,arr);    //idx = index , arr = array itself , toUpperCase = all letters of string are capital
});