const express = require("express");

let router    = express.Router();


router.get("/page",(req,res)=>{
    res.render("to-do-list.html");
});


router.get("/list",(req,res)=>{
    res.json({message:"ok."});
});

module.exports = router;