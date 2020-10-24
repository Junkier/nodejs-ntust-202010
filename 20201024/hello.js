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

app.get("/abcd",function(req,res){
    res.send("This is abcd page.");
});

// port
app.listen(8088,function(){
    console.log("Server is running at http://localhost:" + String(8088));
});
