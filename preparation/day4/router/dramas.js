const express = require("express");
const router = express.Router();
const fs = require("fs");

let readFilePromise = (dataPath) => {
  return new Promise( (resolve,reject) => {
    fs.readFile(dataPath,"utf8",(err,data)=> {
      if(err) reject(err);
      else resolve(JSON.parse(data));
    });
  });
};

router.get("/page",(req,res)=>{
  res.render("dramas.html");
})

router.get("/getDramaListData",async (req,res)=>{

  /// 1.  先全搜
  // try{
  //   let data = await readFilePromise("models/sample2.json");
  //   res.json({"result" : data});
  // }catch(err){
  //   res.status(500).json({ message : "檔案有問題！！！"});
  // };


  /// 2. 透過 type 判斷！！！
  try{
    let data = await readFilePromise("models/sample2.json");

    let type = req.query.type;

    if(type === "全"){
        res.json({ result:data });
    }else{
        let filteredData = data.filter(ele => ele["category"] === type);
        res.json({ result : filteredData });
    };

  }catch(err){
    res.status(500).json({ message : "檔案有問題！！！"});
  };
});


// POST /drama/data
router.post("/createNewDramaData", async (req,res)=>{
  try{

    console.log(req.body); // 透過 body-parser 解析得到

    ////// 0) 啥都不管
    // console.log(req.body);
    // console.log(req.body.category);
    // console.log(req.body.name);
    // console.log(req.body.score);
    // res.json({ message : "ok."});

    ////// 1) 不管 dramaId 
    // // 讀取 json 
    // let data = await readFilePromise("models/sample2.json");
    // let payload = req.body;

    // // [ {} , {} , {} , ...]
    // // // 塞入 array
    // data.push(payload);

    // // // 寫出成 json file 
    // // // fs.writeFileSync("./models/sample2.json",data,"utf8");
    // fs.writeFileSync("models/sample2.json",JSON.stringify(data),"utf8");
    // res.json({ message : "ok."});



    ////// 2) 調整 dramaId
    // 讀取 json 
    let data = await readFilePromise("models/sample2.json");
    let payload = req.body;

    // 取得最新 dramaId 
    // [ "1001" , "1002" , "1003" , ... , "1007" ]
    let latestDramaId  = data.map(ele => Number(ele["dramaId"])) 
                             .sort((a,b)=> b-a)[0];

    let newDramaId     = latestDramaId + 1 ;

    payload["dramaId"] = String( newDramaId );



    // // [ {} , {} , {} , ...]
    // // 塞入 array
    data.push(payload);

    // // 寫出成 json file 
    // fs.writeFileSync("./models/sample2.json",data,"utf8");
    fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");

    res.json({message : "ok."});


  }catch(err){
    console.log(err);
    res.status(500).json({ message : "檔案有問題！！！"});
    
  };
});

module.exports = router;