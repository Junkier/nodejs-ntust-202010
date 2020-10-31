const express = require("express");
const app = express();


const booksRouter = require("./router/books.js");
const aboutRouter = require("./router/about");


app.get("/abcd",(req,res)=>{
    res.send("Hello world abcd!!!");
});

// app.post("/abcd",(req,res)=>{
//     res.send("Hello world abcd!!!");
// });

// app.put("/abcd",(req,res)=>{
//     res.send("Hello world abcd!!!");
// });

// // HTTP 方法 method
// app.delete("/abcd",(req,res)=>{
//     res.send("Hello world abcd!!!");
// });



app.use("/books",booksRouter);
app.use("/about",aboutRouter);



let portNum = 8088;

app.listen(portNum , ()=>{
    console.log("Server is running at http://localhost:" + portNum);
});