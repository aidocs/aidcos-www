$(function () {
    // NEW selector
    jQuery.expr[':'].Contains = function (a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };
    // OVERWRITES old selecor
    jQuery.expr[':'].contains = function (a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };
    //Update to work for jQuery 1.8
    $.expr[":"].contains = $.expr.createPseudo(function (arg) {
        return function (elem) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    var sBtn = $(".search-com button");
    var sInput = $(".search-com input");
    var lis = $(".container ul li");

    var onSearch = function () {
        reset();
        var keyword = sInput.val();
        if (!keyword) {
            return;
        }
        $.each(lis, function (i, index) {
            var els = $(this).find(":contains('" + keyword + "')");
            if (els.length === 0) {
                $(this).css("display", "none");
            }
        });
    }
    var reset = function () {
        $.each(lis, function () {
            $(this).css("display", "");
        });
    }
    sInput.on("keypress", function() {
        if ( event.keyCode == "13") {  
            onSearch();
        }
    });
    sBtn.on("click", function () {
        onSearch();
    });
});