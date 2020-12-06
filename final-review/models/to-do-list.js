const mongoose = require("mongoose");
const conn     = require("./db");


let toDoListSchema = new mongoose.Schema({
    "to_do_id"      : String,
    "subject"       : String,
    "reserved_time" : String,
    "modified_time" : String,
    "brief"         : String,
    "level"         : Number,
    "author"        : String,
    "content"       : String,
    "attachments"   : Array
}, { collection : "to-do-list" ,versionKey : false });

let toDoListModel = conn.model( "ToDoList" , toDoListSchema);

module.exports = toDoListModel;