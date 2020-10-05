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

};

$(function(){

    init();

});


