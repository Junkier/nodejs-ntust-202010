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



// 解析 application/json
// app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended : false ,        // 額外套件使用
    limit : "1mb",            // 參數大小
    parameterLimit : '10000'  // 參數數量大小
}));


app.get("/",(req,res)=>{
    // res.send("Hello world!");

    res.render("index.html");
});


app.use("/about",aboutRouter);
app.use("/dramas",dramasRouter);




app.get("/hello",
    (req,res,next) => {
        console.log("Middleware 1 !!!");
        next();
    },
    (req,res,next) => {
        console.log("Middleware 2 !!!");
        next();
    },
    (req,res,next) => {
        console.log("Middleware 3 !!!");
        next();
    },
    (req,res) => {
        console.log("Middleware 4 !!!");
        res.send("Hello World!!");
    }
);



// app.get("/hello",
//     // Middleware
//     // (request , response , next)
//     (req,res,next)=>{
//         console.log("This is Middleware 1 !!!");
//         // next();
//         // res.send("Hello World!!!");
//     },
//     (req,res,next)=>{
//         console.log("This is Middleware 2 !!!");
//         next();
//         // res.send("Hello World!!!");
//     },
//     (req,res,next)=>{
//         console.log("This is Middleware 3 !!!");
//         next();
//         // res.send("Hello World!!!");
//     },
//     (req,res)=>{
//         console.log("This is Middleware 4 !!!");
//         // next();
//         res.send("Hello World!!!");
//     }
// );



let portNum = 8088;

app.listen(portNum,()=>{
    console.log("Server is running at: http://localhost:"+portNum);
});