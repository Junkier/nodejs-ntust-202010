const express = require('express');
const app = express();

const hbs = require("hbs");
const path = require("path");

const bodyParser = require("body-parser");

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


app.get("/",(req,res)=>{
  res.send("Hello world!");
});


app.listen(8088,function(){
    console.log("Server is running at http://localhost:" + String(8088));
});
