// Number 
// let a = 12;
// let b = 20.6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// String 
// let str  = "This is a book.";
// let str2 = 'Second string ~~~';
// let name = "Jeff";
// console.log(str);
// console.log(str2);
// console.log("Hello " + name + '  !!!!');

// Boolean
// let bool_1 = true;
// let bool_2 = false;
// console.log(bool_1);
// console.log(bool_2);
// console.log( bool_1 && bool_2 );
// console.log( bool_1 || bool_2 );


// Date
let time = new Date();
// console.log(time);
// console.log(time.getFullYear);
// console.log( time.getFullYear() );
// console.log( time.toLocaleDateString() );
// console.log( time.getMinutes() );


// Array 
// let arr  = [1,2,3,4,5];
let arr2 = ["test",2.345, true , time];

// console.log(arr);
// console.log(arr2);

// Object
// let obj1 = {
//    name  : "Jeff",
 //   age   : 18,
//    "key" : [1,2,3]
// };

let obj2 = {
    name : 'jeff',
    age  : 18,
    others : {
        message1 : "test",
        message2 : "hello ~~~"
    },
    items : [3,5,7, { test: "this is obj"} ]
};

// console.log(obj1);
// console.log(obj2);


/////////////////////////////
// null
// let c = null;
// console.log(c);

// undefined
//// let d ;
// console.log(d);

// typeof 
// let a = 12;
// let b = 20.6;
// let str2 = 'Second string ~~~';
// let name = "Jeff";

// let arr  = [1,2,3,4,5];
// let obj1 = {
//     name  : "Jeff",
//     age   : 18,
//     "key" : [1,2,3]
// };
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof str2);
// console.log(typeof name);

// console.log(typeof arr);
// console.log(typeof obj1);


////////////////////////////////////////////////
// let arr3 = [2,3,5,"test",false, {name : "QQ"} ];

// let x = arr3[3];
// let y = arr3[5];
// let z = arr3[100];

// console.log(x);
// console.log(y);
// console.log(z);

// arr3[2] = 1200;
// arr3[4] = true;
// arr3[10] = "Hello";

// console.log(arr3);
// console.log(arr3.length);

////////////////////////////////////////////////
let obj3 = {
    name   : "jeff",
    age    : 18,
    scores : [95,100,85]
};

let w = obj3["name"];
let q = obj3["age"];
// let m = obj3["testQQQQ"];

console.log("Name :" , w);
console.log("Age  :" , q);

// console.log(m);

obj3["messages"] = "Hello ~~~";
obj3["now"]      = new Date();

obj3["name"]     = "Keven!!!";



console.log(obj3);

// [95,100,85]
// console.log(obj3["scores"])
console.log(obj3["scores"][1]);

let keys = Object.keys(obj3);
let values = Object.values(obj3);

console.log(keys);
console.log(values);