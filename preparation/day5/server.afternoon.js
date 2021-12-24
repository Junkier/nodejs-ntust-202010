const express = require("express");
const path    = require("path");
const hbs     = require("hbs");   // 記得 npm install hbs

const bodyParser = require("body-parser");  // 記得 npm install body-parser

const app = express();
const portNum = 8088;

const dramasRouter = require("./router/dramas.controllers");
const authRouter = require("./router/auth");

const validator = require('./utils/validator');


// 設定 template engine
app.engine("html" , hbs.__express);
app.set("views" , path.join(__dirname , "application" , "views" ));
app.use( express.static( path.join( __dirname , "application") ));

// 設定 body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : false,   // 是否用 額外套件 解析字串
  limit : "1mb",      // 限制 參數資料大小
  parameterLimit : "10000" // 限制參數個數 
}));



///// [auth] 加入 session
const session      = require("express-session");
app.use(session({
	secret : "c90dis90#" ,	     // 加密 session_id (salt)
	resave : true,               // 不論修改 , 回存到 stores 
	saveUninitialized : false,   // 初始化的　session data , 使否存到 stores
	name:"_ntust_tutorial_id",   // cookie name
	ttl : 24*60*60*1             // session 有效時間
}));



//// 登入驗證
// 1. GET /login 頁面
// 2. POST /auth 驗證
// 3. GET /logout 登出 


// [W5] 1. 
app.get("/login",(req,res)=>{
	res.render("login.html");
});

// [W5] 2. 
app.use("/auth",authRouter);

////////////////////////////
// [Work 5] session with logined
app.use(validator.isUserLogined);
////////////////////////////

app.use("/dramas",dramasRouter);

app.get("/" , (req,res)=>{
  res.render("index.html");
});

// 關於我們 頁面
app.get("/about/us",(req,res)=>{
  res.render("aboutus.html");
});


// // [W6]  加入  驗證機制
//// 之後移到前面
// // [W5] 1. 
// app.get("/login",(req,res)=>{
// 	res.render("login.html");
// });

// // [W5] 2. 
// app.use("/auth",authRouter);



app.listen(portNum , ()=>{
  console.log(`Server is running at localhost:${portNum}`);
});
