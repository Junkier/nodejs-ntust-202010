const express = require("express");

let router = express.Router();

router.get("/page",(req,res)=>{

    res.send("This is about page!!!");
});

module.exports = router;


