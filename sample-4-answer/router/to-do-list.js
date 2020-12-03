const express = require("express");
const model   = require("../models");

var router = express.Router();



// to-do-list 清單頁面
router.get("/page",
    (req,res)=>{
        res.render("to-do-list.html",{ 
            templateName : req.session.userInfo.name 
        });
    }
);

// to-do-list 清單資料
router.get("/list",
    (req,res)=>{
        model.toDoList
             .find({})
             .then(result=>{
                res.json({result});
             })
             .catch(err=>{
                console.error(err);
                res.status(500).json({message:"Server internal fault."});
             });
    }
);


// 新增  待辦事項 細節頁面 
router.get("/detail/create",
    (req,res)=>{
        res.render("to-do-detail.html",{
            templateName : req.session.userInfo.name,
        });
    }
);


// 編輯  待辦事項 細節頁面
router.get("/detail/:to_do_id",
    (req,res)=>{
        model.toDoList
             .findOne({to_do_id : req.params.to_do_id})
             .then(data=>{
                data.templateName  = req.session.userInfo.name;
                data.to_do_id      = req.params.to_do_id ;
        
                res.render("to-do-detail.html",data);
             })
             .catch(err=>{
                console.error(err);
                res.status(500).json({message:"Server internal fault."});
             });

       
    }
);


//  新增/更新  該待辦事項
router.put("/detail/:to_do_id",
    (req,res)=>{
        model.toDoList
             .updateOne(
                { to_do_id : req.params.to_do_id },
                { "$set"   : req.body },
                { upsert : true }
             )
             .then(result=>{
                res.json({message : "ok."});
             })
             .catch(err=>{
                console.error(err);
                res.status(500).json({message:"Server internal fault."});
             });
    }
);


// 刪除  該待辦事項
router.delete("/detail/:to_do_id",
    (req,res)=>{
        model.toDoList
             .deleteOne(
                { to_do_id : req.params.to_do_id },
             )
             .then(result=>{
                res.json({message : "ok."});
             })
             .catch(err=>{
                console.error(err);
                res.status(500).json({message:"Server internal fault."});
             });
    }
);  


// 取得最新的 to_do_id (不開發)
router.get("/the-newest-id",
    (req,res)=>{
        model.toDoList
             .findOne({},{to_do_id:1})
             .sort({to_do_id:-1})
             .then(ele=>{
                let lastToDoId = ele.to_do_id;
                let newToDoId = Number(lastToDoId) + 1;
        
                res.json({ result : newToDoId});
             })
             .catch(err=>{
                console.error(err);
                res.status(500).json({message:"Server internal fault."});
             });
       
    }
);


module.exports = router;