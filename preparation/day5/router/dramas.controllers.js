const express = require("express");
const fs = require("fs");
const router = express.Router();

const validator = require("../utils/validator");  // [Work 3]

let readFilePromise = (dataPath)=>{
  return new Promise( (resolve , reject) =>{
    fs.readFile(dataPath,"utf8" , (err,data)=>{
      if(err) reject(err);
      else resolve( JSON.parse(data) );
    });
  });
};



// /dramas/page --> 回傳 dramas.html
router.get("/page" , (req,res)=>{
  res.render("dramas.html");
}); 

// [Work 4] .use -> 100% 會經過的 middleware 
router.use(
   validator.isTokenExist,
   validator.isTokenValid,
);

// GET /dramas/list  --> 取得 資料
// [Work 1] 加入參數檢查 Middleware 
router.get("/list" , 
  // //////////////////
  // // [Work 3]
  // validator.isTokenExist,
  // validator.isTokenValid,
  // //////////////////
  (req,res,next)=>{
    // M1: 檢查 type 是否存在 ?
    // Coding GOGO
    next();
  },
  (req,res,next)=>{
    // M2: 檢查 type 是正確 ?
    // Coding GOGO
    next();
  },
  async (req,res)=>{   
    // M3: 主要處理邏輯 (100% 確保 type ok.)
    try {
      let data = await readFilePromise("models/sample2.json");
      let type = req.query.type;

      // 過濾資料
      if( type === "全"){
        res.json({ result : data });
      }else{
        let filteredData = data.filter( ele => ele["category"] === type );
        res.json({ result : filteredData });
      };

    } catch (err){
      console.log(err);
      res.status(500).json({ message: "系統有問題！"});
    };
  }
);







// POST /dramas/data-> 新增資料 
// [Work 2] 加入 API token 驗證檢查 , 預期 token 寫在 req.headers 上
// [Work 3] 轉成 validator
router.post("/data" , 

  // //////////////////
  // // [Work 3] validator.js Middleware 示範
  // validator.isTokenExist,
  // validator.isTokenValid,
  // //////////////////


  ////////////////// 
  // [Work 2]  匿名 Middleware 示範
  // (req,res,next)=>{
  //   // M1: 檢查 token 是否存在 ?
  //   if(!req.headers.token){
  //     res.status(400).json({message: "缺少 API token."});
  //   }else{
  //     next();
  //   };
  // },
  // (req,res,next)=>{
  //   // M2: 檢查 token 是否有效 ?
  //   if(req.headers.token !== "APTX4868"){
  //     res.status(403).json({message: "您沒有權限."});
  //   }else{
  //     next();
  //   };
  // },
  //////////////////
  async (req,res) =>{ 
    try{

      let data = await readFilePromise("models/sample2.json");

      // 2. 取得最新 dramaId  , 新增 new dramdId !!!
      let latestDramaId = data.map(ele=> ele["dramaId"])
                            .filter(v => v !== undefined)
                            .sort((a,b)=> b-a)[0];

      latestDramaId = Number(latestDramaId);

      let newDramaId = latestDramaId + 1 ;

      req.body["dramaId"] = String(newDramaId);

      // 3. 使用 .push 
      data.push(req.body);

      // 4. 再把 資料寫出去 sample2.json (同步處理)
      // fs.writeFileSync("models/sample2.json", data , "utf8");  // 會錯誤 , fs.writeFileSync 只接受 string
      fs.writeFileSync("models/sample2.json", JSON.stringify(data) , "utf8");

      res.json({message : "ok."});

    } catch(err){
      console.log(err);
      res.status(500).json({ message : "系統有問題！"});
    };
  }
);



module.exports = router;