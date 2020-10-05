const express = require("express");
// const model   = require("../models");

var router = express.Router();


router.get("/page",
    (req,res)=>{
        let name = req.session.userInfo.name;
        res.render("dramas.html",{ templateName : name });
    }
);


// router.get("/list",
//     (req,res)=>{
//         model.dramas
//              .find({},{_id : 0 , __v : 0})
//              .then(result=>{
//                  res.json({result});
//              })
//              .catch(err=>{
//                  res.status(500).json({message:"Server internal fault."});
//              });
//     }
// );

// router.get("/detail/:dramaId",
//     (req,res)=>{
//         model.dramas
//              .findOne({dramaId : req.params.dramaId })
//              .then(result=>{
//                  res.json({result});
//              })
//              .catch(err=>{
//                  res.status(500).json({message:"Server internal fault."});
//              });
//     }
// );


// router.post("/detail",
//     (req,res)=>{
//         model.dramas
//              .create(req.body)
//              .then(result=>{
//                  res.json({result});
//              })
//              .catch(err=>{
//                  res.status(500).json({message:"Server internal fault."});
//              });
//     }
// );


// router.put("/detail/:dramaId",
//     (req,res)=>{
//         model.dramas.updateOne({dramaId : req.params.dramaId },{"$set" : { name : req.body.name }})
//             .then(result=>{
//                 res.json({result});
//             })
//             .catch(err=>{
//                 res.status(500).json({message:"Server internal fault."});
//             });
//     }
// );

// router.delete("/detail/:dramaId",
//     (req,res)=>{
//         model.dramas
//              .deleteOne({dramaId : req.params.dramaId })
//              .then(result=>{
//                 res.json({result});
//              })
//              .catch(err=>{
//                 res.status(500).json({message:"Server internal fault."});
//              });
//     }
// );




module.exports = router;