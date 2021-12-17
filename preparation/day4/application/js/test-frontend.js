////// 使用 jQuery 語法  (javascript 語法糖)

$(function(){
  // alert("嗨嗨 , 我是 .js 檔");
  let arr = [1,2,3,4,5];
  let data = arr.map(n => n*5);
  console.log(data);

  //// [前端 jQuery 語法]

  // 嵌入文字
  $("#wording").text(arr.map(n => n+2).join("_QQQQ_"));

  // div#wording 後長出新的 html 標籤
  $("#wording").after("<div id='testqq'> 我是新增的 div !!!</div>");

  // 綁定 click 事件 (事件聆聽)
  $("button").click(()=>{
    alert("Button 被按到！！！");

    // 目標: (前後端串接)
    // 當 button click 時 , 向後端 /data 發 requests
    // 取得 Object 資料


    // ajax -> 非同步請求
    $.ajax({
        url  : "/data",
        type : "GET"
      })
      .then(res=>{
        console.log(res);
        let divText = `嗨嗨, 我是 ${res["name"]} , age為 ${res["age"]}`;
        $("#wording").append(`<div>${divText}</div>`);
      })
      .catch(err=>{
        console.log(err);
      });
  });
});