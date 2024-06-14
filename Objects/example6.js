// class and object // inheritance
class Person {
    constructor(){                                                          // constructor
        console.log("Constuctor is invoked and object is about to get inherited using class");
        this.species = "humans";
    }
    eat(){
        console.log("eat is better to live");
    }
    sleep(){
        console.log("sleep is better to concentrate");
    }
    drink(){
        console.log("drink is better to stay hydrated");
    }
    work(){
        console.log("Work is better to earn a living");
    }
};

class Engineer extends Person{
    work(){
        console.log("Solve problems");
        console.log("Build something");
    }
};

let SmartEng = new Engineer();


class Doctor extends Person{
    work(){
        console.log("Cures Disease");
        console.log("Saves Lives");
    }
};

let SmartDoc = new Doctor();
