////// 回家試身手1-檢討
// Q1.
for(let i= 0 ; i < 11 ; i++){
  // console.log(i);
  if(i < 6 ){console.log("*".repeat(6-i)) }
  else{ console.log("*".repeat(i-4))};
}
console.log("-".repeat(50));

// Q2.  word count
let data = [ "a", "b", "c", "c", "c", "a", "d", "b", "b", "a", "c","kk","qq","a"];
let result = {}; 

for(let i = 0 ; i< data.length; i++){
  console.log(data[i]);
  if(result[data[i]] !== undefined){  
    // key 存在
    result[data[i]] += 1;
  }else{
    // key 不存在 -> result[i] 會得到 undefined , 在 if-else 如同 false 
    // 0 , undefined , null 皆等同於 false 
    // key-value pair 不存在, 新增一組 pair
    result[data[i]] = 1;
  }
};
console.log(result);

//// 檢查某個 key 是否在 Object 裡
let sample2 = { "name" : "jeff" , "age" : 18};
console.log( "testqq" in sample2);
console.log( "name" in sample2);
console.log( "age" in sample2);
console.log( "age2" in sample2);

console.log( sample2["testqq"] );  // key 不存在 , 得到 undefined
console.log( sample2["name"] );    // 取出 value
console.log( sample2["age"] );     // 取出 value
////

console.log("-".repeat(50));


// Q3. 九九乘法表
// // (1) 純顯示結果
// for(let i =1 ; i<10 ; i++){
//   for(let j =1 ; j<10 ; j++){
//     // console.log(i,j);
//     console.log(`${i} x ${j} = ${i*j}`);
//   };
// };

// (2) 方陣顯示結果
for(let i =1 ; i<10 ; i++){

  // 準備空字串
  let message = "";

  // 字串合併成一行
  for(let j =1 ; j<10 ; j++){
    // 單位數 -> 一個空格 ; 雙位數 -> 兩個空格;
    // 一般寫法: 使用 if-else 決定 space 值
    // let space;
    // if(i*j <10) space = "  ";
    // else space = " ";

    // 三元運算子寫法
    let space = i*j < 10 ? "  " : " ";
    message += (`${i} x ${j} = ${i*j}${space}`);
  };

  // 一次性輸出
  console.log(message);
};
 
//// 三元運算子
// 條件判斷 ? Ture的值 : False的值 
let a = -22
let msg1 = (a > 0) ? "a 是正數！！！" : "a 是負數～～";
console.log(msg1);
//// 

console.log("-".repeat(50));

// Q4. 費氏數列
// 1,1,2,3,5,8,13,21, ...
let finonacci = (n) => {

  // n 為 1 or 2
  if(n === 1 || n === 2) return 1;   // return -> 回傳結果 & 結束 fucntion

  // n >=3 
  let a1 = 1;
  let a2 = 1;
  let r = 0;  // 初始值為 0

  // 計算中...
  // n=3 -> 計算 1 次
  // n=5 -> 計算 3 次
  // n=6 -> 計算 4 次
  for(let i =0 ; i < n-2 ; i++){
    r = a1+a2; 

    // 移動下一個
    a1 = a2 ;
    a2 = r  ;
    
  };

  return r;

  // Dynamic Programming (DP) ->  O(n)
  // 不教ＱＱ
  // let data = [1,1];
  // for(let i =2 ; i <= n-1 ; i++){
  //   data[i] = data[i-1] + data[i-2];
  // };

  // return data[n-1];
};

console.log("-".repeat(50));

/////////////////////////////////////////////////////////////

////// While-loop
// let cnt = 0;
// 只要... 
// while( cnt<20 ){
//   console.log(`第 ${cnt} 次執行`);
//   // cnt++;
// };
console.log("開始 While loop!");

let cnt2 = 0;
let limit = 20;

while(true){
  console.log(`第 ${cnt2} 次執行`);
  cnt2++;

  if(cnt2 === limit){
    break;  // 終止迴圈
  };
};

console.log("結束 While loop!");

////// 大樂透抽 6 號碼
/// 隨機抽數字
console.log( Math.random() )    // 0 <= x < 1 的小數
console.log( Math.random()*49 ) // 0 <= x < 49 的小數
console.log( Math.floor(Math.random()*49 )) // 0 <= x < 49 的 無條件捨去之整數

let nums = [];

while(nums.length<6){
  let n =  Math.floor(Math.random()*49 );
  if(!nums.includes(n)){
    nums.push(n);
  }else{
    console.log(`${n} 重複了！！！`);
  }
};
console.log(nums);

