const express = require("express");
const router  = express.Router();

router.get("/",(req,res)=>{
  res.send("嗨嗨 , 我是 /about 的 router");
});

module.exports = router;