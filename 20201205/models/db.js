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
