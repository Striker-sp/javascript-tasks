Function Sequence : 
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

Sequence Control : 
Sometimes you would like to have better control over when to execute a function

Callbacks
A callback is a function passed as an argument to another function

Note : Callbacks must be passed with name of function not the whole function-name with respect to parenthesis
    ex: function sum(){example1, example2}
        calc(1,2, sum) // here parenthesis is not used or else the script don't understand what we want to print on screen and it will display NaN

Callback Hell : 
Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.