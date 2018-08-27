$(".nav li a").each(function (i) {
    var $me = $(this);

    var lochref = $.trim(window.location.href);
    var mehref = $.trim($me.get(0).href);



    if (lochref.indexOf(mehref) != -1) {
        $me.parent().addClass("active");
    } else {
        $me.parent().removeClass("active");
    }

});