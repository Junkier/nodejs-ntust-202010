$(function(){

    $("#drama-select-btn").click(function(){

        // [Coding]
        // createTable();
        // alert("QQQQ");
        ////////

        //// 使用 ajax 發 request 
        //// 並用 query_string 攜帶參數
        let type = $("#categories-select").val();

        $.ajax({
            // [Work 1]
            // url  : "/dramas/list",  // 1. 忘記帶 type 
            // url  : "/dramas/list",  // 2. type 值錯誤 
            url  : "/dramas/list?type=" + type,   // 3. type 值 ok
            type : "GET",    // requests 的方法 (種類)

            // [Work 3]
            headers : {
                token : "APTX4869"
            }
         })
         .then(res=>{ 
            console.log(res);
            createTable(res["result"]);  // 丟入 Array 資料
         })
         .catch(err =>{
            console.log(err);
            alert(err.responseJSON.message);
         });
    });

    $("#drama-insert-btn").click(function(){
        insertNewRecord();
    });

});

let createTable = (data)=>{
    data = data || [
        { category : "犯罪" , name : "絕命毒師" , score : 10 },
        { category : "殭屍" , name : "屍戰朝鮮" , score : 9 },
        { category : "愛情" , name : "想見你"   , score : 8.5 },
    ];
 

    let tableBody = data.map((ele,i)=>`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${ele.category}</td>
            <td>${ele.name}</td>
            <td>${ele.score} / 10</td>
        </tr>
    `).join("");
    

    $("#drama-select-table tbody").html(tableBody);
};



let insertNewRecord = ()=> {
    let category  = $("#categories-insert option:selected").val(); 
    let name      = $("#name-insert").val();
    let score     = $("#score-insert").val();


    if(!name || name.length === 0){
        alert("請輸入劇名！");
        return;
    };

    if(!score || score.legnth === 0){
        alert("請輸入評價！");
        return;
    };


    $.ajax({
        url  : "/dramas/data",
        type : "POST",

        //////
        // [Code1] 教 token 時用到 , 加入 headers
        headers : {
            // token : "APTX4869xxx"   // 1. 沒帶 token
            // token : "APTX4869xxx"   // 2. token 帶錯
            token : "APTX4869"
        },
        //////

        //// 以 application/x-www-form-urlencoded 資料傳送
        data : {
            category,
            name,
            score
        },
        ////
        
        //// 以 application/json 資料傳送
        // data : JSON.stringify({
        //     category,
        //     name,
        //     score
        // }),
        // contentType: "application/json",
        ////
    })
    .then(r=>{
        if(r.message === "ok."){
            alert("更新完成！");
            // location.reload();  頁面 重新整理
        };
        
    })
    .catch(err=>{
         // [Code2] 
        console.log(err);
        alert(err.responseJSON.message);

        if(err.status === 404){
            alert("找不到該 API !");
            return;
        };
        
        // alert("系統有誤 , 請稍後再試！");
    });
};
