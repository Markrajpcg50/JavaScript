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

