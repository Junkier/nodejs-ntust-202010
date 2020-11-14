const express = require("express");
const app = express();

const hbs  = require("hbs");
const path = require("path"); 


// 設定模板 (template) 引擎
app.engine("html",hbs.__express);

// 設定 template 所在路徑
app.set("views", path.join(__dirname ,"application","views") );



let portNum = 8088;


app.get("/",(req,res)=>{
    res.send("Hello World!");
});


app.get("/page",(req,res)=>{
    res.render("index.html");
});


app.listen(portNum,()=>{
    console.log("Server is running at http://localhost:"+portNum);
})