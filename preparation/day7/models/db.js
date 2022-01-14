const mongoose = require("mongoose");

// log 紀錄開啟
mongoose.set("debug",true);

//// 1. 建立連線 (物件)
// 連線設定格式 -> mongodb://{host}:{port}/{db_name}
const connConfig = "mongodb://localhost:27017/nodejs-tutorial"
const conn = mongoose.createConnection(connConfig);

conn.on("connected" , ()=>{
  console.log("MongoDB is connected");
});

conn.on("error",()=>{
  console.log("MongoDB conn gets error");
});

module.exports = conn;
