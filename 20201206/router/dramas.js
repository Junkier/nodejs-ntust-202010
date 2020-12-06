const express = require("express");
const fs      = require("fs");

let router    = express.Router();

const validator = require("../utils/validator");

const model   = require("../models");

router.get("/page",(req,res)=>{
    res.render("dramas.html");
});




// GET /dramas/list
router.get("/list",
    (req,res)=>{

        let query =  req.query.type  === "全" ? {} : { "category" : req.query.type };

        model.dramas
             .find(query)
             .then(result=>{
                res.json( { result : result });
             })
             .catch(err=>{
                console.log(err);
                res.status(500).json({ message : "Server internal fault."});
             });


    }
);



// POST /dramas/detail
router.post("/detail",(req,res)=>{
    let payload = req.body;

    
    // 1. Getting the newest dramaId 
    model.dramas
         .findOne()
        //  .sort({ dramaId : 1 })  // dramaId little -> big
         .sort({ dramaId : -1 })    // dramaId big    -> little
         .then(ele=>{
            console.log(ele);
            let newDramaId      = Number(ele["dramaId"]) + 1 ;
            payload["dramaId"]  = String(newDramaId);

            // 2. Inserting payload (create)
            return model.dramas.create(payload);
         })
         .then(result=>{
            res.json({message:"ok." });
         })
         .catch(err=>{
            console.log(err);
            res.status(500).json({ message : "Server internal fault."});
         });


    // model.dramas
    //      .create(payload)
    //      .then(result=>{
    //         res.json({message:"ok." , result : result });
    //      })
    //      .catch(err=>{
    //         console.log(err);
    //         res.status(500).json({ message : "Server internal fault."});
    //      });
});


// PUT /dramas/detail/:dramaId
router.put("/detail/:dramaId",(req,res)=>{
    let dramaId = req.params.dramaId;
    let payload = req.body;   // { name : "..." , score : "..." }

    model.dramas 
         .updateOne(
             {"dramaId" : dramaId },
             { "$set"   : { name : payload.name , score : payload.score } }
         )
         .then(result=>{
             console.log(result);
            res.json({message:"ok." });
         })
         .catch(err=>{
            console.log(err);
            res.status(500).json({ message : "Server internal fault."});
         });
});



// POST /dramas/data
router.post("/data",
    // validator.isTokenValidInHeaders,
    (req,res)=>{


        let payload = req.body ;

        console.log(payload);
        // console.log(payload["name"]);
        // console.log(payload["score"]);


        ////// 1) 不管 dramaId 

        // // 讀取 json 
        // let data = fs.readFileSync("./models/sample2.json","utf8");
        // data = JSON.parse(data);

        // // [ {} , {} , {} , ...]
        // // 塞入 array
        // data.push(payload);

        // // 寫出成 json file 
        // // fs.writeFileSync("./models/sample2.json",data,"utf8");
        // fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");


        ////// 2) 調整 dramaId
        // 讀取 json 
        let data = fs.readFileSync("./models/sample2.json","utf8");
        data = JSON.parse(data);

        // 取得最新 dramaId 
        // [ "1001" , "1002" , "1003" , ... , "1007" ]
        // let latestDramaId  = data.map(ele => ele["dramaId"]).slice(-1)[0] ;
        // let newDramaId     = Number(latestDramaId) + 1 ;

        let latestDramaId  = data.map(ele => Number(ele["dramaId"])) 
                                .sort((a,b)=> b-a)[0];

        let newDramaId     = latestDramaId + 1 ;

        payload["dramaId"] = String( newDramaId );



        // [ {} , {} , {} , ...]
        // 塞入 array
        data.push(payload);

        // 寫出成 json file 
        // fs.writeFileSync("./models/sample2.json",data,"utf8");
        fs.writeFileSync("./models/sample2.json",JSON.stringify(data),"utf8");


        res.json({message : "ok."});

    }
);


module.exports = router;