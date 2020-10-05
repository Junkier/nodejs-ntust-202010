$(function(){
    $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });


    var data = [
        {
            toDoId  : "10001",
            title   : "晨會",
            time    : "2020-10-24 09:00",
            subject : "午餐負責人",
            level   : 3 ,
            author  : "傑夫"
        },
        {
            toDoId  : "10002",
            title   : "下午茶",
            time    : "2020-10-24 12:30",
            subject : "50嵐 VS 可不可熟成",
            level   : 8 ,
            author  : "Leo"
        },
        {
            toDoId  : "10003",
            title   : "客戶拜訪",
            time    : "2020-10-24 16:20",
            subject : "陽明山上的阿婷來訪",
            level   : 7 ,
            author  : "小魚"
        },
        {
            toDoId  : "10004",
            title   : "晨會",
            time    : "2020-10-25 09:00",
            subject : "午餐自行處理",
            level   : 1 ,
            author  : "傑夫"
        },
        {
            toDoId  : "10005",
            title   : "下午茶",
            time    : "2020-10-25 13:00",
            subject : "京盛宇限定",
            level   : 5 ,
            author  : "Leo"
        },
    ];

    var dataTemplate = data.map(function(d,i){
        return `<tr>
                    <th scope="row">${i+1}</th>
                    <td>${d.title}</td>
                    <td>${d.time}</td>
                    <td><a href="/to-do-list/detail/${d.toDoId}">${d.subject}</a></td>
                    <td>
                        ${(new Array(d.level)).fill(0).map(function(_){ return `<i class="far fa-bell bell-icon"></i>`}).join("\n")}
                    </td>
                    <td>${d.author}</td>
                </tr>`;
    }).join("");

    $("#to-do-list-table tbody").html(dataTemplate);
});


