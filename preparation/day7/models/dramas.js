const mongoose = require("mongoose");
const conn = require("./db");


let dramaSchema = new mongoose.Schema({
    "dramaId"  : String,
    "category" : String,
    "name"     : String,
    "score"    : Number 
}, {
  collection : "dramas-table",
  versionKey : false
});

// 在 conn 建立 Model 物件 
// (Node.js 透過 Model 物件 , 和 collection 互動)
let dramaModel = conn.model("Drama" , dramaSchema);

module.exports = dramaModel;

