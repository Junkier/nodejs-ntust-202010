const express = require("express");

let router = express.Router();


router.get("/page",(req,res)=>{
    res.send("This is books page.");
});


router.get("/test",(req,res)=>{
    res.json({ name : "jeff" , age : 18});
});

router.get("/hello",(req,res)=>{
    res.send("Hello QQQQQQ");
});



module.exports = router;