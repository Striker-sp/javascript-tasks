// Classes and object
class Ferrari {
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

let LaFerrari = new Ferrari();  //class to object declaration

LaFerrari.setBrand("LZ-7000");

let Enzo = new Ferrari();       // another class to object declaration 
Enzo.setBrand("FE-1400");