const express = require("express");
const fs      = require("fs");

let router    = express.Router();


router.get("/page",(req,res)=>{
    res.render("dramas.html");
});


router.get("/getDramaListData",(req,res)=>{
    let data = fs.readFileSync("./models/sample2.json","utf8");
    data = JSON.parse(data);

    let type = req.query.type;

    if(type === "全"){
        res.json({ result:data });
    }else{
        let filteredData = data.filter(ele => ele["category"] === type);
        res.json({ result : filteredData });
    };


    // console.log(type);

    
});

module.exports = router;