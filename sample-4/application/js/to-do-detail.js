$(function(){

    $("#save-btn").click(updateToDoItem);


    $("#delete-btn").click(function(){
        var to_do_id  = $("#to-do-id").val();
        var doubleCheck = confirm("您確定刪除 "+ to_do_id +" 待辦細項 ?");

        if(doubleCheck) deleteToDoItem(to_do_id);
    });

});


function getPayload(){
    var subject         = $("#subject").val();
    var reserved_time   = $("#reservation-time").val();
    var brief           = $("#brief").val();

    var level = $("#level").find("i")
                .get()
                .map(function(ele){  return $(ele).css("font-weight" ) })
                .filter(function(w){ return Number(w) === 600; })
                .length;

    var author    = $("#author").val();
    var content   = $("#content").val();
    var to_do_id  = $("#to-do-id").val();

    return {
        to_do_id,
        subject,
        reserved_time,
        brief,
        level,
        author,
        content,
    };
};



function updateToDoItem(){
    var payload = getPayload();

    var toDoId = location.href.split("/").slice(-1)[0] ;

    var mode = toDoId === "create" ? "create" : "edit";

    

    if(mode === "create") payload["attachments"] = [ 
        null, null, null, null, null, null
    ];

    axios.put("/to-do-list/detail/"+payload["to_do_id"] + "?mode="+mode , payload)
         .then(function(response){
             if(response.data.message === "ok."){
                 alert("更新完成！");
                 location.href = "/to-do-list/page";
             };
         })
         .catch(function(err){
            if(err.response && err.response.status === 404){
                alert("找不到該 API !");
                return;
            };
         });
};



function deleteToDoItem(to_do_id){

    axios.delete("/to-do-list/detail/"+to_do_id)
         .then(function(response){
             if(response.data.message === "ok."){
                 alert("刪除完成！");
                 location.href = "/to-do-list/page";
             };
         })
         .catch(function(err){
            if(err.response && err.response.status === 404){
                alert("找不到該 API !");
                return;
            };
         });
};

