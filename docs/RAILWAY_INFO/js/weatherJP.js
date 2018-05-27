$(function(){
	var weatherText = $('.weather_text').text();
	$('.weather_text').on("change",function(){
		console.log(weatherText);
		if(weatherText=='tornado'){
			$('.weather_text').text("竜巻");
		} else if (weatherText=='tropical storm'){
			$('.weather_text').text("熱帯暴風雨");
		} else if (weatherText=='hurricane'){
			$('.weather_text').text("ハリケーン");
		} else if (weatherText=='severe thunderstorms'){
			$('.weather_text').text("激しい雷雨");
		} else if (weatherText=='thunderstorms'){
			$('.weather_text').text("雷雨");
		} else if (weatherText=='mixed rain and snow'){
			$('.weather_text').text("雨と雪");
		} else if (weatherText=='mixed rain and sleet'){
			$('.weather_text').text("雨とみぞれ");
		} else if (weatherText=='mixed snow and sleet'){
			$('.weather_text').text("雪とみぞれ");
		} else if (weatherText=='freezing drizzle'){
			$('.weather_text').text("着氷性の雨");
		} else if (weatherText=='showers'){
			$('.weather_text').text("にわか雨");
		} else if (weatherText=='snow flurries'){
			$('.weather_text').text("にわか雪");
		} else if (weatherText=='light snow showers'){
			$('.weather_text').text("小雪");
		} else if (weatherText=='blowing snow'){
			$('.weather_text').text("飛雪");
		} else if (weatherText=='snow'){
			$('.weather_text').text("雪");
		} else if (weatherText=='hail'){
			$('.weather_text').text("雹");
		} else if (weatherText=='sleet'){
			$('.weather_text').text("みぞれ");
		} else if (weatherText=='dust'){
			$('.weather_text').text("砂煙");
		} else if (weatherText=='foggy'){
			$('.weather_text').text("濃霧");
		} else if (weatherText=='haze'){
			$('.weather_text').text("煙霧");
		} else if (weatherText=='smoky'){
			$('.weather_text').text("煙霧");
		} else if (weatherText=='blustery'){
			$('.weather_text').text("強風");
		} else if (weatherText=='windy'){
			$('.weather_text').text("強風");
		} else if (weatherText=='cold'){
			$('.weather_text').text("寒冷");
		} else if (weatherText=='cloudy'){
			$('.weather_text').text("曇り");
		} else if (weatherText=='mostly cloudy (night)'){
			$('.weather_text').text("ほとんど曇り（夜）");
		} else if (weatherText=='mostly cloudy (day)'){
			$('.weather_text').text("ほとんど曇り（日中）");
		} else if (weatherText=='partly cloudy (night)'){
			$('.weather_text').text("晴れときどき曇り（夜）");
		} else if (weatherText=='partly cloudy (day)'){
			$('.weather_text').text("晴れときどき曇り（日中）");
		} else if (weatherText=='clear (night)'){
			$('.weather_text').text("快晴");
		} else if (weatherText=='sunny'){
			$('.weather_text').text("晴れ");
		} else if (weatherText=='fair (night)'){
			$('.weather_text').text("晴天（夜）");
		} else if (weatherText=='fair (day)'){
			$('.weather_text').text("晴天（日中）");
		} else if (weatherText=='mixed rain and hail'){
			$('.weather_text').text("雨と雹");
		} else if (weatherText=='hot'){
			$('.weather_text').text("暑い");
		} else if (weatherText=='isolated thunderstorms'){
			$('.weather_text').text("局地的雷雨");
		} else if (weatherText=='scattered thunderstorms'){
			$('.weather_text').text("所により雷雨");
		} else if (weatherText=='scattered showers'){
			$('.weather_text').text("所により雨");
		} else if (weatherText=='heavy snow'){
			$('.weather_text').text("大雪");
		} else if (weatherText=='partly cloudy'){
			$('.weather_text').text("晴れときどき曇り");
		} else if (weatherText=='thundershowers'){
			$('.weather_text').text("雷雨");
		} else if (weatherText=='snow showers'){
			$('.weather_text').text("吹雪");
		} else if (weatherText=='isolated thundershowers'){
			$('.weather_text').text("局地的は激しい雷雨");
		} else if (weatherText=='not available'){
			$('.weather_text').text("判別不可");
		}
	})
})