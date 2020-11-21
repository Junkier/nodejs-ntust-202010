const express = require("express");
const app = express();

const hbs  = require("hbs");   // handlebars
const path = require("path"); 
const fs   = require("fs");


// 設定模板 (template) 引擎
app.engine( "html" , hbs.__express );

// app.engine( "pug"  , hbs.__express );


// 設定 template 所在路徑
app.set("views", path.join(__dirname ,"application","views") );


// 設定 靜態檔 位置
// static file
app.use(express.static(path.join(__dirname,"application")));



let portNum = 8088;


app.get("/",(req,res)=>{
    res.send("Hello World!");
});


app.get("/page",(req,res)=>{
    let name = req.query.name || "Jeff";
    res.render("index.html",{
        testName : name
    });
});


app.get("/data",(req,res)=>{

    let data = fs.readFileSync("./models/sample1.json","utf8");
    data = JSON.parse(data);

    res.json({ result:data });

});


app.listen(portNum,()=>{
    console.log("Server is running at http://localhost:"+portNum);
})