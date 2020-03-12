// 有待改进

function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        return new ActiveXObject('Microsoft.XMLHTTP');
    } else {
        return new XMLHttpRequest();
    }
}

function get() {
    var xhr = createXMLHttpRequest(); //onreadystatechange
    xhr.open('get', url, true);
    xhr.send();
    xhr.onreadystatechange = function(req) {
        if (req.readyState == 4 && req.status == 200) {
            //成功
        }
    }
}

ajax({
    type: 'get',
    url: '',
    dataType: 'json',
    async: true, // 异步，async：同步
    'content-type': 'application/x-www-form-urlencoded',
    success: function() {

    },
    error: function() {

    }
});


// https://blog.csdn.net/abeeeee/article/details/77419044  【不错的blog】
/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式，默认使用GET
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
function ajax(opt) {　　
    opt = opt || {};　　
    var type = opt.type || 'GET';　　
    type = type.toUpperCase() || 'GET';　　
    var url = opt.url || '';　　
    var async = opt.async || true;　　
    var data = opt.data || null;　　
    var success = opt.success || function() {};　　
    var xmlHttp = null;　　
    if (XMLHttpRequest) {　　　　 xmlHttp = new XMLHttpRequest();　　 }　　
    else {　　　　 xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');　　 }　　
    var params = [];　　
    for (var key in data) {　　　　 params.push(key + '=' + data[key]);　　 }　　
    var dataStr = params.join('&');　　
    if (type === 'POST') {　　　　
        xmlHttp.open(type, url, async);　　　　
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');　　　　
        xmlHttp.send(dataStr);　　
    }　　
    else {　　　　
        xmlHttp.open(type, url + '?' + dataStr, async);　　　　
        xmlHttp.send(null);　　
    }　　
    xmlHttp.onreadystatechange = function() {　　　　 if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {　　　　　　 success(xmlHttp.responseText);　　　　 }　　 };
}