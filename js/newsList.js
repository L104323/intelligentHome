$(function(){
	
	//标签页
	$('.navList ul li').click(function(){
//		alert($(this).index())		
		idx = $(this).index();
		
		$('.navList ul li').eq(idx).children().css({'background':'#f1501a','text-decoration':'none','color':'white'});
		$('.navList ul li').not($(this)).children().css({'background':'white','color':'black'});
		
		
		$(this).addClass('active');//激活鼠标浮上去的标签
		$('.navList ul li').not($(this)).removeClass('active');//如果不是浮上去的标签,清除激活效果
		//找到当前的li的id
		//如果.row的ID与idx的值匹配则显示当前标签下的内容
		$('#newListContent .row').eq(idx).show();
		//非当前标签下的内容都隐藏
		$('#newListContent .row').not($('#newListContent .row').eq(idx)).hide();
	})
	//初始化激活的项
	$('#newListContent .row').eq(0).show(1000);
	
	//不起作用？？？
//	('.own li').click(function(){
//		alert(1)
//	})
	
	
	//动画
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top);
		if(top>400){
			$('.newsUlBox').css({'transform':'translateY(0px)','transition':'.5s'});
		}
	})

})
