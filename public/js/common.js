$(function(){

	// head list start
	$('.js-logined').on('mouseover', function(){
		$(this).find('ul').toggleClass('hide');
	})

	$('.js-logined').on('mouseout', function(){
		$(this).find('ul').toggleClass('hide');
	})

  $('.js-unlogin').on('click', function(){
    $(this).find('ul').toggleClass('hide');
  })

	$('.js-left-menu div > span').on('click', function(e){

		var index = $(e.target).parentsUntil('.js-left-menu', 'div').index();
		setPlusMinus(index, 1);
		
	})

	// flag:0 初始化，设置为现在的状态
	// flag:1 click,设置为相反的状态
	function setPlusMinus(index, flag){
		// 判断当前的 菜单是
		var cookie_name = 'sdmenu_';
		var parent_name = '';
		if(isPC()){
			parent_name += 'pc-left-menu';
		}else{
			parent_name += 'mobile-left-menu';
		}
		cookie_name += parent_name;

		var list_status = parseCookie(cookie_name, index);
		var $parent = $('#'+parent_name+' > div:eq('+index+')');
		if(flag === 1){
			list_status = String((1 - +list_status));
		}
		if(list_status === '0'){
			$parent.find('.glyphicon-plus').removeClass('hide');
			$parent.find('.glyphicon-minus').addClass('hide');	
		}else{
			$parent.find('.glyphicon-plus').addClass('hide');
			$parent.find('.glyphicon-minus').removeClass('hide');
		}
	}

	// 判断是否为pc端
	function isPC(){
		var _display = $('#pc-left-menu').css('display');
		if(_display === 'block'){
			return true;
		}else{
			return false;
		}
	}

	// 解析cookie
	function parseCookie(cookie_name, index){
		var cookie = {};
		var result = '';

		$.each(document.cookie.split(';'), function(i, n){
			var _cookie = n.split('=');
			cookie[_cookie[0].trim()] = _cookie[1];
		})

		if(cookie[cookie_name]){
			result = cookie[cookie_name].substr(index, 1);
		}else{
			result = 1;
		}

		return result;
	}

	// head list end

	// 首页 start

	function computedBanner(){

		if($('#banner-img').length > 0){
			var selector = '#banner-img';
			$(selector).height($(selector).width() * 285 / 718);
		}

	}

	// 首页 end

	// foot width start
	function footResponsive(){
		$('#footer').css('width', $('#header').width());

		var w_h = $(document).innerHeight();
		var c_h = $('#container').height();
		var f_h = $('#footer').height();
		if(c_h + f_h > w_h){
			$('#footer').css('position', 'static');
		}else{
			$('#container').css('height', $(document).innerHeight());
		}

		$('#footer').show();
	}
	// foot width end

	// 移动端 start	

	$('#left-menu').on('click', function(){
	  $(this).next('div.left-menu').toggleClass('hide');
	})

	// 移动端 end

	function init(){

		computedBanner();

		footResponsive();

		var pc_left_menu, mobile_left_menu;
		window.onload = function() {
		  pc_left_menu = new SDMenu("pc-left-menu");
		  pc_left_menu.init();

		  mobile_left_menu = new SDMenu("mobile-left-menu");
		  mobile_left_menu.init();
		};

		for(var i=0; i<2; i++){
			setPlusMinus(i, 0);	
		}
		
	}

	init();



})