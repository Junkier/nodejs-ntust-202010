const express = require("express");
const fs      = require("fs");

let router = express.Router();

router.get("/data",(req,res)=>{

    // let data = { 
    //     "name" : "jeff",
    //     "age"  : 18,
    // };

    // res.json(data);

    
    fs.readFile("sample1.json","utf8",(err,strData)=>{  // callback function
        if(err){
            res.json({ message : "* get error"});
            console.log(err);
        };

        console.log(strData);

        // Object / JSON / dict 
        let objData = JSON.parse(strData);

        // let objData = JSON.parse(strData);
        res.json(objData);
  

    });

    
});



module.exports = router;


