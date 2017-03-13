$(function () {
	var pullDown = $(".pulldown_desc");
	var passive = $(".passive");
	var active = $(".active");
$("li").click(function(){
	console.log("Ok");
})
	$(".pulldown_desc").on('click', function () {
		if ($(this).hasClass('passive')) {
			$(this).addClass('active');
			$(this).removeClass('passive');
			$(this)
			.next(".pulldown_inr").css({
				display: "inline-block"
			})
			$(this).find(".balloon_arrow").css({
				display: "inline-block"
			})
		} else if ($(this).hasClass('active')) {
			$(this).addClass('passive');
			$(this).removeClass('active');
			$(this)
			.next(".pulldown_inr").css({
				display: "none"
			})
			$(this).find(".balloon_arrow").css({
				display: "none"
			})
		}
	});
});
