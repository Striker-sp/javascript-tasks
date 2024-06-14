// Classes and object // constructor
class Ferrari {
    constructor(brand, milage) { 
        console.log("Constructor is created and new object created");
        this.brand = brand;
        this.milage = milage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
};

let LaFerrari = new Ferrari("LaFerrari", 20); 
console.log(LaFerrari);
 //class to object declaration

// LaFerrari.setBrand("LZ-7000");

let Enzo = new Ferrari("Enzo", 15);
console.log(Enzo);       
// another class to object declaration 
// Enzo.setBrand("FE-1400");