const express = require("express");
const uuid    = require('uuid/v1');
// const moment  = require("moment");

const model   = require("../models");

var router = express.Router();

const fs     = require("fs");
const path   = require("path");
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

        data.templateName = req.session.userInfo.name;
        data.to_do_id     = req.params.to_do_id ;

        res.render("to-do-detail.html",data);
    }
);


router.post("/images",
    multer.single("attachment"),
    isFileExist,
    async (req,res,next)=>{

        // [Code Review]
        // 1. file download 
        // 2. create fileName 
        // 3. update mongoDB 

        let randomFactor = uuid().replace(/-/g,"");
        let fileType     = req.file.mimetype.match(/^(image|application)\/(.*)/)[2];

        let fileName     = `${randomFactor}.${fileType}`;

        await fs.writeFileSync(`sample-4/application/images/${fileName}`,req.file.buffer);
        req.fileName = fileName;

        res.json({message:"ok",fileName});

        next();
    },
    async (req,res)=>{
        let to_do_id = req.query.to_do_id;
        let index    = req.query.index;

        let result = await model.toDoList.updateOne({
            to_do_id,
        },{$set:{
            [`attachments.${index}`] : req.fileName
        }});
    }
);


router.delete("/images",
    async (req,res)=>{

        // 1. Removing images from applications
        let result1 = fs.unlinkSync(path.join(__dirname,"../","application",req.body.src));
        let to_do_id = req.body.to_do_id;


        // 2. Updating null in mongoDB 
        let result2 = await model.toDoList.updateOne(
            { to_do_id  },
            { $set:{  [`attachments.${req.body.index}`] : null  }}
        );

        res.json({message:"ok."});
    }
);


module.exports = router;