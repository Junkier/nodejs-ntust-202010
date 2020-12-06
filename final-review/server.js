const express = require('express');
const app = express();

const hbs = require("hbs");
const path = require("path");

const bodyParser = require("body-parser");


const session     = require("express-session");
const redis       = require("redis");
const redisStore  = require("connect-redis")(session);
const redisClient = redis.createClient();

const authRouter     = require("./router/auth");
const toDoListRouter = require("./router/to-do-list");


app.engine("html",hbs.__express);

app.set("views",  path.join( __dirname , "application" , "views"));

app.use(express.static( path.join(__dirname , "application" )));


// Setting body-parser

// application/json 
app.use( bodyParser.json() );


// application/x-form-urlencoded
app.use( bodyParser.urlencoded( {
		extended : false ,
		limit : "1mb",
		parameterLimit : '10000'
}));
//// req.body from this



// Use Session
app.use(session({
  store : new redisStore({ client: redisClient}),
  secret : "c90dis90#" ,
  resave : true,
  saveUninitialized : false,
  name:"_ntust_tutorial_id",
  ttl : 24*60*60*1
}))



//// Model 部分建立完 , 再開啟即可使用
// const dramasRouter   = require("./router/dramas");
// const imagesRouter   = require("./router/images");
// const aboutRouter    = require("./router/about");

// app.use("/dramas",dramasRouter);
// app.use("/images",imagesRouter);
// app.use("/about", aboutRouter);
////////////

app.use("/to-do-list",toDoListRouter);


app.get("/welcome",(req,res)=>{
  res.render("welcome.html");
});



app.get("/login",(req,res)=>{
  res.render("login.html");
});

app.get("/logout",(req,res)=>{
	req.session.destroy();
	res.clearCookie("_ntust_tutorial_id");
	res.redirect("/login");
});


app.use("/auth",authRouter);

app.get("/",(req,res)=>{
  res.send("Hello world!");
});


app.listen(8088,function(){
    console.log("Server is running at http://localhost:" + String(8088));
});
