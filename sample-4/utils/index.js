let isUserLogined = (req,res,next)=>{
    if(!req.session.userInfo || !req.session.userInfo.isLogined){
        res.redirect("/login");
        return;
    }
    next();
};


module.exports = {
    isUserLogined
};