const express = require("express");

let router    = express.Router();


const model = require("../models");


router.get("/page",(req,res)=>{
    res.render("to-do-list.html");
});


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
    // res.json({message:"ok."});
});

module.exports = router;