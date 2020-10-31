const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world!!!");
});

let portNum = 8088;

app.listen(portNum , ()=>{
    console.log("Server is running at http://localhost:"+portNum);
});