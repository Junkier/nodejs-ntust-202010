const express = require("express");
const uuid    = require('uuid/v1');
const moment  = require("moment");

const model   = require("../models");

var router = express.Router();

const fs     = require("fs");
const Multer = require('multer');
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
      fileSize: 6 * 1024 * 1024 // no larger than 6mb
    }
});

let isFileExist = (req,res,next)=>{
    if(!req.file) res.status(400).json({message:"Lacking of image files."});
    else next();
};



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
        // console.log(data);
        res.render("to-do-detail.html",{ 
            templateName : req.session.userInfo.name ,
            to_do_id     : req.params.to_do_id ,
        });
    }
);


router.post("/images",
    multer.single("attachment"),
    isFileExist,
    async (req,res)=>{

        // [Code Review]
        // 1. file download 
        // 2. create fileName 
        // 3. insert to mongoDB 

        // GOGO multer

        let randomFactor = uuid().replace(/-/g,"");
        let fileType     = req.file.mimetype.match(/^(image|application)\/(.*)/)[2];

        let fileName     = `${randomFactor}.${fileType}`;

        // GOGO write file !!!
        await fs.writeFileSync(`sample-4/application/images/${fileName}`,req.file.buffer);

        res.json({message:"ok",fileName});

        // next();
    },
    // [Code Review]
    // insert into mongoDB
);


module.exports = router;