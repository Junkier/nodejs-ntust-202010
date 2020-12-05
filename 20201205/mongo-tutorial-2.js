const mongoose = require("mongoose");


// mongodb://{host}:{port}/{db_name}
const connConfig = "mongodb://localhost:27017/Tutorial";


const conn = mongoose.createConnection(connConfig , {
    poolSize: 5 , 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});


conn.on("connected",()=>{
    console.log("MongoDB is connected.");
});


conn.on("error",()=>{
    console.error("MongoDB conn gets error.");
});


// 建立 schema
let dramaSchema = new mongoose.Schema({
    "dramaId"  : String,
    "category" : String,
    "name"     : String,
    "score"    : Number,
},{ collection : "tutorial-2" });


let dramaModel = conn.model("Drama",dramaSchema);


  
// 建立 model
dramaModel.find({ "category" : "政治"})
          .then(result=>{
              console.log(result);
          })
          .catch(err=>{
              console.log(err);
          });




// let dramaSchema = new mongoose.Schema({
//     // "dramaId" : String,
//     // "category" : String,
//     // "name" : String,
//     // "score" : Number,
//   }, { collection: "tutorial-2"}
// );

// let dramaModel = conn.model("Dramas",dramaSchema);
