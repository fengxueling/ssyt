$(function(){
	
					//头部移动效果
				$('.header-right ul li').hover(function(){
					$(this).addClass('on').siblings().removeClass('on');
				});	
				
				//banner轮播图
				var $tabDiv = $('.banner .tab div');
				var $picUl = $('.banner .pic ul');
				var $banner = $('.banner');
				var $btn = $('.banner .btn');
				var $btnDiv = $('.banner .btn div');
				var imgWidth = $('.banner .pic li').width();
				var index = 0;
				var nowTime = new Date();
				play($banner,$tabDiv,$picUl,$btn,$btnDiv,imgWidth);
				
				//轮播函数封装
				function play($banner,$tabDiv,$picUl,$btn,$btnDiv,imgWidth){
					$tabDiv.click(function(){
						index = $(this).index();
						$(this).addClass('on').siblings().removeClass('on');
						$picUl.animate({
							marginLeft : -imgWidth*(index+1) + 'px'
						},300);
					});
	
					$banner.hover(function(){
						$btn.show();
						clearInterval(timer);
					},function(){
						$btn.hide();
						timer = setInterval(function(){
							index ++;
							fn();
						},5000);
					});
	
					$btnDiv.hover(function(){
						$(this).addClass('hover');
					},function(){
						$(this).removeClass('hover');
					}).click(function(){
						if ( new Date() - nowTime > 350 )
						{
							nowTime = new Date();
							var i = $(this).index();
							i?index++:index--;
							fn();
						}
					}).mousedown(function(){
						return false;
					});
	
					var timer = setInterval(function(){
						index ++;
						fn();
					},5000);
	
					function fn(){
						var liIndex = index;
						if ( liIndex >= $tabDiv.length )
						{
							liIndex = 0;
						}
						else if ( liIndex < 0 )
						{
							liIndex = $tabDiv.length-1;
						}
						$tabDiv.eq(liIndex).addClass('on').siblings().removeClass('on');
						$picUl.animate({
							marginLeft : -imgWidth*(index+1) + 'px'
						},300,function(){
							if ( index == $tabDiv.length )
							{
								$picUl.css('marginLeft' , -imgWidth+'px');
								index = 0;
							}
							else if ( index < 0 )
							{
								$picUl.css('marginLeft' , -imgWidth*($tabDiv.length)+'px');
								index = $tabDiv.length-1;
							}
						});
					}
				};
	
	
	
	
	
});
