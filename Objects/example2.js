const employee = {
    calcTax(){                                 // 1st and most prominent way to write a code
        console.log("Tax rate is 10%");
    },
    // calcTax2 : function(){
    //     console.log("Tax rate is 20%");         // 2nd way to write code but mostly 1st way is used in coding
    // }
};

const emp1 = {
    salary: 10000,
    calcTax(){                                 // prototype of object to see what will happen if two similar names function clashes altogether
        console.log("Tax rate is 20%");
    },
};

const emp2 = {
    salary: 20000,
};

const emp3 = {
    salary: 30000,
};

const emp4 = {
    salary: 40000,
};

const emp5 = {
    salary: 50000,
};

// console.log(employee.calcTax1());
// console.log(employee.calcTax2());

emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;
emp5.__proto__ = employee;