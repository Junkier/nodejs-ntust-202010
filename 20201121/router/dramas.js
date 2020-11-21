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


    ////// 1) 不管 dramaId 

    // // 讀取 json 
    // let data = fs.readFileSync("./models/sample2.json","utf8");
    // data = JSON.parse(data);

    // // [ {} , {} , {} , ...]
    // // 塞入 array
    // data.push(payload);

    // // 寫出成 json file 
    // // fs.writeFileSync("./models/sample2.json",data,"utf8");
    // fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");


    ////// 2) 調整 dramaId
    // 讀取 json 
    let data = fs.readFileSync("./models/sample2.json","utf8");
    data = JSON.parse(data);

    // 取得最新 dramaId 
    // [ "1001" , "1002" , "1003" , ... , "1007" ]
    // let latestDramaId  = data.map(ele => ele["dramaId"]).slice(-1)[0] ;
    // let newDramaId     = Number(latestDramaId) + 1 ;

    let latestDramaId  = data.map(ele => Number(ele["dramaId"])) 
                             .sort((a,b)=> b-a)[0];

    let newDramaId     = latestDramaId + 1 ;

    payload["dramaId"] = String( newDramaId );



    // [ {} , {} , {} , ...]
    // 塞入 array
    data.push(payload);

    // 寫出成 json file 
    // fs.writeFileSync("./models/sample2.json",data,"utf8");
    fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");


    res.json({message : "ok."});

});


module.exports = router;