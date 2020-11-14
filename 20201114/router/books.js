const express = require("express");
const fs      = require("fs");

let router = express.Router();


// 非同步 , Async
// fs.readFile 
// callback
router.get("/data",(req,res)=>{

    
    //     let strData = fs.readFile('sample1.json',"utf8",()=>{});
    //     console.log(strData);    // 您會得到神秘的 undefined 
    //     let objData = JSON.parse(strData);
    //     res.json(objData);

    console.log("Start!!!");

    let data = {
        name : "Jeff",
        age  : 18
    };

    
    fs.readFile("sample1.json","utf8",(err,strData)=>{  // callback function
        if(err){
            res.json({ message : "* get error"});
            console.log(err);
        };

        // console.log(strData);

        // Object / JSON / dict 
        // let objData = JSON.parse(strData);
        data = JSON.parse(strData);

        console.log(data);

        console.log("In callback!!!");


        // res.json(data);

        // res.json(objData);

        // res.json(strData);


    });

    res.json(data);

    console.log("Outside callback!!!");

    console.log("End !!!");

});






module.exports = router;


