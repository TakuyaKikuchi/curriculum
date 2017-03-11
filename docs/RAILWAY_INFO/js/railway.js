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
			var stationNum = data.response.station;
			for (var i = 0; i < stationNum.length; i++){
				line = stationNum[i].line;
				name = stationNum[i].name;
				next = stationNum[i].next;
				prev = stationNum[i].prev;
				list += "<li>" + name + "</li>";
			}
			$('.section_inr').append("<ul class=" + 'railway_list' + ">" + list + "</ul>");
		});
	})
})