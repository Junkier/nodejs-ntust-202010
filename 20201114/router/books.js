const express = require("express");

let router = express.Router();

router.get("/data",(req,res)=>{

    let data = { 
        "name" : "jeff",
        "age"  : 18,
    };

    res.json(data);
});

module.exports = router;


