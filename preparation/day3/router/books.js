const express = require("express");
const fs      = require("fs");  // file-system , node.js 原生套件 

const router = express.Router();  // 回傳 Router 物件 , 存入變數

// 設定路徑 / API 設計
router.get("/",(req,res)=>{
  res.send("我是 books router 的根路徑");
});

router.get("/testqq",(req,res)=>{
  res.send("這是 books 底下的 testqq 路徑");
});

router.get("/data",(req,res)=>{
  fs.readFile("data.json","utf8",(err,data)=>{

    // 1) 單純讀資料
    // console.log(data);
    // res.send(data);

    // 2) err 處理
    // 3) 轉成 JSON 資料
    if(err){
      console.log(err);
      res.send("檔案有問題！");
    }else{
      // res.send(data);
      let result = JSON.parse(data);
      console.log(typeof data);
      console.log(data);
      console.log(typeof result);
      console.log(result);
      res.json(result);
    };

  });
});

router.get("/data-2",(req,res)=>{

  let data2 = fs.readFile("data.json","utf8",()=>{});
  console.log(data2);
  res.send(data2);

  // 檔案系統的 I/O ==> 非同步動作 (asynchronous)
  // fs.readFile("data.json","utf8",(err,data)=>{
  //   if(err){
  //     console.log(err);
  //     res.send("檔案有問題！");
  //   }else{
  //     let result = JSON.parse(data);
  //     res.json(result);
  //   };
  // });
  
});


router.get("/multi-data",(req,res)=>{

  // 把 data1.json ~ data5.json 
  // 讀出來後回傳 
  let result = {};

  // 不佳 (callback hell)
  fs.readFile("models/data1.json","utf8",(err,data1)=>{
    fs.readFile("models/data2.json","utf8",(err,data2)=>{
      fs.readFile("models/data3.json","utf8",(err,data3)=>{
        fs.readFile("models/data4.json","utf8",(err,data4)=>{
          fs.readFile("models/data5.json","utf8",(err,data5)=>{

            result["data1"] = JSON.parse(data1);
            result["data2"] = JSON.parse(data2);
            result["data3"] = JSON.parse(data3);
            result["data4"] = JSON.parse(data4);
            result["data5"] = JSON.parse(data5);

            res.json(result);
          });
        });
      });
    });
  });

  // 1. 使用 readFileSync ==> 用說的 , 不寫
  // 2. 使用 Promise 
});


let readFilePromise = (dataPath) =>{
  return new Promise( (resolve , reject)=>{
    fs.readFile(dataPath,"utf8",(err,data)=>{
      if(err){
        reject(err);
      }else{
        resolve(JSON.parse(data));
      };
    });
  });
};

// [八成 Day4]
router.get("/multi-data-promise",(req,res)=>{

  // 把 data1.json ~ data5.json 
  // 讀出來後回傳 
  let result = {};

  // 使用 Promise 
  readFilePromise("models/data1.json")
          .then(r=>{
            result["data1"] = r;
            return readFilePromise("models/data2.json");
          })
          .then((r)=>{ 
            result["data2"] = r;
            return readFilePromise("models/data3.json");
          })
          .then((r)=>{ 
            result["data3"] = r;
            return readFilePromise("models/data4.json");
          })
          .then((r)=>{ 
            result["data4"] = r;
            return readFilePromise("models/data5.json");
          })
          .then((r)=>{ 
            result["data5"] = r;
            result["message"]= "我用 Promise!!!";
            res.json(result);
          })
          .catch(err=>{
            res.send("檔案有問題！！！");
          });
});


router.get("/multi-data-async",async (req,res)=>{

  try{
    // 把 data1.json ~ data5.json 
    // 讀出來後回傳 
    let result = {};

    let data1 = await readFilePromise("models/data1.json");
    let data2 = await readFilePromise("models/data2.json");
    let data3 = await readFilePromise("models/data3.json");
    let data4 = await readFilePromise("models/data4.json");
    let data5 = await readFilePromise("models/data5.json");

    result["data1"] = data1;
    result["data2"] = data2;
    result["data3"] = data3;
    result["data4"] = data4;
    result["data5"] = data5;
    result["message"]= "我用 Async / Await !!!";

    res.json(result);

  }catch(err){
    res.send("檔案有問題！！！");
  }

});


// [module 相關][1] 將 router 導出 , 等著別人 require 引入使用
module.exports = router;

