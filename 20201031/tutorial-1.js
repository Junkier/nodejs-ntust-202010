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

