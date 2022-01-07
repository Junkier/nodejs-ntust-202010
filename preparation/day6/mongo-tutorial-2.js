const mongoose = require("mongoose");

//// 建立連線 物件
// mongodb://{host}:{port}/{db_name}
const connConfig = "mongodb://localhost:27017/Tutorial";


const conn = mongoose.createConnection(connConfig , {
    poolSize: 5 ,               // 連線池內的連線數
    useNewUrlParser:    true,   // 使用新的 parser 解析 connConfig
    useUnifiedTopology: true,   // 使用新的 節點發現 方法
});


conn.on("connected",()=>{
    console.log("MongoDB is connected.");
});


conn.on("error",()=>{
    console.error("MongoDB conn gets error.");
});


// 建立 schema
let dramaSchema = new mongoose.Schema({
    // "dramaId"  : String,
    "dramaId"  : Number,
    "category" : String,
    "name"     : String,
    "score"    : Number,
},{ collection : "tutorial-2" });

// 建立 model 物件 (和 collection 互動)
let dramaModel = conn.model("Drama",dramaSchema);

  
// 執行 mongoDB find 操作
// dramaModel.find({ "category" : "政治"})
//           .then(result=>{
//               console.log(result);
//           })
//           .catch(err=>{
//               console.log(err);
//           });


let sample1Schema = new mongoose.Schema({
    "name" : String , 
    "age"  : Number , 
    "message" : String
}, { collection : "sample1" , versionKey : false});


let sample1Model = conn.model("sample1",sample1Schema);


// 查詢
sample1Model.find({ "name" : "Leo"})
            .then(result=>{
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            });



// 新增
sample1Model.create({
        "name"   : "Keven",
        "others" : 1234567,
        "scores" : [100,95,80]
        // "name" : "Jenny",
        // "age"  : 25,
        // "message" : "HiHi~~~~~"
    })
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });


