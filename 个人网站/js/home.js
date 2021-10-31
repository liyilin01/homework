
$('#home').animate({ paddingTop: 0 }, 1000, function() {
    $('#home-title').animate({ opacity: 1 }, 500, function() {
        $('#home_info_box').animate({ width: 500 }, 500, function() {
            $('#home_info_box .home_name').animate({ opacity: 1 }, 500, function() {
                $('#home_info_box .home_age').animate({ opacity: 1 }, 500, function() {
                    $('#home_info_box .home_profession').animate({ opacity: 1 }, 500, function() {
                        $('#home_info_box .home_site').animate({ opacity: 1 }, 500)
                    })
                })
            })
        })
    })
});
