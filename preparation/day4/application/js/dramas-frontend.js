$(function(){
  
    $("#drama-select-btn").click(function(){

        // [Coding]
        var type = $("#categories-select").val();
        console.log(type);

         $.ajax({
            url  : "/dramas/getDramaListData?type="+type,
            type : "GET",
            timeout: 10000 // 10 sec
        })
        .then(function(response){
            console.log(response);
            createTable(response["result"]);
        })
        .catch(function(error){
            console.log(error);
        });

            
        createTable();
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
        url  : "/dramas/createNewDramaData",
        type : "POST",

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
            // location.reload();
        };
        
    })
    .catch(err=>{
        console.log(err);

        if(err.status === 404){
            alert("找不到該 API !");
            return;
        };
        
        alert("系統有誤 , 請稍後再試！");
    });
};
