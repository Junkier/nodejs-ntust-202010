////// 非同步處理
const fs = require("fs");

//// 1. 使用 readFileSync 
// let d1 = fs.readFileSync("models/data1.json","utf8");
// console.log(JSON.parse(d1));
// let d2 = fs.readFileSync("models/data2.json","utf8");
// console.log(JSON.parse(d2));
// let d3 = fs.readFileSync("models/data3.json","utf8");
// console.log(JSON.parse(d3));


////////////////////////////////////////////////////////////////
//// 2. 使用 Promise 
// 0) 定義 Promise
let readFilePromise = (dataPath) =>{
  return new Promise( (resolve , reject)=>{
    fs.readFile(dataPath,"utf8",(err,data)=>{
      if(err){
        reject(err);
      }else{
        resolve(JSON.parse(data));
      };
    });
  });
};

// 使用 Promise
readFilePromise("models/data1.json")
  .then(data=>{
    console.log("我是 readFilePromise 的 .then function");
    console.log(data);
  })
  .catch(err=>{
    console.log("我是 readFilePromise 的 .catch function !!!");
    console.log(err);
  });


// 1) 圖解 Promise 
// 2) 特性教教
// 3) flipCoin 範例
// let flipCoin = ()=>{
//   return new Promise( (resolve,reject)=>{
//     // setTimeout: 延遲 一段時間執行 , 以 ms 為單位
//     setTimeout( ()=>{
//       if(Math.random() >0.3) resolve("上課囉！！！！")
//       else reject("翹課哩 -.-");
//     } , 500 );
//   });
// };

// flipCoin()
//   .then(r=>{
//     console.log(r);
//   })
//   .catch(err=>{
//     console.log(err);
//   });

// 4) 特性 ++
// flipCoin()
//    .then(r=>{
//        console.log(r);
//        return "-> 雖然都起床了";
//    })
//    .then(r=>{
//        console.log(r);
//        return "-> 昨天太晚睡 ,還是再睡一點吧";
//    })
//    .then(r=>{
//        console.log(r);
//        return "-> 沒精神無法上課呢";
//    })
//    .then(r=>{
//        console.log(r);
//        console.log("-".repeat(30));
//        console.log("最終還是翹課 :)");
//    })
//    .catch(err=>{
//        console.log(err);
//    });

// 5) Promise.all
//  a. 全部完成 --> 進入 .then 
//  b. 只要有一個失敗 --> 直接跳 .catch
// Promise.all([
//   flipCoin(),
//   flipCoin(),
//   flipCoin()
// ])
//   .then(r=>{
//       console.log(r);
//   })
//   .catch(err=>{
//       console.log(err);
//   });

// 6) 讀 3個檔案
let result = [];
readFilePromise("models/data1.json")
  .then(data1=>{
    result.push(data1);
    return readFilePromise("models/data2.json")
  })
  .then(data2=>{
    result.push(data2);
    return readFilePromise("models/data3.json");
  })
  .then(data3=>{
    result.push(data3);
    console.log(result);
  })
  .catch(err=>{
    console.log("我是 readFilePromise 的 .catch function !!!");
    console.log(err);
  });


////////////////////////////////////////////////////////////////
//// 3. async / await  (ES7)  [八成 Day4]
let flipCoin = ()=>{
  return new Promise( (resolve,reject)=>{
    // setTimeout: 延遲 一段時間執行 , 以 ms 為單位
    setTimeout( ()=>{
      if(Math.random() >0.3) resolve("上課囉！！！！")
      else reject("翹課哩 -.-");
    } , 500 );
  });
};


let main = async ()=>{

  // 1. 使用 await 轉成 '同步' 語法
  // 2. await 後的 function , 需回傳 Promise
  // 3. await 在 async function 內才可使用
  // 4. 使用 try-catch 錯誤處理 (取代 .then / .catch)
  try {
    let data = await readFilePromise("models/data1.json");
    console.log(data)
    console.log("我在 main 裡～");
  } catch(err){
    console.log(err);
  };
};

main();

let main2 = async ()=>{
  try{
    let r = await flipCoin();
    console.log(r);
  }catch(err){
    console.log(err);
  };
  
  // flipCoin()
  //   .then(r=>{

  //   })
  //   .catch(err=>{
  //     ...
  //   })
};

main2();

