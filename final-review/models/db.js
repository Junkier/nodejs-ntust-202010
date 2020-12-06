const mongoose = require("mongoose");

const connConfig = "mongodb://localhost:27017/tutorial";

const conn = mongoose.createConnection(connConfig,{
    poolSize : 5,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

conn.on("connected",()=>{
    console.log("MongoDB is connected.");
});

conn.on("error",()=>{
    console.log("Connecting to MongoDB get error.");
});

// module.exports = conn;
module.exports = {
    conn1 , conn2 
};