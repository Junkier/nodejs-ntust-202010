const mongoose = require("mongoose");


// const connConfig = "mongodb://localhost:27017/tutorial" ;
const connConfig = "mongodb://localhost:27017/Tutorial" ;



const conn = mongoose.createConnection(connConfig,{ 
  poolSize: 5 , 
  useNewUrlParser: true ,
  useUnifiedTopology: true,
});

// Testing conn.
conn.on('connected', function(){
  console.log("MongoDB is connected.");
});


conn.on('error', function(err){
  console.error("MongoDB conn gets error.");
});

// // 建立 schema
// let dramaSchema = new mongoose.Schema({
//     // "dramaId" : String,
//     // "category" : String,
//     // "name" : String,
//     // "score" : Number,
//   }, { collection: "tutorial-2"}
// );
  
//   // 建立 model
// let dramaModel = conn.model("Dramas",dramaSchema);


// dramaModel.find({})
//           .then(r=>{
//             console.log(r);
//           })
//           .catch(err=>{
//               console.log(err);
//           });
  