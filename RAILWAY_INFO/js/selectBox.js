$(function() {
	var selectInr = $('.select_inr');
	selectInr.change(function () {
		var str = $(this).val();
		var $dataid = $(this).data('id');
		var $label = $('#'+$dataid+'_inr').parent().find(".label");
		$label.text(str);
		$label.css({
			'textAlign': 'center'
		});
		$(this).blur();
	});
});