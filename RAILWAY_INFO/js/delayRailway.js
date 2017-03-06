$(function(){
	$(".delay_button").on("click", function(){
		console.log("ok");
		$.getJSON('https://rti-giken.jp/fhc/api/train_tetsudo/delay.json', {"name":"JR神戸線","company":"JR西日本"}, function(json, textStatus) {
				/*optional stuff to do after success */
		});
		// var json = JSON.parse(data("https://rti-giken.jp/fhc/api/train_tetsudo/delay.json").getContentText());
		var name = "中央線快速電車";
		var company = "JR東日本";
		var body = "";

		// for each(var obj in json) {
		// 	if (obj.name === name && obj.company === company) {
		// 		body = "[info][title]電車運行情報[/title]" + company + name + "が遅延しています(^^;)";
		// 	}
		// }
		// if (!body) {
		// 	body = body + "[info][title]電車運行情報[/title]本日の遅延情報はありません(nod)";
		// }
		// body = body + "[/info]";
		// sendMessage(token, room_id, body);
	})
})
