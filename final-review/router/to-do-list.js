const express = require("express");

let router    = express.Router();


const model = require("../models");


// to-do-list 清單頁面
router.get("/page",(req,res)=>{
    res.render("to-do-list.html");
});

// to-do-list 清單資料
router.get("/list",(req,res)=>{

    model.toDoList
         .find({ })
         .then(result=>{
            
            res.json({ result });

            // res.json({ "result" : result });
            //  let a = 123 ; 
            //  let b = { a }; // -->  { "a" : 123 }
         })
         .catch(err=>{
            console.log(err);
            res.status(500).json({message : "Server interal fault."});
         });
});

//  to-do-list 新增 待辦事項 細節頁面
router.get("/detail/create",(req,res)=>{
   res.render("to-do-detail.html");
});



//  to-do-list 編輯 待辦事項 細節頁面   
router.get("/detail/:to_do_id",(req,res)=>{
    let toDoId = req.params.to_do_id;

    model.toDoList 
         .findOne({ "to_do_id" : toDoId })
         .then(result=>{

            res.render("to-do-detail.html",result);

            // res.render("to-do-detail.html",{
            //     brief   : result["brief"],
            //     level   : result["level"],
            //     author  : result["author"],
            //     content : result["content"],
            // });

         })
         .catch(err=>{
            console.log(err);
            res.status(500).json({message : "Server interal fault."});
         });
});


//  to-do-list 新增/更新 該待辦事項	
router.put("/detail/:to_do_id",(req,res)=>{
    let payload = req.body;
    let toDoId  = req.params.to_do_id;

    model.toDoList
         .updateOne(
            { "to_do_id" : toDoId  } , 
            { "$set"     : payload } , 
            { "upsert"   : true }     // update or insert  
         )
         .then(result=>{

            res.json({ message : "ok."});

         })
         .catch(err=>{
            console.log(err);
            res.status(500).json({message : "Server interal fault."});
         });

});



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