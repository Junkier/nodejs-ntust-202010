let isTokenExist = (req,res,next) => {
   // M1: 檢查 token 是否存在 ?
  if(!req.headers.token){
    res.status(400).json({message: "缺少 API token."});
  }else{
    next();
  };
};

let isTokenValid = (req,res,next) => {
  // M2: 檢查 token 是否有效 ?
  if(req.headers.token !== "APTX4869"){
    res.status(403).json({message: "您沒有權限."});
  }else{
    next();
  };
};

////////////////// [Work5]
let isUserLogined = (req,res,next)=>{
    if(!req.session.userInfo || !req.session.userInfo.isLogined){
        res.status(401).send("請先 <a href='/login'>登入</a> !");
        return;
    }
    next();
};
//////////////////

module.exports = {
  isTokenExist,
  isTokenValid,
  isUserLogined // [Work5]
};