$(function(){
	var modal= $(".modal");
	var modalShow= $(".modal_show");
	var modalClose= $(".modal_close");
	var current_scrollY = "";
	modalShow.on("click",function(){
		//現在のスクロールを取得
		current_scrollY = $( window ).scrollTop();
		$("body").css({
			transform: 'none',
			position: 'fixed',
			width: '100%',
			overflow: 'hidden',
			zIndex: '0',
			top: -1 * current_scrollY
		});
		modal.fadeIn('slow');
	});
	$(".modal,.modal_close").on("click",function(){
		//モーダルコンテンツ内をクリックしても閉じない
		$('.modal_content').on("click",function() {
			return false;
		});
		//"body"のcssをスクロール可能に
		$("body").css({
			position: 'static',
			overflow: 'auto'
		});
		$('html, body').prop( { scrollTop: current_scrollY } );
		var fadeOut = $.when(
			modal.fadeOut('slow')
			);
		fadeOut.done(function(){
			$("body").attr( { style: '' } );
		})
	});
});
