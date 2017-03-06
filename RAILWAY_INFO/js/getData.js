	var root = 'https://rti-giken.jp/fhc/api/train_tetsudo/delay.json';
	var array = [];
	var title = "";
	var body = "";
	var name = "";
	var list = [];
	$.ajax({
		url: root,
		dataType: 'jsonp',
		type: 'GET'
		success: function(data){
			array = data;
			console.log(array);
			for (var i = 0; i < data.length; i++){
				name = array[i].name;
				company = array[i].company;
				list +=
				"<li>" +
				"<div>" +
				"<span>" + id + "</span>" +
				"<span>" + title + "</span>" +
				"<p>" + body + "</p>" +
				"</div>" +
				"</li>";
			}
		}
	}).then(function(data) {
		array = data;
		console.log(array);
		for (var i = 0; i < data.length; i++){
			name = array[i].name;
			company = array[i].company;
			list +=
			"<li>" +
			"<div>" +
			"<span>" + id + "</span>" +
			"<span>" + title + "</span>" +
			"<p>" + body + "</p>" +
			"</div>" +
			"</li>";
		}
		$('body').append("<ul>" + list + "</ul>");
	});
