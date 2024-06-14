// arrow function to check vowel in string
const countVow = (str) => {
    let count = 0;
    for (const char of str){
        if ( 
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        )
            {
            count++;
        }
    }
    // console.log("Vowel : "+ count);
    return count;
}

