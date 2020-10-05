const express = require("express");

var router = express.Router();


router.get("/page",
    (req,res)=>{
        res.render("to-do-list.html",{ 
            templateName : req.session.userInfo.name 
        });
    }
);


router.get("/detail/:toDoId",
    (req,res)=>{
        res.render("to-do-detail.html",{ 
            templateName : req.session.userInfo.name ,
            toDoId : req.params.toDoId ,
        });
    }
);


module.exports = router;