const express = require("express");
const hbs     = require("hbs");
const path    = require("path");


const app = express();

const dramasRouter = require("./router/dramas");
const aboutRouter  = require("./router/about");

const bodyParser   = require("body-parser");



// Template engine 
app.engine("html",hbs.__express);


// Template location 
app.set("views", path.join(__dirname,"application","views"));

// Static file 
app.use(express.static( path.join(__dirname,"application")));

// 解析 req.body 使用
app.use(bodyParser.urlencoded());



app.get("/",(req,res)=>{
    // res.send("Hello world!");

    res.render("index.html");
});


app.use("/about",aboutRouter);
app.use("/dramas",dramasRouter);


let portNum = 8088;

app.listen(portNum,()=>{
    console.log("Server is running at: http://localhost:"+portNum);
});