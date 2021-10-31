$(".skill_icon").click(function() {
    $(".skill_int").each(function() {
        if ($(this).is(":visible")) {
            $(this).slideUp(200);
            $(this).prev().removeClass("skill_flag_scale");
        }
    });
    if ($(this).siblings(".skill_int").is(":hidden")) {
        $(this)
            .siblings(".skill_int")
            .slideDown(400)
            .siblings(".skill_flag")
            .addClass("skill_flag_scale");
    } else {
        $(this)
            .siblings(".skill_int")
            .slideUp(200)
            .siblings(".skill_flag")
            .removeClass("skill_flag_scale");
    }
});
