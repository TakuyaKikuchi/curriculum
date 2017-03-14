$(function(){
	var otherDetail = $('.textOver');
	var cutDetail = otherDetail.data('max'); // カットする文字数
	var afterTxt = ' …'; // 文字カット後に表示するテキスト

	otherDetail.each(function(){
		var textLength = $(this).text().length;
		var textTrim = $(this).text().substr(0,(cutDetail))
		if(cutDetail < textLength) {
			$(this).html(textTrim + afterTxt).css({visibility:'visible'});
		} else if(cutDetail >= textLength) {
			$(this).css({visibility:'visible'});
		}
	});
});
