const user = {
    name : "Sam", 
    email : "sam@study.com", 
    country : "USA", 
}

// const name = user.name;
// const email = user.email;
// const country = user.country;

const {name : userName, email, country} = user
console.log(userName);
console.log(email);
console.log(country);