const express = require("express");
const hbs     = require("hbs");
const fs      = require("fs");
const path    = require("path");


const app = express();

const dramasRouter = require("./router/dramas");
const aboutRouter  = require("./router/about");

const bodyParser   = require("body-parser");
const { json } = require("body-parser");



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


app.get("/main",

    // 1. type 參數是否存在
    (req,res,next) => {
        if(!req.query.type){
            res.send("缺少 type 參數!");
            return;
        };

        next();

        // if(!req.query.type){
        //     res.send("缺少 type 參數!");
        // }else{
        //     next();
        // }
    },

    // 2. type 參數是否正確 --> data / page 
    (req,res,next) =>{

        // Error fist 
        if(req.query.type !== "data" && req.query.type !== "page"){
            res.send("type 參數錯誤!");
            return;
        };

        // Non else
        next();


        // if(req.query.type === "data" || req.query.type === "page"){
        //     next();
        // }else{
        //     res.send("type 參數錯誤!");
        // };
    },

    // 3. 主邏輯區
    (req,res)=>{
        // type :
        // - data --> json
        // - page --> html
        let data = fs.readFileSync("./models/sample1.json","utf8");
        data = JSON.parse(data);

        if(req.query.type === "data"){
           
            res.json({ result : data });

        } else if (req.query.type === "page"){
            let books = data["books"];
            res.render("middleware-tutorial.html" , {
                templateBooks : books
            });
        };


    }
);



let portNum = 8088;

app.listen(portNum,()=>{
    console.log("Server is running at: http://localhost:"+portNum);
});