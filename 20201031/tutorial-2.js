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