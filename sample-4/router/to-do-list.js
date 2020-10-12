const express = require("express");

var router = express.Router();

const fs     = require("fs");
const Multer = require('multer');
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
      fileSize: 6 * 1024 * 1024 // no larger than 6mb
    }
});


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


router.post("/testqq",
    multer.single("attachment"),
    async (req,res)=>{
        // GOGO multer

        // GOGO write file !!!
        // let result = await fs.writeFileSync(`sample-4/application/images/`)
        console.log(req.file);
        res.json({message:"ok"})
    }
);


module.exports = router;