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


router.get("/detail/:to_do_id",
    async (req,res)=>{
        let data = await model.toDoList.findOne({to_do_id : req.params.to_do_id});

        data.templateName  = req.session.userInfo.name;
        data.to_do_id      = req.params.to_do_id ;

        data.attachments_part1 = data.attachments.slice(0,3);
        data.attachments_part2 = data.attachments.slice(3);

        res.render("to-do-detail.html",data);
    }
);



module.exports = router;