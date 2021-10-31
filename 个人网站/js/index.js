//设备检测  
//设备检测  
function detectmob() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}


var clock = false;
var key = $('#aside li a').length; //获取侧边栏总数
function onMouseScroll(e) {
    if (clock) return;
    clock = true;
    var isUp = true;
    if (e.wheelDelta && e.wheelDelta < 0 || e.detail > 0) {
        isUp = false;
    }

    // alert(isUp)

    if (isUp) {
        iNow--;
        if (iNow == -1) {
            iNow = 0;
            clock = false;
        }
    } else {
        iNow++;
        if (iNow == key) {
            iNow = key - 1;
            clock = false;
        }
    }

    chage(iNow);
}
//封装头部和侧边

$('#aside li').each(function(i,item){
    $(this).click(function(){
        var index = $(this).index();
        chage( index );
        iNow = index;
    })
})
$('#header-nav li').each(function(i,item){
    $(this).click(function(){
        var index = $(this).index();
        chage( index );
        iNow = index;
    })
})

//页面移动
var isOk = false;
//上下按键
var page;
$(window).keydown(function(ev) {
        var ev = ev || ev.event;
        if (ev.keyCode === 38) {
            page = iNow;
            page--;
            if (page == -1) {
                page = 0;
            }
            chage(page);
            iNow = page;

        } else if (ev.keyCode === 40) {
            page = iNow;
            page++;
            if (page == key) {
                page = key - 1;
            }
            chage(page);
            iNow = page;
        } else {
            return;
        }
    })
    // 阻止右键

$(document)
    .contextmenu(function(e) {
        return false;
    })
    .contextmenu(function(e) {
        var e = e || e.event;
        L = e.clientX + 10,
            T = e.clientY + 10;
        $('#contextmenu').show().css({ 'top': T + 'px', 'left': L + 'px' })

    })
    .click(function() {
        $('#contextmenu').hide()
    })

// 侧边栏
var arr = [];
$('#header-nav li').each(function(i, item) {
    arr.push($(this).outerWidth())
})

function chage(num) {
    if (num === 1) {
        $('.describe').addClass('describeShake');
    }
    if (num === 2) {
        $('.exp_content')
            .delay(200)
            .animate({ marginTop: '2%', opacity: 1 }, 800, function() {
                $('#exp_list_content').css({ 'transform': 'rotateX(0deg)' })
            });
    }
    if (num === 3) {
        setTimeout(function() {
            $('.skill_list>div').each(function(i, item) {
                $(this).addClass('skill_scale')
            })
        }, 100)
    }
    if (num === 5) {
        $('#contact_box')
            .delay(200)
            .animate({ marginTop: 50, opacity: 1 }, 800, function() {
                $('#con_list_text').delay(300).css({ 'transform': 'rotateX(0deg)' })
            })

    }

    var sumNum =0;
    for(var i=0;i<=num;i++){
        sumNum+= arr[i];//累加上次的值
    }
    $('#h_nav_active').css('width', arr[num]).animate({left:sumNum - arr[num]},400);
    $('#header-nav li span').removeClass('nav_active');
    $('#header-nav li').eq(num).find('span').addClass('nav_active');
    $('#main').css('top', -num + '00%');

    // 设置简介标题
    $('#aside li a')
        .removeClass('active')
        .eq(num)
        .addClass('active');

    $('.up').each(function(i, item) {
        $(item)
            .delay(400)
            .animate({ width: 140 }, 400, function() {
                $(item).animate({ height: 32 }, 300)
            });
        $(item)
            .css({
                width: 0,
                height: 0
            });
    })


}

var body = document.querySelector('body'); //获取body 旋转body
var iNow;
var endx, endy, direction;
if (!detectmob()) {
    // alert('我是PC端')
    iNow = 0;
    window.onmousewheel = onMouseScroll;
    window.addEventListener('DOMMouseScroll', onMouseScroll, false);
    window.onmousewheel = onMouseScroll;

    window.addEventListener('transitionend', function() {
        clock = false;
    }, false);

} else {
    iNow = 0;
    $('.page').css('padding-top', '20%')
        // 移动端
        // alert('我是移动端')
    var order = 0; //滑动多少次
    var deg = 360; //每次旋转角度
    // 手指接触屏幕
    // document.addEventListener("touchstart",function(e){
    //     e.preventDefault();//去掉橡皮筋效果
    // })
    document.addEventListener("touchstart", function(e) {
        if (direction === 2 && iNow === 0) {
            window.location.reload();
        }
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 0:
                // alert("未滑动！");
                break;
            case 1:
                // alert("向上！")
                iNow++;
                if (iNow >= key) {
                    iNow = key - 1;
                    break;
                }
                chage(iNow);
                break;
            case 2:
                // alert("向下！")
                iNow--;
                if (iNow <= -1) {
                    iNow = 0;
                    break;
                }
                chage(iNow);
                break;
            case 3:
                order++;
                body.style.transform = 'rotateY(' + deg * order + 'deg)';
                // alert("向左！")
                // alert(order)
                break;
            case 4:
                order--;
                body.style.transform = 'rotateY(' + deg * order + 'deg)';
                // alert("向右！")
                // alert(order)
                break;
            default:
        }
    }, false);
}



/*移动端事件*/

var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI; //Math.atan2(angy, angx)接受两个参数x和y,
};
//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) { //Math.abs()求绝对值
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}
console.log('%c  努力不一定会成功,但为了成功必须努力！', ' color: red;font-size:20px')
