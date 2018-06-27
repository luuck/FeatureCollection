(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);

var innerGroup = $('.innerwraper');
// var leftArrow = $('.left-arrow');
// var rightArrow = $('.right-arrow');
var spanGroup = $('.pagination span'); // 所有的原点
var imgWidth = $('.innerwraper img:first-child').eq(0).width();
var _index = 0;
var timer = null;
var flag = true;

// 点击原点切换图片
spanGroup.on('click', function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);
});

function selectPic(num) {
    clearInterval(timer);
    // 点击的小原点背景色变白
    $('.pagination span').eq(num).addClass('active').siblings().removeClass('active');
    // 小圆点切换至最后的时候，再次切换的时候呢，让第一个小圆点变白，周而复始
    if (num % 4 === 0) {
        $('.pagination span').eq(0).addClass('active').siblings().removeClass('active');
    }

    $('.inner').stop().animate({
        left: -num * imgWidth,
    }, 1000, function() {

        // 点击切换图片效果结束后，要开始自动播放了
        timer = setInterval(go, 3000);
        // 检查是否到最后一张
        if (_index == innerGroup.length - 1) {
            // 最后一张图片的时候，让_index等于0
            _index %= 4;
            $('.inner').css('left', 0);
        }
    })
}

// 自动切换
function autoGo(bol) {
    // 自动行走
    if (bol) {
        timer = setInterval(go, 3000);
    }
}

autoGo(flag);

function go() {
    // 计时器的函数
    _index++;
    selectPic(_index);
}