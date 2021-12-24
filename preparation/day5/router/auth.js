const express = require("express");
let router    = express.Router();

const user = {
    account : "jeff",
    passwd  : "testqq",
};
// V 1. let isAccountExist = ... ;
// V 2. let isPasswdExist  = ... ;
// V 3. let isUserValid    = ... ;
// 4. let setUserInfo    = ... ;
  // --> 導到 session

let isAccountAndPasswdExist = (req,res,next)=>{
    if(!req.body.account || !req.body.passwd){
        res.status(400).json({ message : "帳號或密碼有漏 !"});
        return;
    };

    next();

};

let isUserValid = (req,res,next) => {
    if(req.body.account !== user.account || req.body.passwd !== user.passwd){
        res.status(400).json({ message : "帳號或密碼有誤!"});
        return;
    };

    next();

};


let setUserInfo = (req,res,next)=>{
    console.log("setUserInfo !!!");
    console.log(req.session);

    req.session.userInfo = {
        name : "jeff",
        isLogined : true
    };

    next();
};



// POST /auth
router.post("/",

    // 1. 檢查 account / passwd 是否存在
    isAccountAndPasswdExist,

    // 2. 檢查 account / passwd (使用者資訊) 是否有效
    isUserValid,

    // 3. 設定 user info on session
    setUserInfo,
    
    (req,res)=>{
        // console.log(req.body);
        res.json({message:"ok."});
    }
);

module.exports = router;
