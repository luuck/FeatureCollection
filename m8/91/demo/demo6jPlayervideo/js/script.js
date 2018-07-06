$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "我的JPlayer",
				mp4: "../imooc.mp4",
				ogv: "../imooc.ogv",
				webm: "../imooc.webm"
			});
		},
		swfPath: "./js",
		supplied: "mp4, webm, ogv",
		size: {
			width: "640px",
			height: "360px",
			cssClass: "jp-video-360p"
		},
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

});