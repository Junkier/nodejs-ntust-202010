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
let arr  = [1,2,3,4,5];
let arr2 = ["test",2.345, true , time];

console.log(arr);
console.log(arr2);

// Object
let obj1 = {
    name  : "Jeff",
    age   : 18,
    "key" : [1,2,3]
};

let obj2 = {
    name : 'jeff',
    age  : 18,
    others : {
        message1 : "test",
        message2 : "hello ~~~"
    },
    items : [3,5,7, { test: "this is obj"} ]
};

console.log(obj1);
console.log(obj2);