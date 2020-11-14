// 1. 有一 ary = [“a”, “b”, “c”, “c”, “c”, “a”, “d”, “b”, “b”, “a”, “c”]
//     試統計各字母出現次數 , 並以 object 型式表達
let ary = [
    "a", "b", "c", "c",
    "c", "a", "d", "b",
    "b", "a", "c", "e",
    "f", "g" , "f" , "e",
    "f", "g" , "f" , "e",
    "f", "g" , "f" , "e",
    "f", "g" , "f" , "e",
    "z", "z"
];

// { "a" :3 , "b":5 , "c":1 ...}
let result1 = {};

// Word count
ary.map((w)=>{
    if( w in result1){
        result1[w] +=1 ;
    }else{
        result1[w] = 1;
    };
});

console.log(result1);

console.log("-".repeat(50));

// 2. 試撰寫一程式 , 顯示九九乘法表
for(let i = 1 ; i < 10 ; i++){

    // console.log(i);
    let message = "";

    // 1*1 , 1*2 , 1*3 , ... , 1*9
    for(let j =1 ; j<10 ; j++){
        // console.log(i,j);
        // console.log(i + "x" + j + "=" + (i*j));
        let data = (i*j);
        // let space;

        // if(data >=10){
        //     space = " ";
        // }else{
        //     space = "  ";
        // };

        // 三元運算子
        let space = data >=10 ? " " : "  ";

        // message += ( i + "x" + j + "=" + (i*j) + " ");
        message += ( i + "x" + j + "=" + (data) + space);
    };

    console.log(message);

};

let a = 10;
let b = a%2 === 0 ? 123 : 456;
console.log(b);




// 3. 費氏數列為 1,1,2,3,5,8,13,21,… 
//     試設計一 func , 輸入為 n , 回傳第n項費氏數列之值
