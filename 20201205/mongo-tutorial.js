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


// update 



// delete
