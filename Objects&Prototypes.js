// creating objects
var myObj={
    "foo":"Value",
    "age":26,
    "address":{
        "street":"123",
        "city":"blore",
        "pin":"1234"
    }
}; 
console.log(myObj);
console.log(myObj["address"]);

// creating objects using function
var emp1={};
emp1.firstName="Michael";
emp1.lastName="Scott";
emp1.gender="M";
emp1.designation="Regional Manager";

var emp2={};
emp2.firstName="Dwight";
emp2.lastName="Achrute";
emp2.gender="M";
emp2.designation="Assistant Regional Manager";

function createEmployeeObject(firstName, lastName, gender, designation){
    var newObject={};
    newObject.firstName=firstName;
    newObject.lastName=lastName;
    newObject.gender=gender;
    newObject.designation=designation;
    return newObject;
}

var emp3=createEmployeeObject("Mohan","Raj","M","Deputy Manager")
console.log(emp1);
console.log(emp2);
console.log(emp3);

// constructor mode by using new 
// here new keywork is followed by a function
//

function createStudentObject(firstName, lastName, gender, designation){
    //var newObject={}; // changed to var this={};
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    //return newObject; // return this;
}

var stu1 = new createStudentObject("Harvey","Spectre","M")
console.log(stu1);

// recap on array
var myArray=[ 10,20,30,40];
console.log(myArray.length);
myArray.push({});
console.log(myArray.length);
myArray.push(function(){console.log("inside array")});
console.log(myArray.length);

/* var bicycle={
    "cadence":50,
    "speed":20,
    "gear":4
}; */
var bicycle1= createBicycle(50,20,4);
var bicycle2= createBicycle(20,5,4);
function createBicycle(cadence,speed,gear){
    var newBicycle={};
    newBicycle.cadence=cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle;
}

function Bicycle(cadence,speed,gear){
    //var this={};
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    // return this;
}

var bicycle3= new Bicycle(60,30,5);
console.log(bicycle3);

var bicycle4= new createBicycle(10,10,1);
console.log(bicycle4);

var bicycle5= Bicycle(5,5,5);
console.log(bicycle5);

//4 ways to call a function in JS

function foo(){
    console.log("Hello");
}
foo(); // method 1 of calling functions

var obj={};
obj.foo=function(){
    console.log("Hai");
};

obj.foo(); // method 2 of calling functions

new foo(); // method 3 of calling functions (2 lines are added)

foo.call(); // metod 4 of calling functions

//console.log(Math.round(Math.random()*10));

// execution concept in JS

console.log(this);// this referes to global object

var obj ={"prop":"this is the object itself"};

obj.foo=function(){
    console.log("hello");
    console.log(this);// this refers to obj object
};

obj.foo();

function NewBicycle(cadence,speed,gear,tirePressure){
    //var this={};
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.tirePressure=tirePressure;
    this.inflateTires=function(){
        this.tirePressure +=3;
    }
    // return this;
}

function Mechanic(name){
    this.name=name;
}

var mike= new Mechanic("Mike");

var bicycle6= new NewBicycle(50,30,5,30);
mike.inflateTires= bicycle6.inflateTires;
console.log(bicycle6);
mike.inflateTires.call(bicycle6);
console.log(bicycle6);
mike.inflateTires.call(bicycle6);
console.log(bicycle6);


//------------------------------------
//method 4 of calling a function
function foo(){
    this.abc="def";
}
//foo.call({});
//--------------

// Prototypes

