// 實名 Middleware 
let isTokenValid = (req,res,next) => {

    // token 是否存在
    if(!req.query.token){
        res.status(400).send("缺少 token");
        // res.send("缺少 token !");
        return;
    };

    // token 是否正確
    if(req.query.token !== "APTX4869"){
        res.status(400).send("token 錯誤!");
        // res.send("token 錯誤!");
        return;
    };

    next();

};

let isTokenValidInHeaders = (req,res,next)=>{

     // token 是否存在
     if(!req.headers.token){
        res.status(400).send("缺少 token");
        // res.send("缺少 token !");
        return;
    };

    // token 是否正確
    if(req.headers.token !== "APTX4869"){
        res.status(400).send("token 錯誤!");
        // res.send("token 錯誤!");
        return;
    };

    next();

};

module.exports = {
    isTokenValid : isTokenValid,
    isTokenValidInHeaders : isTokenValidInHeaders,
    testQQ : "abcdef",
    data: [1,2,3,4,5]

    // isTokenValid : (req,res,next) => {

    //     // token 是否存在
    //     if(!req.query.token){
    //         res.status(400).send("缺少 token");
    //         // res.send("缺少 token !");
    //         return;
    //     };
    
    //     // token 是否正確
    //     if(req.query.token !== "APTX4869"){
    //         res.status(400).send("token 錯誤!");
    //         // res.send("token 錯誤!");
    //         return;
    //     };
    
    //     next();
    
    // }
};