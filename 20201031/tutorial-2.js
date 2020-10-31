////////////////////////////////////////////////////////////////
//// for-loop
let arr1 = [1,2,3,4,5,6,7];
let arr2 = ["a","b","c","d","e"];

// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);
// console.log(arr1[5]);
// console.log(arr1[6]);

for(let i=0 ; i < arr1.length ; i++){
    console.log(arr1[i]);
    // console.log(i);
};

console.log("-".repeat(50));

for(let j=0 ; j < arr2.length ; j++){
    console.log(arr2[j]);
    console.log("hello ~~~");
};

console.log("-".repeat(50));

for(let k = arr2.length-1 ; k >=0 ; k--){
    console.log(k,arr2[k]);
};

console.log("-".repeat(50));


for(let j=0 ; j < arr2.length ; j++){
    console.log(arr2[j]);
    console.log("第" + j + "次執行 (迭代)");
    // console.log("hello ~~~");
};

console.log("-".repeat(50));

////////////////////////////////////////////////////////////////
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let arr4 = ["AA","BB","CC","DD","EE"];
let sum  = 0;

for(let i=0 ; i <arr3.length ; i++){
    let num = arr3[i];
    sum = sum + num;
};

console.log("Sum :",sum);

for(let ele of arr4){
    console.log(ele);
};

console.log("-".repeat(50));

////////////////////////////////////////////////////////////////
//// 小試身手

// 計算 1+2+3+…+100 之總和
let sum2 = 0;
let limit = 11;

for(let i =1 ; i<limit ; i++){
    // sum2 = sum2 + i;
    sum2 += i ;
};
console.log("Sum2 :",sum2);


// 試撰寫一程式 , 列印出以下圖形  (repeat)
for(let i = 6 ; i>0 ; i--){
    console.log("*".repeat(i));
};

// 有一變數 name="Jack!" , 試撰寫一程式 , 列印出下列訊息
let name2 = "Jack!";

for(let i = 0 ; i < name2.length ; i++){
    // console.log(i,name2[i]);
    console.log(name2[i].repeat(5-i));
};