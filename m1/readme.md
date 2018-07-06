### 问题
1.Q:在做移动端项目的时候发现，如果弹窗的内容很多很长，在滑动弹窗时，蒙层下面的window窗体也会跟着一起滚动，这样带来很差的视觉体验。

1.A:在弹出弹窗的时候，设置window最外层定位为fixed，这样window便不会滚动了，在关闭弹窗的时候，设置window体定位为static，window便可重新滚动。

2.Q:ios8有个坑
    1.引用js的脚本写了async和crossorigin
    2.服务器响应头未返回Access-Control-Allow-Origin脚本会下载但是执行。
2.A:解决方案为：
    1.不要同时写async和crossorigin；
    2.响应头返回Access-Control-Allow-Origin

