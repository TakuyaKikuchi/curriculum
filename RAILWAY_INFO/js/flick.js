$(function() {
	// #page1swipeを右から左へスワイプした時の動作（swipeleftでpage2viewの関数を呼び出す）
	$(document).on('pagecreate','#page1',function(){
		$('#page1swipe').on('swipeleft',page2view);
	});

	// #page2swipeを左から右へスワイプした時の動作（swiperightでpage1view_backの関数を呼び出す）
	// #page2swipeを右から左へスワイプした時の動作（swipeleftでpage3viewの関数を呼び出す）
	$('#page2').on('pagecreate',function(){
		$('#page2swipe').on('swiperight',page1view_back);
		$('#page2swipe').on('swipeleft',page3view);
	});

	// #page3swipeを左から右へスワイプした時の動作（swiperightでpage2view_backの関数を呼び出す）
	$('#page3').on('pagecreate',function(){
		$('#page3swipe').on('swiperight',page2view_back);
	});


	// #page1へ戻る（ { reverse: true } でページ移動のアニメーションを逆再生）
	function page1view_back(){
		$.mobile.changePage('#page1', { reverse: true } ,'slide',false,true);
	}

	// #page2へ進む
	function page2view(){
		$.mobile.changePage('#page2','slide',true,true);
	}

	// #page2へ戻る（ { reverse: true } でページ移動のアニメーションを逆再生）
	function page2view_back(){
		$.mobile.changePage('#page2', { reverse: true } ,'slide',true,true);
	}

	// #page3へ進む
	function page3view(){
		$.mobile.changePage('#page3','slide',true,true);
	}
});


