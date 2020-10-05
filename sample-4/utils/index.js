let isUserValid = (req,res,next)=>{
    let account = req.body.account; 
    let passwd  = req.body.passwd;
    if(account === "jeff" && passwd === "testqq"){
        req.isLoginedValid = true;
    }
    else {
        req.isLoginedValid = false;
    };


    if(!req.isLoginedValid){
        res.status(400).json({message:"帳號或密碼錯誤！"});
        return;
    };

    next();
};

let setUserInfo = (req,res,next)=>{
    if(req.isLoginedValid){
        req.session.userInfo = {
            name : "大測試家" , 
            age  : 18 ,
            isLogined : true
        };
    }else{
        req.session.userInfo = { isLogined: false };
    };

    next();
};


let isUserLogined = (req,res,next)=>{
    if(!req.session.userInfo || !req.session.userInfo.isLogined){
        res.redirect("/login");
        return;
    }
    next();
};


module.exports = {
    isUserValid,
    setUserInfo,
    isUserLogined
};