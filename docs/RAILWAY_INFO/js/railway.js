$(function(){
	var root = 'http://express.heartrails.com/api/json?method=getStations&line=';
	var line = "";
	var name = "";
	var next = "";
	var prev = "";
	var list = [];
	var a = "";
	$(".delay_button").on("click",function(){
		$(".railway_list").remove();
		var selectRail = $('.label').text();
		console.log(selectRail);
		$.ajax({
			method: 'GET',
			url: root + selectRail,
			dataType: "jsonp"
		}).then(function(data) {
			console.log(data);
			var stationNum = data.response.station;
			for (var i = 0; i < stationNum.length; i++){
				line = stationNum[i].line;
				name = stationNum[i].name;
				next = stationNum[i].next;
				prev = stationNum[i].prev;
				length = i;
				x = stationNum[i].x;
				y = stationNum[i].y;
				list +=
				'<li>' +
					'<div class=' + '"' + 'pulldown_desc' + ' passive' + '"' + '>' + name + '</div>' +
					'<div class=' + '"' + 'num_' + length + '"' + ' style=' + 'display:none' + '>' +
						'<iframe width=' + '"' + '100%' + '"' + 'height=' + '"' + '250' + '"' + 'frameborder=' + '"' + '0' + '"' + 'scrolling=' + '"' + 'no' + '"' + 'marginheight=' + '"' + '0' + '"' + 'marginwidth=' + '"' + '0' + '"' + 'src=' + '"' + 'http://maps.google.co.jp/maps?ll=' + x + ',' + y + '&q=' + name + '&output=embed&t=m&z=18' + '"' + '></iframe>' +
					'</div>' +
				'</li>';
			}
			$('.section_inr').append("<ul class=" + 'railway_list' + ">" + list + "</ul>");
		});
	})
})