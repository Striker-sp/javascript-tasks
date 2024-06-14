// async callback hell type
// nesting with "for" loop

for(let i = 0; i < 5 ; i++){ //for loop 1
    let str = " "; // defining a string
    for(let j=0; j<5; j++){ // for loop 2
        str = str +j; //declaring value of j in str
    }
    console.log(i, str); //logging str with respect to i
}

// output : 0 '01234'
//          1 '01234'
//          2 '01234'
//          3 '01234'
//          4 '01234'