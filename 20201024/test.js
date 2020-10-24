// console.log("Hello world!");

// var a = 12;

// // constant --> 常數
// const b = true;

// let c = "abcd";

// console.log(a);
// console.log(b);
// console.log(c);


////////////////////////////////////////////////
// Arrow function 
// var multiple = function(a,b){
//     return a*b;
// };
var multiple = (a,b)   => a*b;
var add      = (a,b,c) => a+b+c;


var result  = multiple(3,17);
var result2 = add(3,5,10);

console.log(result);
console.log(result2);


////////////////////////////////////////////////
// 原生 function
// var sayHello = function(name){  
//     return  ( "Hello "+ name + "!" )  
// };

// Arrow function
var sayHello = (name) => {
    console.log("HiHi!!");
    console.log("This is sayHello function.");
    return ( "Hello "+ name + "!" );
};

console.log( sayHello("Leo") );
