##倒计时问题

###ios中

错误写法
````
<body>
	倒计时容器
</body>
````
#### 导致问题
1.容器如果是webview的话， 在滚动body的时候会阻塞js代码的执行， 目前检测到的有
（1）定时器
（2）动画类的执行
2.如果是非webview的时候，目前来看是不存在此问题的

###解决方案

````
<body style="overflow:hidden">
	<div style="overlow: scroll"> //滚动容器
		内容
		定时器
		内容
	</div>
</body>
````
####解释
由于在webview中 事件的执行顺序是 优先响应touch事件，此时会暂停所有的动画效果