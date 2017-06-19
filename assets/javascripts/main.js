$(document).ready(function() {
    $("#menuToggle").on('click', function(){
        $("body").toggleClass("navigation--is-open");
    });

    $(".designs a").on("click", function(e){
        e.preventDefault();

        $(".design-explanation").slideUp(200);
        $(".designs a").removeClass("design--active");
        var target = $(this).attr("href");

        if( !$(this).hasClass("design--active") && !$(target).is(":visible") ) {
            $(this).addClass("design--active");
            $( target ).slideDown(200);
        }
    });
});
