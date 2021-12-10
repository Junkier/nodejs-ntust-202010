const express = require("express");
const app = express();
const portNum = 8000;

// [module 相關][2] 引入 router/books 裡的 router 物件
const booksRouter = require("./router/books.js");  
const aboutRouter = require("./router/about");  // '.js' 可忽略不寫

// 設定路徑 / 路由規劃 / API 設計
app.get("/",(req,res) => {
  res.send("嗨嗨, 我是 Server~");
});

// [module 相關][3] 將 '/books/*' 相關的 requests, 全部送入 booksRouter 處理
app.use("/books" , booksRouter);
app.use("/about" ,  aboutRouter);

app.listen(portNum,()=>{
  console.log(`Server is running at localhost:${portNum}`);
})