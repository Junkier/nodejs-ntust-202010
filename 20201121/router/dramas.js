const express = require("express");
const fs      = require("fs");

let router    = express.Router();


router.get("/page",(req,res)=>{
    res.render("dramas.html");
});


router.get("/getDramaListData",(req,res)=>{
    let data = fs.readFileSync("./models/sample2.json","utf8");
    data = JSON.parse(data);
    res.json({ result:data });
});

module.exports = router;