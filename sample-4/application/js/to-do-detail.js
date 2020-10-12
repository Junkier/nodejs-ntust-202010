function init(){

    //// Sidebar Sliding
    $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });


    //// Init datetime picker icon.
    $.fn.datetimepicker.Constructor.Default = $.extend({},
        $.fn.datetimepicker.Constructor.Default,
        { 
            icons: { 
                time: 'fas fa-clock',
                date: 'fas fa-calendar',
                up: 'fas fa-arrow-up',
                down: 'fas fa-arrow-down',
                previous: 'fas fa-arrow-circle-left',
                next: 'fas fa-arrow-circle-right',
                today: 'far fa-calendar-check-o',
                clear: 'fas fa-trash',
                close: 'far fa-times' 
            },
        }
        
    );

    $("#datetimepicker").datetimepicker({
        format: "YYYY-MM-DD HH:mm",
    });



    //// Customized fancybox
    $.fancybox.defaults.btnTpl.delete = '<button data-fancybox-delete class="fancybox-button fancybox-button--delete" title="title of the icon"><i class="fas fa-trash-alt"></i></button>';

    $.fancybox.defaults.buttons = [
        "zoom",
        "thumbs",
        "delete",
        "close"
    ];


    // Make button clickable using event delegation
    $('body').on('click', '[data-fancybox-delete]', function() {
        console.log($(this));
        // axios({
        //     method : 'POST',
        //     url    : '/to-do-list/images',
        //     data   : formData,
        // })
        // .then(function(res){
        //     var $parent = $this.parents("div.upload-image");
        //     var imgUrl  = res.data.fileName;


        //     $parent.html('<a data-fancybox="gallery" href="/images/'+imgUrl+'">\
        //         <img src="/images/'+imgUrl+'" class="img-thumbnail attach-images">\
        //      </a>\
        //     ');

        //     $parent.removeClass("upload-image");
        //     $parent.addClass("text-center");
            
        // })
        // .catch(function(err){
        //     console.log(err);
        // });
        
    });


    //// Level signal
    var level = 0;
    $("#de-level i").click(function(){

        $("#de-level i").css({"font-weight":400});

        var value = Number($(this).attr("index")) +1;

        if(level === value) return;

        $("#de-level i").slice(0,value).css({"font-weight":600});
        level = value;
    });


    //// Creating time 
    $("#de-created-time").text(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));

    
    //// Attachments upload images
    $(".attachments i.fa-plus").click(uploadImageEvent);


    // Displaying image
    $(".attachments input[type='file']").change(function(e){

        var $this = $(this);

        e.preventDefault();

        var formData = new FormData();

        formData.append("attachment", e.target.files[0]);


        axios({
            method : 'POST',
            url    : '/to-do-list/images',
            data   : formData,
        })
        .then(function(res){
            var $parent = $this.parents("div.upload-image");
            var imgUrl  = res.data.fileName;


            $parent.html('<a data-fancybox="gallery" href="/images/'+imgUrl+'">\
                <img src="/images/'+imgUrl+'" class="img-thumbnail attach-images">\
             </a>\
            ');

            $parent.removeClass("upload-image");
            $parent.addClass("text-center");
            
        })
        .catch(function(err){
            console.log(err);
        });

    });

};


function uploadImageEvent(){
    var $fileInput = $(this).next("input[type='file']")[0];

    $fileInput.click();

};


$(function(){

    init();

});


