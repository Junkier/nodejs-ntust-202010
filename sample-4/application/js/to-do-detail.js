function init(){

    $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });

    // Init datetime picker icon.
    $.fn.datetimepicker.Constructor.Default = $.extend({},
        $.fn.datetimepicker.Constructor.Default,
        { icons:
                { time: 'fas fa-clock',
                    date: 'fas fa-calendar',
                    up: 'fas fa-arrow-up',
                    down: 'fas fa-arrow-down',
                    previous: 'fas fa-arrow-circle-left',
                    next: 'fas fa-arrow-circle-right',
                    today: 'far fa-calendar-check-o',
                    clear: 'fas fa-trash',
                    close: 'far fa-times' } });

    $("#datetimepicker").datetimepicker({
        format: "YYYY-MM-DD HH:mm",
    });


    // Level signal
    var level = 0;
    $("#de-level i").click(function(){

        $("#de-level i").css({"font-weight":400});

        var value = Number($(this).attr("index")) +1;

        if(level === value) return;

        $("#de-level i").slice(0,value).css({"font-weight":600});
        level = value;
    });


    // Creating time 
    $("#de-created-time").text(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));

    
    $(".attachments i.fa-plus").click(uploadImageEvent);


    $(".attachments input[type='file']").change(function(e){

        e.preventDefault();

        var formData = new FormData();
        // console.log(e.target.files);
        formData.append("attachment", e.target.files[0]);

        // var fd = new FormData();
        // var files = $('#file')[0].files[0];
        // fd.append('file',files);

       axios({
            method: 'POST',
            url: '/to-do-list/testqq',
            data: formData,
            // contentType: false,
            // processData: false,
            // success: function(response){
            //     if(response != 0){
            //         $("#img").attr("src",response); 
            //         $(".preview img").show(); // Display image element
            //     }else{
            //         alert('file not uploaded');
            //     }
            // },
        })
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        });


        // axios({
           
        //     data: formData,
        //     headers: {
        //     Authorization: "Client-ID " + {{apiKey}} //放置你剛剛申請的Client-ID
        //     },
        //     mimeType: 'multipart/form-data'
        //     }).then(res => {
        //       console.log(res)
        //     }).catch(e => {
        //       console.log(e)
        //  })


        
        // var formData = new FormData(this);

        // $.ajax({
        //     type:'POST',
        //     url: $(this).attr('action'),
        //     data:formData,
        //     cache:false,
        //     contentType: false,
        //     processData: false,
        //     success:function(data){
        //         console.log("success");
        //         console.log(data);
        //     },
        //     error: function(data){
        //         console.log("error");
        //         console.log(data);
        //     }
        // });



    });

};

function uploadImageEvent(){
    var $fileInput = $(this).next("input[type='file']")[0];

    $fileInput.click();
    // console.log(fileInput);

};

$(function(){

    init();

});


