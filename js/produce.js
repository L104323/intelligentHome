$(function(){
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		if(top>200){
			$('.leftImg').css('transform','translateX(0px)');
			$('.leftImg').css('opacity','1');
			$('.leftImg').css('visibility','visible');
			$('.showItemLeft').css('transform','translateX(0px)');
			$('.editor').css({'transform':'translateX(0px)','opacity':'1'});
		}
		if(top>1000){
			$('#timeSlider1').css({'transform':'translateX(0)','opacity':'1'});
		}
		if(top>1185){
			$('#timeSlider2').css({'transform':'translateX(0)','opacity':'1'});
		}
		if(top>1400){
			$('#timeSlider3').css({'transform':'translateX(0)','opacity':'1'});
		}
		if(top>1695){
			$('#timeSlider4').css({'transform':'translateX(0)','opacity':'1'});
		}
		
	})
})
