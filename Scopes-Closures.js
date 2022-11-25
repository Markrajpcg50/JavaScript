// Scopes and Block Scoping 

var firstName = "Mohan";

if(firstName ==="Mohan"){
    var lastName="Raj K";
}
console.log(firstName);
console.log(lastName);// the if block doesnt create a block and hence lastName is accessible outside

// scopes can be created using functions

var name="Mohan";
function allocateBatch(){
    if(name==="Mohan"){
        var batch=104;
    }
}
allocateBatch();
//console.log(batch); now batch is function scoped

var top=10;
var inner=50;
function scope(){
    var inner=20;
    console.log(inner);
}

scope();
console.log(inner);

// restricting the variables
function myFn(){
 var a=10;
 var b=20;
 console.log(a+b);
}
myFn();

var name="Mohan";
function printGreeting(name){
    console.log("Hello "+name);
}
printGreeting("Ram");

// IIFE -Immediately invoked function expression
(function (){
var a=10;
var b=10;
console.log(a+b);
})();

// Read and write 
var a=10; // write operation
//console.log(a); // read operation
function greet(name){ // read operation
    console.log(name); // write operation
}
greet("Mohan");

var foo;
console.log(foo); // read operation cannot work without declaration
foo=10; // write operation can work without declaration
console.log(foo); 

// global scope problem
var a=30;
function myFn(){
    var b=a;
    console.log(b);
    //console.log(c);
    d=11; // since this was not declared during the compilation state the variable created is in the global area
}

myFn();
console.log(d);


var global=40;

function outer(){
    var outer=global;
    console.log(outer);
    function inner(){
        var inner=outer;
        console.log(inner);
        var outer=50;
    }
    inner();
}

outer();
console.log("************");
console.log(value);
var value=10;

// Hoisting
a=10;
console.log(b);
c++;
var a;
var b;
var c;

myFn1();

function myFn1(){
    console.log("AAA");
}

function fnA(){

    fnB();
} 

function fnB(){
    fnA();
}

// fnA();

// strict mode

function mycode(){
"use strict";
var myName="here";
//myname="Mohan";
}

mycode();

// Closures

var a=10;
function outer(){
    var b=20;
    var inner= function (){
        console.log(a);
        console.log(b);
    }
    return inner;
}
var innerFn=outer();
innerFn();
// even when inner fn reference is returned only the reference is 
// returned and hence when we execute it still executes the same 

//  callback

a=10;
// wait for 1 second
var fn= function(){
    console.log(a);
}
//setTimeout(fn,1000);
console.log("end");

// closures in object with getters and setters
var createPerson=  function(){
    var firstName = "Mohan";
    var lastName = "Raj K";
    var newObj= {
    "getFirstName": function (){
    return firstName;
    },
    "getLastName": function(){
        return lastName;
    },
    "setFirstName": function(fName){
        firstName=fName;
    },
    "setLastName": function(lName){
        lastName=lName;
    }
    }
    return newObj
}

var person=createPerson();
console.log(person.getFirstName());
console.log(person.getLastName());

// async in javascript and how to resolve it
var i;

for(i=0;i<10;i++){
    (function(currentValueOfI){
    setTimeout(function(){console.log(currentValueOfI)},1000);
    })(i);
}
