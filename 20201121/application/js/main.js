console.log("Hello world!!!");
console.log(" Hi HI ~~~");

console.log(3+2+5+8);

let arr = [1,2,3,4,5];

let result = arr.map(n=>n*2)
                .map(n=>n+3)
                .filter(n => n>10);

console.log(result);


let result2 = new Promise((resolve,reject)=>{
    console.log(" Promise go!!!");
    resolve("Done.");
});

result2
    .then(r=>{
        console.log(r);
    })
    .catch(err=>{
        console.log(err);
    });



// alert("testQQ!!!");
// alert("測試測試~~~");

$(document).ready(function(){

    // Ajax 
    $.ajax({
        url     : "/data",
        type    : "GET",
        timeout : 10000
    })
    .then(function(response){

        console.log(response);

    })
    .catch(function(error){

        console.log(error);

    });


});