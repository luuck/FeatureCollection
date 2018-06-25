(function () {
    var win = window;
    var doc = win.document;
    var psdWidth = 720;
    var tid;
    var throttleTime = 100;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        doc.head.appendChild(metaEl);
    }
    metaEl.setAttribute('content',
        'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1');

    var resizeRem = function () {
        var aaa = document.documentElement.clientWidth;
        if (aaa >= 420) {
            aaa = 375;
            // alert(1)
        }
        console.log('改变', aaa)
        doc.documentElement.style.fontSize = aaa / psdWidth * 100 + 'px';
    };
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(resizeRem, throttleTime);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(resizeRem, throttleTime);
        }
    }, false);

    resizeRem();
    if (doc.readyState === 'complete') {
        resizeRem();
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            resizeRem();
        }, false);
    }
    win.addEventListener("orientationchange", function () {
        // 宣布新方向的数值
        clearTimeout(tid);
        tid = setTimeout(resizeRem, throttleTime);

    }, false);
    console.log(psdWidth)
})();