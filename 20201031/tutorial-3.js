const express = require("express");
const app = express();


const booksRouter = require("./router/books.js");

// const booksRouter = router;
// module.exports   = ;


app.get("/abcd",(req,res)=>{
    res.send("Hello world abcd!!!");
});


app.use("/books",booksRouter);



let portNum = 8088;

app.listen(portNum , ()=>{
    console.log("Server is running at http://localhost:" + portNum);
});