////  obj 取值
let obj1 = {
    name : "Jeff",
    age  : 18 , 
    scores : [95,88,100],
    // test : "abcd"
};

let test = "age";

// console.log(obj1["name"]);
// console.log(obj1["scores"][1]);

// // console.log(obj1[name]);
// console.log(obj1[test]);
// console.log(obj1["name"]);

// // console.log(obj1[scores][1]);

// console.log(obj1.name);
// console.log(obj1.test);
// console.log(obj1[test]);
// console.log(obj1.scores[1]);


////////////////////////////////////////////////////////////////
////  .map  /  .filter
let sample1 = [1,2,3,4,5];

let map1 = sample1.map(n => n*2);
let map2 = sample1.map(n => n*3 +1);

let filter1 = sample1.filter(n => n>3);
let filter2 = sample1.filter(n => n**3 >=10 );

let result1 = sample1.map(n=> n**3 >=10);


console.log("map1 :",map1);
console.log("map2 :",map2);
console.log("filter1 :",filter1);
console.log("filter2 :",filter2);

console.log("result1 :",result1);

console.log("-".repeat(50));


// 數字放大3倍 , -1 , 再取偶數值
let step1   = sample1.map(n=> n*3);
let step2   = step1.map(n=>n-1);
let result2 = step2.filter(n=> n%2 === 0);

console.log("step1 :",step1);
console.log("step2 :",step2);
console.log("result2 :",result2);

let result3 = sample1.map(n=>n*3)
                     .map(n=>n-1)
                     .filter(n=>n%2===0);

console.log("result3 :",result3);

////////////////////////////////////////////////////////////////
//// object in array
let sample2 = [
    { memNo : 1001 , name : "Jeff"    , money: 1000 },
    { memNo : 1002 , name : "Leo"     , money: 955 },
    { memNo : 1003 , name : "Keven"   , money: 800 },
    { memNo : 1004 , name : "Jessica" , money: 2000 },
    { memNo : 1005 , name : "Jenny"   , money: 1750 },
];
let result4 = sample2.map(element => element["name"]);
console.log("result4 :",result4);

// money >=1000 的 memNo 組成的 array 
let result5 = sample2.filter(ele=> ele["money"] >=1000)
                     .map(ele=>ele["memNo"]);


console.log("result5 :",result5);


console.log("Jeff" + "-" + 18);



console.log("-".repeat(50));
////////////////////////////////////////////////////////////////
//// 小試身手#1
// 1. 取得 age >= 30 的人名 array 
//    --> [ "Keven" , "Elle"]

// 2. 取得 scores 總和 >= 250 的資料
//    並將人名 & 年紀合併成一字串 , 成為 array 元素後回傳
//    --> ["Jeff-18","Leo-22","Elle-31"]


let arrMapSample = [
    { name : "Jeff"  , age : 18 , scores : [95,88,100] },
    { name : "Leo"   , age : 22 , scores : [90,97,98] },
    { name : "Run"   , age : 25 , scores : [75,68,90] },
    { name : "Keven" , age : 33 , scores : [77,65,32] },
    { name : "Jenny" , age : 20 , scores : [63,82,91] },
    { name : "Elle"  , age : 31 , scores : [100,73,83] },
];

let example1 = arrMapSample.filter(ele=> ele["age"] >=30)
                           .map(ele=> ele["name"]);

console.log("example1 :",example1);

let example2 = arrMapSample.filter(ele => ( ele["scores"][0] + ele["scores"][1] + ele["scores"][2] ) >=250 )
                           .map(ele => ( ele["name"] + "-" + ele["age"] )  );

console.log("example2 :",example2);

console.log("-".repeat(50));
////////////////////////////////////////////////////////////////

//// function#1
// 早期 function 
let add1 = function(a,b){
    return a+b;
};

// arrow function 
let add2 = (a,b) => {
    return a+b;
};

let add3 = (a,b) => a+b;


console.log("add1 :" , add1(3,5));
console.log("add2 :" , add2(3,5));
console.log("add3 :" , add3(3,5));


let sayHello = (name) => {
    console.log(" sayHello function 開始");
    console.log("Hello ~~~");
    console.log("你是" + name+ "!!!");
    
    let today = "禮拜六";
    console.log("今天是" + today);

    let a = 123;
    let b = 456;
    console.log("a + b :", (a+b) );

    // return "testQQ";
};


// let result6 = sayHello("Jeff");
sayHello("Jeff");


// console.log(result6);


// let arrMapSample = [
//     { name : "Jeff"  , age : 18 , scores : [95,88,100] },
//     { name : "Leo"   , age : 22 , scores : [90,97,98] },
//     { name : "Run"   , age : 25 , scores : [75,68,90] },
//     { name : "Keven" , age : 33 , scores : [77,65,32] },
//     { name : "Jenny" , age : 20 , scores : [63,82,91] },
//     { name : "Elle"  , age : 31 , scores : [100,73,83] },
// ];

// let result7 = arrMapSample.map(ele => ele["name"]);

let result7 = arrMapSample.map(ele => {
    let name = ele["name"];
    console.log("Hello " + name + "!!!");
    // let num  = 123 ;
    return name
});

console.log("result7 :",result7);

console.log("-".repeat(50));
////////////////////////////////////////////////////////////////

let test1 = ()=>{
    let value1 = 12;
    return value1;
};

let test2 = ()=>{
    var value2 = 15;
    return value2;
};

let test3 = ()=>{
    value3 = 18;
    return value3;
};
 


console.log("test1 :", test1() );
console.log("test2 :", test2() );
// console.log("test3 :", test3   );
console.log("test3 :", test3() );


console.log("value3 :",value3);


// console.log("value1 :",value1);
// console.log("value2 :",value2);
console.log("-".repeat(50));

////////////////////////////////////////////////////////////////

let test4 = () => {
    let num = 20;
    let a;
    // var a;
    // var a   = 123;
    // const a = 123  // constant , 常數
    // const a;

    if(num >= 0){
        console.log("num is positive !!!");
        a = 456;
        // var   a = 456;    // function scope
        // let   a = 456;    // Block    scope
        // const a = 456;    // Block    scope
        // a = 456;
        
    }
    else{
        console.log("num is negative !!!");
        // var a = -456;
        // let a = -456;
        // const a = 456;
        a = -456;
    };

    console.log("a :",a);

    
};


test4();