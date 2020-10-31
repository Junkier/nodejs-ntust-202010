const express = require("express");
const path    = require("path");

let router = express.Router();

router.get("/",(req,res)=>{
    res.send("This is about page.");
});

router.get("/testqq",(req,res)=>{
    res.sendFile( path.join(__dirname,"sample.jpg") );
})

module.exports = router;