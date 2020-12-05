db.getCollection('sample1').insertOne({ "name" : "Leo" , "age" : 22 , "message" : "Hello World!!! "})

db.getCollection('sample1').find({})

////////////////////////////////////

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