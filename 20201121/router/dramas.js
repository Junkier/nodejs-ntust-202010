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

});


router.post("/createNewDramaData",(req,res)=>{

    let payload = req.body ;
    // console.log(payload);
    // console.log(payload["name"]);
    // console.log(payload["score"]);


    let data = fs.readFileSync("./models/sample2.json","utf8");
    data = JSON.parse(data);

    // [ {} , {} , {} , ...]

    data.push(payload);


    fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");



    res.json({message : "ok."});

});


module.exports = router;