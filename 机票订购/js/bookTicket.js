$(function(){
	
					//头部移动效果
				$('.header-right ul li').hover(function(){
					$(this).addClass('on').siblings().removeClass('on');
				});	
				

				//banner轮播图
				var $banner = $('.banner');//轮播大框
				var $btnDiv = $('.banner .btn div');//左右切换按钮
				var $bannerLi = $('.banner ul li');//图片的轮播li
				var $tabDiv = $('.banner .tab div');//底部切换键
				
				play($btnDiv,$bannerLi,$tabDiv,$banner);//封装传参，总的函数
				
				function play($btnDiv,$bannerLi,$tabDiv,$banner){
			 			//左右两边按钮
					var index=0;
					$btnDiv.click(function(){
						var i = $(this).index();
						if(i){
							index++;
							index=index%$bannerLi.length;
							fn();
						}
						else{
							index--;
							if(index<0) index=$bannerLi.length-1;
							fn();
						}
						
					});
					$banner.hover(function(){
						clearInterval(timer);
					},function(){
						auto();
					});
					//自动轮播
					function auto(){
						timer = setInterval(function(){
						index++;
						index=index%$bannerLi.length;
						fn();
					},5000);
					};
					
					auto();
					$tabDiv.click(function(){
						
						index = $(this).index();
						console.log(index);
						fn();
					});
					function fn(){
						$bannerLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
						$tabDiv.eq(index).addClass('on').siblings().removeClass('on');
					};
				};				
	
	
	
	
	
});
