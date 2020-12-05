const mongoose = require("mongoose");
const conn     = require("./db");


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

module.exports = dramaModel;