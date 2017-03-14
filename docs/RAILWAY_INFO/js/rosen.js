$(function() {
	$('.button').click(function() {
		query = "https://rti-giken.jp/fhc/api/train_tetsudo/delay.json";
		$.get(query,function(data){
		})
		.done(function(data) {
			console.log(data.results);
			$('body').append(data.results);
			var array = '"' + data.results + '"';
			var array2 = array.replace( /}/g , "}@" ) ;
			var resArray = array.split("@");
			console.log(resArray);
		});
	});
});