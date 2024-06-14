Variables : 
Variables are containers for data

Variable Rules : 
1. Variable names are case sensitive;  “a” & “A” is different.
    types: 
    for example fullname : two letters full and name are joined together
        a. FullName - PascalCase which means both letters are capital
        b. fullName - CamelCase which means first letter is small and second letter is capital it is best to prefer CamelCase to write code.
        c. full-name - KebabCase which means both letters are small but there is a hyphen or dash in-between two letters
        d. full_name - SnakeCase which means there is underscore between two letters that are small
2. Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
3. Only a letter, underscore( _ ) or $ should be 1st character.
4. Reserved words cannot be variable names.
    ex: console keyword is Reserved keyword because it has a purpose in Javascript to log or display the content on console screen of browser.
5. “=” is called as assignment operator.

ex: area of circle
    here radius 'r' is referred as variable when writing formulae of pi*r*r for area of circle
    the value of r can differ or changed when writing area of circle but container where that value is stored is inside r variable.
    

    Note :  null is special value which we know but value is called absent or empty value
            undefined is value where we don't know what exactly what is the value. 

Javascript is dynamically typed language which means we don't have to say we either want to store variable or string    etc. 
    ex: fullName = 25;
        here fullName is a name as it suggest but we can store value of integer i.e. numbers 

 
let, const & var : 
var : Variable can be re-declared & updated. A global scope variable.
let : Variable cannot be re-declared but can be updated. A block scope variable.
const : Variable cannot be re-declared or updated. A block scope variable.


Var : 
1. var has the function or global scope.
2. It gets hoisted to the top of its scope and initialized undefined.	
3. It can be updated or re-declared.	
4. It's an old way to declare a variable.
5. Can be declared without initialization.


let : 
1. let's have the block scope.	
2. It also got hoisted to the top of its scope but didn't initialize.
3. It can only be updated and can't be re-declared.	
4. It's a new way to declare variables introduced in ES6.
5. Can be declared without initialization.	


const : 
1. const variable has the block scope.		
2. It also got hoisted to the top of its scope but didn't initialize.
3. It can't be updated or re-declared.	
4. It's also a new way to declare a variable, which introduces in ES6.
5 .Cannot be declared without initialization.
