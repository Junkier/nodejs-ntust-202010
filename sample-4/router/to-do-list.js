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


router.get("/detail/edit/:to_do_id",
    async (req,res)=>{
        let data = await model.toDoList.findOne({to_do_id : req.params.to_do_id});

        data.templateName  = req.session.userInfo.name;
        data.to_do_id      = req.params.to_do_id ;


        // [Images]
        data.attachments_part1 = data.attachments.slice(0,3);
        data.attachments_part2 = data.attachments.slice(3);

        res.render("to-do-detail-edit.html",data);
    }
);


router.get("/detail/create",
    async (req,res)=>{
        res.render("to-do-detail-create.html",{
            templateName : req.session.userInfo.name,
            attachments_part1 : [null,null,null],
            attachments_part2 : [null,null,null]
        });
    }
);


router.get("/the-newest-id",
    async (req,res)=>{
        if(req.session.caseInfo && req.session.caseInfo.toDoId){
            res.json({ result : req.session.caseInfo.toDoId});
            return;
        };

        let ele = await model.toDoList.findOne({},{to_do_id:1}).sort({to_do_id:-1});
        let lastToDoId = ele.to_do_id;
        let newToDoId = Number(lastToDoId) + 1;


        req.session.caseInfo = {toDoId : newToDoId};

        res.json({ result : newToDoId});
    }
);

// [Images]
// destroy res.session.caseInfo
// router.post("/detail/edit/:to_do_id",

// );


module.exports = router;