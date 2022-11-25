var noOfRecords= 160;
var recordsPerPage= 40;
var output;
console.log("Program is Starting");

if(noOfRecords <=0 && recordsPerPage <=0)
{
    console.log("Number of records/ Records per page cannot be zero or negative")
}
else if(noOfRecords > recordsPerPage)
{
    console.log("Number of Records = "+noOfRecords);
    console.log("Records per Page = "+recordsPerPage);
    output=Math.ceil(noOfRecords/recordsPerPage);
    console.log("Number of Pages = "+output);
}
else{
    console.log("'Number of Pages = 1");
}
console.log("Program is Ending");