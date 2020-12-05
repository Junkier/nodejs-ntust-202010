const express = require("express");
let router    = express.Router();


router.get("/us",(req,res)=>{
    res.render("aboutus.html");
});

module.exports = router;