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
