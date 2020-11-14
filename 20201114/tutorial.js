// 1. 有一 ary = [“a”, “b”, “c”, “c”, “c”, “a”, “d”, “b”, “b”, “a”, “c”]
//     試統計各字母出現次數 , 並以 object 型式表達
// let ary = [
//     "a", "b", "c", "c",
//     "c", "a", "d", "b",
//     "b", "a", "c", "e",
//     "f", "g" , "f" , "e",
//     "f", "g" , "f" , "e",
//     "f", "g" , "f" , "e",
//     "f", "g" , "f" , "e",
//     "z", "z"
// ];

// // { "a" :3 , "b":5 , "c":1 ...}
// let result1 = {};

// // Word count
// ary.map((w)=>{
//     if( w in result1){
//         result1[w] +=1 ;
//     }else{
//         result1[w] = 1;
//     };
// });

// console.log(result1);

// console.log("-".repeat(50));

// // 2. 試撰寫一程式 , 顯示九九乘法表
// for(let i = 1 ; i < 10 ; i++){

//     // console.log(i);
//     let message = "";

//     // 1*1 , 1*2 , 1*3 , ... , 1*9
//     for(let j =1 ; j<10 ; j++){
//         // console.log(i,j);
//         // console.log(i + "x" + j + "=" + (i*j));
//         let data = (i*j);
//         // let space;

//         // if(data >=10){
//         //     space = " ";
//         // }else{
//         //     space = "  ";
//         // };

//         // 三元運算子
//         let space = data >=10 ? " " : "  ";

//         // message += ( i + "x" + j + "=" + (i*j) + " ");
//         message += ( i + "x" + j + "=" + (data) + space);
//     };

//     console.log(message);

// };

// let a = 10;
// let b = a%2 === 0 ? 123 : 456;
// console.log(b);

// console.log("-".repeat(50));

// // 3. 費氏數列為 1,1,2,3,5,8,13,21,… 
// //     試設計一 func , 輸入為 n , 回傳第n項費氏數列之值
// // fibonacci
// // f(5) = 5  ; f(8) = 21 ; ...

// let fibonacci = (n) => {
//     let a1 = 1 ;
//     let a2 = 1 ;

//     if(n === 1 || n === 2){
//         return 1;
//     };

//     let result = 0 ;

//     for(let i = 0 ; i < n-2 ; i++){
//         result = a1 + a2 ;  // r = 2  --> 3 --> 5
//         a1 = a2 ;           // a1 = 1 --> 2
//         a2 = result ;       // a2 = 2 --> 3  
//     };


//     return result ;

// };

// console.log(fibonacci(8));

// for(let n = 1; n< 200 ; n++){
//     console.log("第" + n + "項 : " + fibonacci(n));
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let testPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("abc");
        console.log("hihi");
        // resolve(5678);
        reject("QQQQ");
    });
};



// testPromise()
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log(err);
//     });



let flipCoin = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.2){
                resolve("上課！！！");
            }else{
                reject("翹課 -.-");
            }
        },200);
    });
};


// flipCoin()
//     .then(r=>{
//         console.log(r);
//     })
//     .catch(err=>{
//         console.log(err);
//     });


// let promise1 = flipCoin();

// console.log(promise1);

// promise1
//     .then(r=>{ 
//         console.log(r);
//     })
//     .catch(err=>{
//         console.log(err);
//     });


// flipCoin()
//    .then(r=>{
//        console.log(r);
//        return "2. -> 雖然都起床了";
//    })
//    .then(r=>{
//        console.log("第二項 :",r);
//        return "3. -> 昨天太晚睡 ,還是再睡一點吧";
//    })
//    .then(r=>{
//        console.log(r);
//        return "4. -> 沒精神無法上課呢";
//    })
//    .then(r=>{
//        console.log("-".repeat(30));
//        console.log("翹課 QQQ");
//    })
//    .catch(err=>{
//        console.log(err);
//    });


Promise.all([
    flipCoin(),
    flipCoin(),
    flipCoin()
])
.then(r=>{
    console.log(r);
    console.log("Done!!!");
})
.catch(err=>{
    console.log(err);
});
