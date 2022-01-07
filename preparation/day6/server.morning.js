const express = require("express");
const path = require("path");
const hbs = require("hbs");   

// const bodyParser = require("body-parser");     // [未來可不用 bodyParser]
const session = require("express-session");   // [Session][1] 安裝 express-session 

// [Session 外存][1]
//  追加 redis 並產生 redis client instance 
const redis       = require("redis");
const redisClient = redis.createClient();

// [Session 外存][2]
// 追加 connect-redis 套件 
const redisStore  = require("connect-redis")(session);

const app = express();
const portNum = 8088;

const dramasRouter = require("./router/dramas.controllers");
const authRouter = require("./router/auth");
const aboutRouter = require("./router/about");


//////////////////////////////////////////
// 設定模板引擎
app.engine("html" , hbs.__express);
app.set("views" , path.join(__dirname , "application" , "views" ));
app.use( express.static( path.join( __dirname , "application") ));
//////////////////////////////////////////

//////////////////////////////////////////
// 使用 body-parser 處理  Form data  (req.body)
app.use(express.json());
app.use(express.urlencoded({
  extended : false,   // 是否用 額外套件 解析字串
  limit : "1mb",      // 限制 參數資料大小
  parameterLimit : "10000" // 限制參數個數 
}));

// [未來可不用 bodyParser]
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended : false,   // 是否用 額外套件 解析字串
//   limit : "1mb",      // 限制 參數資料大小
//   parameterLimit : "10000" // 限制參數個數 
// }));
//////////////////////////////////////////

//////////////////////////////////////////
// 處理 session 資料的 middleware 
// 後面才可用 req.session 做資料存取
// [Session][2] 設定 session middleware

app.use(session({
    // [Session 外存][3] 建立新的 redisStore
    store : new redisStore({ client: redisClient }),
    secret : "c90dis90#" , // 加密 session_id (salt)
    resave : true, // 不論修改 , 回存到 stores 
    saveUninitialized : false, // 初始化的　session data , 使否存到 stores
    name:"_testqq_id", // cookie name
    ttl : 24*60*60*1  // session 有效時間
}));
//////////////////////////////////////////


// 查看 session 的 Middleware 
app.use((req,res,next)=>{
  console.log(req.session);
  next();
});



////// 登入驗證
// V 1. 加入 login 頁面
// V 2. POST /auth API 驗證 + 紀錄資料到 session 上
// V 3. 加入 登入驗證 middleware (isUserLogined)
// V 4. GET /logout 登出 API 


// 加入 login 頁面
app.get("/login" , (req,res)=>{
  res.render("login.html");
});


app.get("/" , 
  // [Session][4] 加入 登入驗證判斷 middleware
  (req,res,next)=>{  // 是否登入驗證
    console.log(req.session);

    if(!req.session.userInfo || !req.session.userInfo.isLogined ){
      res.redirect("/login");
      return;
    };

    next();

    // 修改成 error first    
    // if(req.session.userInfo && req.session.userInfo.isLogined === true){
    //   next();
    // }else{
    //   res.send("您尚未登入！！！");
    // };
  },
  (req,res)=>{
    res.render("index.html");
  }
);

app.use("/dramas",dramasRouter);
app.use("/auth" , authRouter);
app.use("/about",aboutRouter);

// 關於我們 頁面
// app.get("/about/us",(req,res)=>{
//   res.render("aboutus.html");
// });

// 刪掉 session & cookies 
app.get("/logout",(req,res)=>{
    req.session.destroy();   // 刪掉 session 
    res.clearCookie("_ntust_tutorial_id"); // 刪掉 cookies 
    res.redirect("/login"); 
});




app.listen(portNum , ()=>{
  console.log(`Server is running at localhost:${portNum}`);
});
