$(function(){
	//0.定义变量保存偏移位
	var offset = 0;
	//1.让图片滚动起来
	var timer ;
	function autoPlay(){
		timer = setInterval(function(){		//设置一个定时器
		offset += -5;
		if(offset <= -1200){		//4张图片的四张都闪过以后再跳转4*400
			offset = 0;		//实现跳转
		  }
			$(".roll>ul").css("marginLeft",offset);
		},50);
	}
	autoPlay();
	//2.监听li的移入移出事件
	$(".roll>ul>li").hover(function(){
		//移入时停止滚动
		clearInterval(timer);	//删除定时器
		//给非当前选中添加蒙板
		$(this).siblings().fadeTo(100,0.5);
		//去除当前的蒙板
		$(this).fadeTo(100,1);
	},function(){
		//移出时继续滚动
		autoPlay();
		//去除所有的蒙板
		$(".roll>ul>li").fadeTo(100,1);
	});
});