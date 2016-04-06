$(function(){

	function resiZe() {
		/*获取屏幕的宽度*/
		var windowWidth = $(window).width();
		/*判断屏幕尺寸 是否小于768*/
		var isSmallscreen = windowWidth < 768;
		/*console.log(11);*/
		/*遍历item 分别为每张图片 根据屏幕宽度 选取大小图片*/
		$('#main_ad > .carousel-inner > .item').each(function(i,item){
			var $item = $(item);
			var $a = isSmallscreen ? $item.data('img-xs') : $item.data('img-lg');
			/*data(）这是JQuery中的写法   js中dataset[]  是这样写的*/
			/*console.log(11);*/

			$item.css('backgroundImage','url("'+ $a +'")');
			// $item.css('backgroundImage','url(isSmallscreen ? $item.data('img-xs') : $item.data('img-lg'))');
			if(isSmallscreen){
						$item.html('<img src="'+ $a +'"/>');
			}else {
						$item.empty();
			}
		})
	}
	$(window).on('resize', resiZe).trigger('resize');
	$('[data-toggle="tooltip"]').tooltip();


	var $ulwidth = $('.nav-tabs');
	var width = 30 ;
	$ulwidth.children().each(function(index,element){
		width += element.clientWidth;
	});

	if(width > $(window).width()){
		$ulwidth
			.css('width', width)
      .parent().css('overflow-x', 'scroll');

	}

/*tab切换*/
var $title = $('.news-title');
$('#news .nav-pills a').on('click',function(){
	$title.text($(this).data('title'));
});

var $carousel = $('.carousel');
var startX;
var endX;
var offset = 50 ;
$carousel.on('touchstart',function(e){
	startX=e.originalEvent.touches[0].clientX;
});

$carousel.on('touchmove',function(e){
	endX=e.originalEvent.touches[0].clientX;
});
$carousel.on('touchend',function(e){
	var distance = Math.abs(startX - endX);
	if(distance > offset){
		$(this).carousel(startX > endX ?'next' :'prev');
	}
});





});