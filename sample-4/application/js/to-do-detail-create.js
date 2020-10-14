$(function(){

    // 取得最新的 to-do-id
    axios.get("/to-do-list/the-newest-id")
         .then(function(response){
            var newToDoId = response.data.result;

            $("#title-to-do-id").html(newToDoId+" 細項");
            $("#to-do-id").val(newToDoId);
         })
         .catch(function(err){
             console.log(err);
         });

});


