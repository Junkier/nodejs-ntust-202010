const express = require("express");
const router = express.Router();

const model = require("../models");  // 預設找該資料夾底下的 index.js
// console.log(model);s

router.get("/page" , (req,res)=>{
  res.render("dramas.html");
}); 


// V GET /dramas/list
router.get("/list", async (req,res)=>{
  try{
    // 全部搜尋
    // let data = await model.dramas.find();

    // 透過 type 做類型過濾
    let condition = req.query.type === "全" ? {} : { category : req.query.type };
    let data = await model.dramas.find(condition , { _id :0 });
    // console.log(data);
    res.json({ result : data });
  } catch(err){
    console.log(err);
    res.status(500).json({ message : "Server 端發生錯誤！"});
  }
});

// V POST /dramas/detail
router.post("/detail", async (req,res)=>{
  try{
    // 1. 取得最新的 dramaId 
    let lastElement = await model.dramas
                                 .findOne({} , { dramaId : 1})
                                 .sort({ dramaId : -1 });  // 透過 dramaId 小-> 大 排序

    let lastDramaId = lastElement["dramaId"];
    let newDramaId = Number(lastDramaId) + 1;

    // console.log(lastDramaId);

    req.body.dramaId = String(newDramaId);

    // 2. 新增資料
    let result = await model.dramas.create(req.body);
    console.log("新增結果 :" , result);
    
    res.json({ message : "ok."});
  } catch(err){
    console.log(err);
    res.status(500).json({ message : "Server 端發生錯誤！"});
  }
});

// V PUT /dramas/detail/:dramaId
router.put("/detail/:dramaId", async (req,res)=>{
  try{
    let dramaId = req.params.dramaId;
    let payload = req.body;   // { name : "..." , score : "..." }

    let result = await model.dramas.updateOne(
                        { "dramaId" : dramaId } , // 條件
                        { "$set"    : { name : payload.name , score : payload.score} } // 更新資料
                      )

    console.log("更新結果 :" , result);
    res.json({ message : "ok."});

  } catch(err){
    console.log(err);
    res.status(500).json({ message : "Server 端發生錯誤！"});
  }
});

// V DELETE /dramas/detail/:dramaId
router.delete("/detail/:dramaId", async (req,res)=>{
  try{
    let dramaId = req.params.dramaId;
    let result = await model.dramas.deleteOne({ "dramaId" : dramaId });

    console.log("刪除結果 :" , result);
    res.json({ 
      message : "ok." , 
      deletedCount : result["deletedCount"]
    });

  } catch(err){
    console.log(err);
    res.status(500).json({ message : "Server 端發生錯誤！"});
  }
});

module.exports = router;