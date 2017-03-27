$(function(){
	var root = 'http://express.heartrails.com/api/json?method=getStations&line=';
	var line = "";
	var name = "";
	var next = "";
	var prev = "";
	var list = [];
	var currently = "";
	var updata = "";
	var moreDetail = "";
	$(".delay_button").on("click",function(){
		list = "";
		$(".railway_list").remove();
		var selectRail = $('.label').text();
		if(selectRail == "路線を選んでください"){
			$(".section_inr").find("p").remove();
			$(".section_inr").append('<p class="error_txt" style="color:#ff0000">路線を選んでください</p>');
		} else {
			$(".section_inr").find("p").remove();
		}
		$.ajax({
			method: 'GET',
			url: root + selectRail,
			dataType: "jsonp"
		}).then(function(data) {
			var stationNum = data.response.station;
			for (var i = 0; i < stationNum.length; i++){
				prefecture = stationNum[i].prefecture;
				line = stationNum[i].line;
				name = stationNum[i].name;
				next = stationNum[i].next;
				prev = stationNum[i].prev;
				length = i;
				postal = stationNum[i].postal;
				x = stationNum[i].x;
				y = stationNum[i].y;
				list +=
				'<li class="getStations">' +
				'<div class="pulldown_desc passive">' + name + '</div>' +
				'<div class="pulldown_inr" style="display:none">' +
				'<iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.co.jp/maps?ll=' + x + ',' + y + '&q=' + name + '&output=embed&t=m&z=18"></iframe>' +
				'<ul class="clearfix station_info">' +
				'<li>駅 名：'  + name + '駅' + '</li>' +
				'<li>路線名：' + line + '</li>' +
				'<li>都道府県：' + prefecture + '</li>' +
				'<li>郵便番号：' + postal + '</li>' +
				'<li>緯度：<span class="ido">' + x + '</span></li>' +
				'<li>経度：<span class="keido">' + y + '</span></li>' +
				'</ul>' +
				'<div class="more_detail modal_show">天気情報を見る</div>' +
				'<div class="modal" style="display:none;">' +
				'<div class="modal_content">' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</li>';
			}
			$('.section_inr').append("<ul class=" + 'railway_list' + ">" + list + "</ul>");
			$('.pulldown_desc').on("click", function(){
				if ($(this).hasClass('passive')) {
					$(this).addClass('active');
					$(this).removeClass('passive');
					$(this)
					.next(".pulldown_inr").slideDown();
				} else if ($(this).hasClass('active')) {
					$(this).addClass('passive');
					$(this).removeClass('active');
					$(this)
					.next(".pulldown_inr").slideUp()
				}
			});
			$('.pulldown_desc').on("click", function(){
				var ido = $(this).next().find('.ido').text();
				var keido = $(this).next().find('.keido').text();
				var xy = keido + ',' + ido;
				$(document).ready(function(){
					$.simpleWeather({
						location: xy,
						unit: 'c',
						success: function(weather) {
							moreDetail =
							'<ul class="weather">'+
								'<li>今の天気:<span>' + weather.text + '</span></li>' +
								'<li>明日の天気:<span>' + weather.forecast[1].text + '</span></li>' +
								'<li>現在の気温:<span>' + weather.temp + '°C' + '</span></li>' +
								'<li>最高気温:<span>' + weather.high + '°C' + '</span></li>' +
								'<li>最低気温:<span>' + weather.low + '°C' + '</span></li>' +
								'<li>湿度:<span>' + weather.humidity + '%' + '</span></li>' +
								'<li>風速:<span>' + weather.wind.speed + 'km/h' + '</span></li>' +
								'<li>DATA:<span>' + weather.updated + '</span></li>' +
							'</ul>' +
							'<div class="cancel_btn modal_close">閉じる</div>';

							var modal= $(".modal");
							var modalShow= $(".modal_show");
							var modalClose= $(".modal_close");
							var targetY  = "";

							modalShow.on("click",function(){
								$(this).next('.modal').find('.modal_content').empty();

								targetY = $(window).scrollTop();
								$("body").css({
									transform: 'none',
									position: 'fixed',
									width: '100%',
									overflow: 'hidden',
									zIndex: '0',
									top: -1 * targetY + 'px'
								});

								$(this).next('.modal').fadeIn('slow');
								$(this).next('.modal').find('.modal_content').append(moreDetail);
							});
							var modalClose = function(modalClose){
								modal.fadeOut('slow');
								$("body").attr( { style: '' } );
								$(window).scrollTop(targetY);
							}
							$(".modal,.modal_close").on("click", modalClose);
						}
					});
				});
			})
		});
	})
})
