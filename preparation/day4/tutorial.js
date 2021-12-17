////// moment 處理時間資料 套件
const moment = require("moment"); 

console.log(moment());
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
console.log(moment().format("YYYY/MM/DD HH:mm"));

let nextClass = moment().add(7,"days").format("YYYY-MM-DD HH:mm:ss");
let lastMonth = moment().subtract(1,"months").format("YYYY/MM/DD");
console.log(nextClass);
console.log(lastMonth);

////
// 把 2021-10-01  減個 10天 , 再顯示 年/月/日 (YYYY/MM/DD)
let day = moment("2021-10-01").subtract(10,"days").format("YYYY/MM/DD");
console.log(day);