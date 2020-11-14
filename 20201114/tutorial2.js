const express = require("express");
const app = express();

const booksRouter = require("./router/books");
const aboutRouter = require("./router/about");

let portNum = 8088;


app.use("/books",booksRouter);
app.use("/about",aboutRouter);



app.get("/",(req,res)=>{
    res.send("Hello World!");
});


app.listen(portNum,()=>{
    console.log("Server is running at http://localhost:"+portNum);
})