function uploadImageEvent(e){

    if(!$(this).hasClass("upload-image")) return;

    var $fileInput = $(this).find("input[type='file']")[0];
    $fileInput.click();
};

function changeImageEvent(e){

    var $this = $(this);
    var $parent = $this.parents("div.upload-image");
    var index    = $parent.attr("index");

    e.preventDefault();

    var formData = new FormData();

    formData.append("attachment", e.target.files[0]);

    axios({
        method : 'POST',
        url    : '/to-do-list/images?to_do_id='+$("input#to_do_id").val() + '&index='+index,
        data   : formData,
    })
    .then(function(res){
        
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

};

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
        
        var ele       = $.fancybox.getInstance().current;
        var $img      = $(ele.$thumb[0]);
        var $parent   = $img.parents("div.text-center");
        var index     = $parent.attr("index");
        var to_do_id  = $("input#to_do_id").val();

        var src     = ele.src;

        
        axios({
            method : 'DELETE',
            url    : '/to-do-list/images',
            data   : {
                to_do_id : to_do_id , 
                src ,
                index , 
            },
        })
        .then(function(_){

            $parent.html('<i class="fas fa-plus"></i><input type="file"  style="display: none;">');

            $parent.removeClass("text-center");
            $parent.addClass("upload-image");

            $(".attachments div.upload-image").off("click");
            $(".attachments div.upload-image").click(uploadImageEvent);

            $(".attachments input[type='file']").off("change");
            $(".attachments input[type='file']").change(changeImageEvent);
           
            
        })
        .catch(function(err){
            console.log(err);
        });
        
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
    $(".attachments div.upload-image").click(uploadImageEvent);

    
    // Displaying image
    $(".attachments input[type='file']").change(changeImageEvent);

};




$(function(){

    init();

});


