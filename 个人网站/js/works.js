//border动画
$('#works_box li').each(function(i, item) {

        $(item)
            .mouseenter(function() {
                var $this = $(this).index('#works_box li');
                $('.left')
                    .eq($this)
                    .stop(true)
                    .animate({ height: 242 }, 300, 'linear', function() {
                        $('.bottom').eq($this).stop(true).animate({ width: 262 }, 260, 'linear')
                    })
                $('.right')
                    .eq($this)
                    .stop(true)
                    .animate({ height: 242 }, 300, 'linear', function() {
                        $('.top').eq($this).stop(true).animate({ width: 262 }, 260, 'linear')
                    })

            })
	        .mouseleave(function() {
	            var $this = $(this).index('#works_box li');
	            $('.left')
	                .eq($this)
	                .stop(true)
	                .animate({ height: 0 }, 200, 'linear', function() {
	                    $('.bottom').eq($this).stop(true).animate({ width: 0 }, 200, 'linear')
	                })
	            $('.right')
	                .eq($this)
	                .stop(true)
	                .animate({ height: 0 }, 200, 'linear', function() {
	                    $('.top').eq($this).stop(true).animate({ width: 0 }, 200, 'linear')
	                })
	        });
    })
    // works轮播（@media screen and (min-width: 1200px) and (max-width: 1600px)）
var $lis = $('.works_list li').length;
var num = 0;
//按钮prev
$('#works_prev').click(function() {
        num++;
        $('.works_list').prepend($('.works_list li').last()).css('left', -264).stop().animate({left:0})
})
    //按钮next
$('#works_next').click(function() {
        next();
})
    // console.log(window.screen.width)获取屏幕分辨率
    //定时器
var timer
if (window.screen.width >= 1200 && window.screen.width <= 1600) {
    timer = setInterval(next, 3000);
    $('.works_list li')
        .mouseenter(function() {
            clearInterval(timer)
        })
        .mouseleave(function() {
            timer = setInterval(next, 3000);
        })
        //移入定时器取消
    $('#works_next')
        .mouseenter(function() {
            clearInterval(timer)
        })
        //移出定时器取消
        .mouseleave(function() {
            timer = setInterval(next, 3000);
        })
    $('#works_prev')
        .mouseenter(function() {
            clearInterval(timer)
        })
        .mouseleave(function() {
            timer = setInterval(next, 3000);
        })
}

// 
function next() {
    num--;
    $('.works_list').stop().animate({ left: -264 }, function() {
        $('.works_list').append($('.works_list li').first());
        $('.works_list').css('left', '0px');
    });

}

