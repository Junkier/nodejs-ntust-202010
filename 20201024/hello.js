// console.log("Hello World!");
// console.log("I'm Jeff.");
// console.log("Today is Saturday!!!");

// ////////////////////////////////////////////////////////

// console.log(1235.16546);
// console.log([2,3,4,5]);  // Array 
// console.log({ "name" : "Jeff" , "age" : 12 });  // Object

////////////////////////////////////////////////////////

const express = require("express");

const app     = express();


app.get("/", function(request,response){
    response.send("TestQQQQ");
});

// port
app.listen(8088,function(){
    console.log("Server is running at localhost:" + String(8088));
});
