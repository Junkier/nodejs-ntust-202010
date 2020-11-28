const express = require("express");
let router    = express.Router();


// router.get("/us",(req,res)=>{
//     res.render("aboutus.html");
// });

// POST /auth
router.post("/",
    // 1. 檢查 account / passwd 是否存在
    (req,res,next)=>{
        if(!req.body.account || !req.body.passwd){
            res.status(400).json({ message : "帳號或密碼有漏 !"});
            return;
        };

        next();
    },
    (req,res)=>{
        console.log(req.body);
        res.json({message:"ok."});
    }
);

module.exports = router;




