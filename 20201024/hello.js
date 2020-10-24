// console.log("Hello World!");
// console.log("I'm Jeff.");
// console.log("Today is Saturday!!!");

// ////////////////////////////////////////////////////////

// console.log(1235.16546);
// console.log([2,3,4,5]);  // Array 
// console.log({ "name" : "Jeff" , "age" : 12 });  // Object

////////////////////////////////////////////////////////

const express = require("express");

const app      = express();
// const app1     = express();
// const app2     = express();
// const app3     = express();



app.get("/", function(request,response){
    response.send("Hello World!");
});

app.get("/test",function(req,res){
    res.send("This is test page.");
});

app.get("/this-is-a-book",(req,res)=>{
    res.send("This is a book ~~~~");
});


// port
let portNum = 8088;
app.listen(portNum,function(){
    console.log("Server is running at http://localhost:" + String(portNum));
});
