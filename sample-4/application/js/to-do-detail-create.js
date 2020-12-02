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




    $("#save-btn").click(function(){

        var subject         = $("#subject").val();
        var reservationTime = $("#reservation-time").val();
        var brief           = $("#brief").val();

        var scores = $("#de-level").find("i")
                    .get()
                    .map(function(ele){ return $(ele).css("font-weight" ) })
                    .filter(function(w){ return Number(w) === 600; })
                    .length;

        var author  = $("#author").val();

        var content = $("#content").val();

        console.log({
            subject,
            reservationTime,
            brief,
            scores,
            author,
            content
        });

    });

    

    
});


