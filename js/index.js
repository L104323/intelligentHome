$(function(){
	$("#moreOne").click(function(){
		$("#close").css("display","inline-block");
		$("#moreOne").css("display","none");
		$("#close").css({"transition":"10s"});
		
		$('#carousel-example-generic').css('z-index','-1');
		
		$('.navSecond').css('display','block');
		$('.box02 img').css('width','100%');
		
		$('.box04Content').css('height','100%');
		$('.box04Content').append(str);
	
		$('.box01Content').css('animation','box01 2s ease');
		$('.box030').css('animation','animate 2s ease');
		$('.box04Content0').css('animation','box04 2s ease');
		
		
		
	})
	$("#close").click(function(){
		$("#moreOne").css("display","inline-block");
		$("#close").css("display","none");
		$('.box02 img').css('width','0%');;		
		$('.box01Content').css('animation','box010 2s ease');
		$('.box030').css('animation','animate2 2s ease');
		$('.box04Content').css('animation','box040 2s ease');
		$('.box').css('animation','navBox2 2s ease');
			
		setTimeout(function (){
			$('.navSecond').css('display','none');
			$('#carousel-example-generic').css('z-index','2');
		},2000);
	})
	
	//before动画待完善
	$('.before').mouseover(function(){
		$('.icon1').css('animation','icon1 0.5s ease');
//		setTimeout(function(){
		$('.before img').css('animation','beforeImg 0.5s linear');
//		},500);		
	})
//	$('.before').mouseout(function(){
////		$('.icon1').css('animation','icon1 0.5s ease');
//		$('.before img').css('animation','beforeImg2 0.5s linear');
//	})

	$('.vedioBox').click(function(){
		$('.vedioBox img').css('display','none');
		$('.videoPlay').css('opacity','1');
		$(this).toggleClass('play');
		if($(this).hasClass('play')){
			$('.videoPlay').get(0).play();
		}else{
			$('.videoPlay').get(0).pause();
		}
	})
	
	
	$('.colBox').mouseover(function(){
		$('.colBox').css('background-color','rgba(0,0,0,0)');
	})
	
	//文档高度
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		console.log(top+'aaaaaaaaa')
		if(top>478){
			$('.moreBoxSlider').css('animation',' moreGo 1s');
			$('.vedioBoxSlider').css('animation','widthGo 1s');
		}
		if(top>947){
			$('.caseTitle').css({'transition':'1s ease','transform':'translateY(-80px)'});
			$('#case .col-lg-4:nth-child(1),#case .col-lg-4:nth-child(2),#case .col-lg-4:nth-child(3)').css({'transition':'2s ease','transform':'translateY(-80px)'});
			
		}
		if(top>1277 && top<1628) {
			$('#case .col-lg-4:nth-child(4),#case .col-lg-4:nth-child(5),#case .col-lg-4:nth-child(6)').css({'transition':'1s ease','transform':'translateY(-80px)'});
			$('#case .more').css('transform','translateY(-60px)');
		}
		
		
		//动画不能响应
		if(top>1068){
			$('#case .col-lg-6:nth-child(1),#case .col-lg-6:nth-child(2)').css({'transition':'2s ease','transform':'translateY(-80px)'});
		}
		if(top>1400){
			$('#case .col-lg-6:nth-child(3),#case .col-lg-6:nth-child(4)').css({'transition':'2s ease','transform':'translateY(-80px)'});
		}
		if(top>1679){
			$('#case .col-lg-6:nth-child(5),#case .col-lg-6:nth-child(6)').css({'transition':'2s ease','transform':'translateY(-80px)'});
		}
		
		//换背景图
		if(top<1623){
			$('#bg1').css('display','block');
			$('#bg2').css('display','none');
		}
		if(top>1000){
			$('#bg1').css('display','none');
			$('#bg2').css('display','block');
		}
		if(top>2749){
			$('#bg1').css('display','none');
			$('#bg2').css('display','none');
			$('#bg3').css('display','block');
		}
		
		//新闻资讯动画
		if(top>2432){
			$('.newsLeft').css('animation','newLeft 1s ease');
			$('.newList').css('animation',' newList 1s ease');
		}
		
		//为什么'visibility','hidden'不行  回到顶部
		if(top>600){
			$('.srollTop').css('display','block');
//			$('.srollTop').css('transform','translateY(-100px)');
//			$('.srollTop').css('transition','2s ease all');
		}
		else{
//			$('.srollTop').css('visibility','hidden');
			$('.srollTop').css('display','none');
		}
		
		//吸顶
		if(top>660){
			$('.one').css('background','black');
		}else{
			$('.one').css('background','rgba(0,0,0,0)');
		}	
		
		if(top>2749){
			$('#build').css('transform','translateY(0)');	
		}
		if(top>2842){
			$('.filmContent').css('transform','translateY(0px)');
		}
		if(top>2842){
			$('#brandAll').css('transform','translateY(0px)');
		}
	})	
	
	//监听
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		$('.listContent').each(function(index,element){	
			var off = $('.listContent').eq(index).offset().top-1100;
			console.log(index)
			console.log(off)
			if(top>off){
				$('#navUl li a').eq(index).css('color','red');
				$('#navUl li').each(function(a,element){
					if(a!=index){	
						$('#navUl li a').eq(a).css('color','white');
					}			
				})
			}
			
		})	
		
	})
	//验证码
	$('#codeImg').click(function(){
		var msg = ["1","2","3","4","5","6","7","8"];
//		alert(msg[Math.floor(Math.random() * msg.length)]);
		$('#codeImg img').attr('src','img/code'+msg[Math.floor(Math.random() * msg.length)]+'.jpg');
	})
	
	//回到顶部
	$('.srollTop').click(function(){
		var speed=400;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;	
	})

	//导航条点击事件
	$('#hoverColor').click(function(){
//		alert($('.control').offset().top);
		var speed=400;//滑动的速度
        $('body,html').animate({ scrollTop: $('.control').offset().top-80 }, speed);
//		$(document).scrollTop(400);
	})
	$('.aboutLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('.vedio').offset().top-80 }, speed);
	})
	$('.caseLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('#case').offset().top-80 }, speed);
	})
	$('.produceLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('#produce').offset().top-80 }, speed);
	})
	$('.newLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('#news').offset().top-80 }, speed);
	})
	$('.filmLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('#filmSlider').offset().top-80 }, speed);
	})
	$('.contactLi').click(function(){
		var speed=400;//滑动的速度
		$('body,html').animate({ scrollTop: $('#footBox').offset().top-80 }, speed);
	})
	
	$('#navUl li').click(function(){
		var s = $('#navUl li').index(this);
		var h = $('.listContent').eq(s).offset().top;
//		alert(h)
//		$('#navUl li a').eq(s).css('backgroundColor','grey');	
		$('#navUl li a').eq(s).css('color','red');
		$('#navUl li').each(function(index,element){
			if(index!=s){
//				$('#navUl li a').eq(index).css('backgroundColor','rgba(0,0,0,0)');	
				$('#navUl li a').eq(index).css('color','white');
			}			
		})
	})
	
})
	
	
	
	
	
	
	
	
	

