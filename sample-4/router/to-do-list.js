const express = require("express");
const model   = require("../models");

var router = express.Router();

router.get("/page",
    (req,res)=>{
        res.render("to-do-list.html",{ 
            templateName : req.session.userInfo.name 
        });
    }
);



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


router.get("/detail/create",
    async (req,res)=>{
        res.render("to-do-detail.html",{
            templateName : req.session.userInfo.name,
            attachments_part1 : [null,null,null],
            attachments_part2 : [null,null,null]
        });
    }
);


router.get("/detail/:to_do_id",
    async (req,res)=>{
        let data = await model.toDoList.findOne({to_do_id : req.params.to_do_id});

        data.templateName  = req.session.userInfo.name;
        data.to_do_id      = req.params.to_do_id ;


        // [Images]
        data.attachments_part1 = data.attachments.slice(0,3);
        data.attachments_part2 = data.attachments.slice(3);
        res.render("to-do-detail.html",data);
    }
);


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



router.get("/the-newest-id",
    async (req,res)=>{
        let ele = await model.toDoList.findOne({},{to_do_id:1}).sort({to_do_id:-1});
        let lastToDoId = ele.to_do_id;
        let newToDoId = Number(lastToDoId) + 1;

        req.session.caseInfo = {toDoId : newToDoId};

        res.json({ result : newToDoId});
    }
);


module.exports = router;