const express = require("express");
const path    = require("path");
const fs      = require("fs");

let router = express.Router();

router.get("/",(req,res)=>{
    res.send("This is about page.");
});

// router.get("/testqq",(req,res)=>{
    // res.sendFile( path.join(__dirname,"sample.jpg") )
// })

// /about/data
router.get("/data",(req,res)=>{
    fs.readFile("data.json","utf8",(err,data)=>{
        if(err){
            res.json({message : "error"});
        };

        console.log(data);
        res.send(data);
    });
});

module.exports = router;