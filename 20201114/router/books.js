const express = require("express");
const fs      = require("fs");

let router = express.Router();


// 非同步 , Async
// fs.readFile 
// callback
router.get("/data",(req,res)=>{

    
    //     let strData = fs.readFile('sample1.json',"utf8",()=>{});
    //     console.log(strData);    // 您會得到神秘的 undefined 
    //     let objData = JSON.parse(strData);
    //     res.json(objData);

    console.log("Start!!!");

    let data = {
        name : "Jeff",
        age  : 18
    };

    
    fs.readFile("sample1.json","utf8",(err,strData)=>{  // callback function
        if(err){
            res.json({ message : "* get error"});
            console.log(err);
        };

        // console.log(strData);

        // Object / JSON / dict 
        // let objData = JSON.parse(strData);
        data = JSON.parse(strData);

        console.log(data);

        console.log("In callback!!!");

        res.json(data);

        // res.json(objData);

        // res.json(strData);


    });

    // res.json(data);

    // console.log("Outside callback!!!");

    // console.log("End !!!");

});


// callback hell
router.get("/multi-data",(req,res)=>{

    let arr2 = [];

    fs.readFile("./models/sample2.json","utf8",(err,strData2)=>{  // callback function
        fs.readFile("./models/sample3.json","utf8",(err,strData3)=>{  // callback function
            fs.readFile("./models/sample4.json","utf8",(err,strData4)=>{  // callback function
                fs.readFile("./models/sample5.json","utf8",(err,strData5)=>{  // callback function
                
                    let data2 = JSON.parse(strData2);
                    let data3 = JSON.parse(strData3);
                    let data4 = JSON.parse(strData4);
                    let data5 = JSON.parse(strData5);
            
                    arr2.push(data2);
                    arr2.push(data3);
                    arr2.push(data4);
                    arr2.push(data5);
            
                    res.json({ "result" : arr2});
            
                });
            });
        });
    });

});


// 使用 readFileSync 做檔案讀取
router.get("/multi-data-2",(req,res)=>{


    let arr = [];
    let data2 = fs.readFileSync("./models/sample2.json","utf8");
    let data3 = fs.readFileSync("./models/sample3.json","utf8");
    let data4 = fs.readFileSync("./models/sample4.json","utf8");
    let data5 = fs.readFileSync("./models/sample5.json","utf8");

    arr.push( JSON.parse(data2) );
    arr.push( JSON.parse(data3) );
    arr.push( JSON.parse(data4) );
    arr.push( JSON.parse(data5) );


    res.json({ "result" : arr });

});



let readFilePromise = (fileName)=>{
    return new Promise((resolve,reject)=>{

        fs.readFile(fileName,"utf8",(err,strData)=>{
            if(err){
                reject(err);
            }else{
                let data = JSON.parse(strData);
                resolve(data);
            }
        });
        
    });
};


// 使用 Promise 做檔案讀取
router.get("/multi-data-3",(req,res)=>{

    let arr3 = [];


    readFilePromise("./models/sample2.json")
            .then(data2=>{
                // res.json({ "result" : data });
                // console.log("Multi data 3 is done!!!");

                arr3.push(data2);

                return readFilePromise("./models/sample3.json");
            })
            .then(data3=>{
                arr3.push(data3);
                return readFilePromise("./models/sample4.json");
            })
            .then(data4=>{
                arr3.push(data4);
                return readFilePromise("./models/sample5.json");
            })
            .then(data5=>{
                arr3.push(data5);
                res.json({ result : arr3 });
            })
            .catch(err=>{
                res.json({ "message" : "* get error"});
                console.log(err);
            });

});


module.exports = router;


