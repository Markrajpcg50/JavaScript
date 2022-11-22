console.log("Hello World");

var a=10;
var b="10";
var c=false;
var d=10;
console.log(a);
console.log(b);
console.log(c);

if(a==d)
{
    console.log(a,"is equal to",d);
}
if(a==b)
{
    console.log("== operator does the type casting");
}
if(a!==b)
{
    console.log("=== operator does not do type casting");
}

if(a){
    console.log("a is a value and it will be true");
}
else{
    console.log("a is not a value/null and it will be false");
}
if(b){
    console.log("a is a string and it will be true");
}
else{
    console.log("a is empty string/null and it will be false");
}

var myString="Hello";
// creating objects
var myObj={};
console.log(myObj);
// adding state to an object
myObj.prop="Name";
console.log(myObj);
myObj.prop2="35";
console.log(myObj);
console.log(myObj.prop);
console.log(myObj.prop2);

// creating objects using object literals
var myObj2={
    "name":"Client",
    "Org":"ABC Inc",
    "Estd": 2022
}
console.log(myObj2);
console.log("Accessing the state using the dot notation "+myObj2.name);
console.log("Accessing the state using the square bracket notation "+myObj2["name"]);

// Nested Objects
var myObj3={
    "id":001,
    "name":"emp1",
    "dept":undefined,
    "account":{ 
        "accNum":364646,
        "balance":2525.60
    }
}
console.log(myObj3);
console.log("dot operator accoutn number is ",myObj3.account.accNum);
console.log("box operator account number is ",myObj3.account["accNum"]); // why isnt account number getting printed when using [] operator?

// === operator wrt to objects

var myObj4;
myObj4=myObj3;
console.log(myObj3);
console.log(myObj4);
if(myObj3===myObj4)
{
    console.log("both variables are pointing to the same object");
}

// undefined vs null interms of object
console.log(myObj3.balance); // this will give undefined as that property does not exist in the current object
console.log(myObj4.dept); // this one also returns undefined but it is not the same as the one above
console.log(myObj3); // we get dept as undefined but there is not balance in myobj3

// deleting a property in a object

delete myObj3.dept
console.log(myObj3);

// Arrays
 var myArray=["Hello", "World", "JS"];
 console.log(myArray);
 console.log(myArray[0]);
 console.log(myArray[1]);
 console.log(myArray[2]);

 console.log(myArray.length);
 myArray[3]="Java Brains"; // unlike in java array length is not fixed and can be expanded as per requirement
 console.log(myArray.length);
 console.log(myArray["0"]); // 0,1,2,3 are properties of the array and can be accessed using the box operator
 myArray[400]="Youtube";
 console.log(myArray.length);
 console.log(myArray);
 
 // String as a primitive and object
 var greeting="Hello World";
 console.log(greeting.length);
 console.log(typeof greeting);

 // creating functions in JS
 function demo(){
    console.log("inside function called as demo");
 }

 demo();

 function demo1(name){
    console.log("inside function called as demo and printing name as "+name);
 }

 demo1("mohan");
 // both the time the demo with the argument is picked because in JS function overloading is not allowed
 // change the demo with arg to demo1

 // usinf return statements
 function demo2(name, age)
 {
    return "Your Name is "+name+" and Age is "+age;
 }

 var returned=demo2("Mohan",26);
 console.log(returned);

 var eg= function demo4(){
    console.log("Inside a function assigned to a varibale ");
 }
 eg();
 // demo4(); this wont work and the only way to invoke the function is through the var reference
 var eg2= function (){
    console.log("eg2");
 }
 eg2();

 var eg3= function(fn){
    console.log(fn);
 }
 eg3(eg2);
 console.log(eg3);

 //invoking a function from a function

 var vr= function (name){
    console.log("My Name is "+name);
 }
 var val= function(fn,name){
    fn(name);
 }

 val(vr,"Mohan");

 // objects with function as properties
 var myObj5 = {
    "name":"Mohan",
    "company":"ExaThought",
    "work": function(name){
        console.log(name+" is Working");
    }
 }

 myObj5.work("Mohan");

 // getters, setters and this in JavaScript
 