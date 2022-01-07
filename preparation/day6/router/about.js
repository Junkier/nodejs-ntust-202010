const express = require("express");
const router = express.Router();

const validator = require("../utils/validator");

// 檢查 使用者的 session , 判斷是否有登入
// ==> 收到 validator.js 裡面
// let isUserLogined = (req,res,next)=>{
//     if(!req.session.userInfo || !req.session.userInfo.isLogined){
//         res.status(401).send("請先 <a href='/login'>登入</a> !");
//         return;
//     }
//     next();
// };
router.use(validator.isUserLogined);

router.get("/us",(req,res)=>{
  res.render("aboutus.html");
});

module.exports = router;