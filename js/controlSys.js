$(function(){
	$('.navLi,.navLi2').click(function(){
		var idx=$(this).index();

		$('#controlC .row').eq(idx).show();
		$('#controlC .row').not($('#controlC .row').eq(idx)).hide();
	})	
	$('#navUl .navLi2').click(function(){
		
		var idx=$(this).index();
		alert(idx)
		$('.navLi2').eq(idx).css('color','red');		
		$('.navLi2').eq(idx).siblings().css('color','white');	
		$('#controlC .row').eq(idx).show();
		$('#controlC .row').not($('#controlC .row').eq(idx)).hide();
				
//		$('.navList ul li').eq(idx).children().css({'background':'#f1501a','color':'white'});
//		$('.navList ul li')..eq(idx).siblings().children().css({'background':'white','color':'black'});
	})
})
