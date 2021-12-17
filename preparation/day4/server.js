const express = require("express");
const hbs = require("hbs");
const bodyParser   = require("body-parser");
const path = require("path");
const app = express();

const portNum = 8088;

const dramaRouter = require("./router/dramas");

// [Views][1] 設定模板引擎  ( 使 express 可解讀 html 程式)
app.engine("html", hbs.__express);

// [Views][2] 設定模板 (template) 位置
app.set("views" , path.join(__dirname , "application","views"));

// [Views][3] 設定靜態檔 位置 (讀取 *.css / *.js / *.jpg / ... 用的)
app.use(express.static(path.join(__dirname , "application")));


// 解析 application/json
app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended : false ,        // 是否用 額外套件 解析字串
    limit : "1mb",            // 參數大小
    parameterLimit : '10000'  // 參數數量大小
}));



app.get("/",(req,res)=>{
  // res.send("嗨嗨 , 我是 Node.js server");

  // [Views][4] 使用 render 回傳 html 頁面
  res.render("index.html");
});


app.get("/testqq" , (req,res)=>{
  res.render("template.html");
});


app.get("/data",(req,res)=>{
  res.json({ name : "jeff" , age : 18 });
});

app.get("/about/us",(req,res)=>{
    res.render("aboutus.html");
});


app.use("/dramas",dramaRouter);


app.listen(portNum,()=>{
  console.log(`Server is running at localhost:${portNum}`);
});