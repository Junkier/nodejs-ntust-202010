//////
// 初步練習
db.getCollection('sample1').insertOne({ "name" : "Leo" , "age" : 22 , "message" : "Hello World!!! "})

db.getCollection('sample1').find({})

////////////////////////////////////
// insert 
db.getCollection('sample1').insertMany([{
    "dramaId" : "1001",
    "category" : "犯罪",
    "name" : "絕命毒師",
    "score" : 10.0
},{...}])

db.getCollection('sample1').insertOne({
    "name" : "Keven",
    "age"  : 20 ,
    "_id"  : 1236
})



// find
// category="政治" & name="紙牌屋"
db.getCollection('sample1').find({ "category" : "政治" ,  "name" : "紙牌屋"  })

// category="政治" & score > 9
db.getCollection('sample1').find({ 
    "score"  : {  "$gt" : 9  }  ,
    "category" : "政治"
})

// score < 8
db.getCollection('sample1').find({ 
    "score"  : {  "$lt" : 8  }  
})

db.getCollection('sample1').find({ 
    // "score"  : { "$gt" :9 }
    "age"   : { $exists : false } ,
    "score" : { "$gt" : 9.5 }
})

db.getCollection('sample1').findOne({ 
    // "score"  : { "$gt" :9 }
    "age"   : { $exists : false } ,
    "score" : { "$gt" : 9.5 }
})

// 欄位選擇
db.getCollection('sample1').find({
    // "name" : "Keven"
   "dramaId" : { "$exists" : true}
}, {
   //"name" : 1 , 
   //"category" : 1 , 
   "score"  : 1 
})


// update 
// 無欄位 --> 新增欄位
// 有欄位 --> 修改欄位值
db.getCollection('sample1').updateOne( { "_id" : 1234} ,  { "$set" : { "abcd" : 123 } })
db.getCollection('sample1').updateOne( { "_id" : 1234} ,  { "$set" : { "abcd123" : "This is a book" } })

db.getCollection('sample1').updateOne( 
    { "_id" : 1234 },  
    { "$set" : { "abcd" : 5678 , "message" : "~~~~" , "scores" : [1,2,3,4,5] }  }    
)

db.getCollection('sample1').updateMany( 
    { "category" : "犯罪" },  
    { "$set" : { "name" : "testQQ" , "message" : 1234 }  }    
)



// delete
db.getCollection('sample1').deleteOne({ "_id" : ObjectId("5fcb050cbe20d36d8d3024dc") })

db.getCollection('sample1').deleteMany({ "category" : "政治" })



//// 小試身手 #3
// 1.
db.getCollection('tutorial-2').insertMany([{...},{...}])

// 2. 
db.getCollection('tutorial-2').find({
    "score"    : { "$gte" : 8 },
    "category" : "政治"  
   } , {
      "name" : 1 ,
      "dramaId" : 1    
   })

// 3.
db.getCollection('tutorial-2').updateMany({ "category" : "犯罪"} , { "$set" : { "remark" : "good!" } } )

// 4. 
db.getCollection('tutorial-2').deleteMany({ "name" : { "$in"  : [ "QQQQ" , "SSS", "ABCD" ] }})