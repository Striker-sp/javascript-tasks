Objects : 
In JavaScript, objects are king. If you understand objects, you understand JavaScript.
In JavaScript, almost "everything" is an object.

Types : 
Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

JavaScript Primitives
A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.


JavaScript defines 7 types of primitive data types:

Types : 
1.string
2.number
3.boolean
4.null
5.undefined
6.symbol
7.bigint

Prototypes in JS :
JS objects have a special property called prototype.
A javaScript object is an entity having state and behavior (properties and method).
We can set prototype using _ _ proto _ _
*If object & prototype have same method,
object’s method will be used.

Prototype is a reference to an object i.e. address of an object



Classes in JS : 
It is somewhat a template or blueprint of object
Those objects will have some state (variables) & some behaviour (functions) inside it.
Class is a program-code template for creating objects.

Syntax : 
class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}

let myObj = new MyClass( ) ;


Constructor( ) method is :
1.automatically invoked by new 
2.initializes object
Syntax  : 

class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}


Inheritance in JS : 
inheritance is passing down properties & methods from parent class to child class.

Syntax : 
class Parent {
}

class Child extends Parent {
}

*If Child & Parent have same method, child’s
method will be used. [Method Overriding]


Class super keyword : 
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

Syntax : 
super(arguments);  // calls the parent constructor (only inside the constructor)
super.parentMethod(arguments);  // calls a parent method