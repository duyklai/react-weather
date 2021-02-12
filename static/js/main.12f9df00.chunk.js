(this["webpackJsonpfetch-weather"]=this["webpackJsonpfetch-weather"]||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),o=a(1),s=a.n(o),l=a(5),d=a(6),m=a(7),p=a(9),h=a(8),u=a(10),_=(a(17),function(){return n.a.createElement("div",{className:"title"},n.a.createElement("h1",null,"Weather"))}),f=function(e){return n.a.createElement("div",{className:"form-div"},n.a.createElement("form",{className:"location-form",onSubmit:e.getWeather},n.a.createElement("input",{className:"city",name:"city",type:"text",placeholder:"City...",autoComplete:"off"}),n.a.createElement("input",{className:"country",name:"country",type:"text",placeholder:"Country...",autoComplete:"off"}),n.a.createElement("input",{type:"submit",value:"Find"})),e.error&&n.a.createElement("p",null,e.error))},v=function(e){return n.a.createElement("div",{className:"weather-tile "+(e.visible?"":"hidden")},n.a.createElement("div",{className:"date-info"},e.city&&e.country&&n.a.createElement("p",{className:"location"},n.a.createElement("i",{className:"material-icons"},"navigation"),n.a.createElement("span",{className:"color-text"},e.city,", ",e.country)),e.date&&n.a.createElement("p",null,e.date)),n.a.createElement("div",{className:"weather-info"},n.a.createElement("div",{className:"weather-temp"},e.weather_icon&&n.a.createElement("img",{className:"weather-status",src:"http://openweathermap.org/img/wn/".concat(e.weather_icon,"@2x.png"),alt:"".concat(e.description)}),e.temperature&&n.a.createElement("p",{className:"color-text"},e.temperature,"\xb0F")),n.a.createElement("div",{className:"weather-condition"},e.description&&n.a.createElement("p",null,e.description))))},y=function(e){return n.a.createElement("div",{className:"forecast-tile"+(e.visible?"":"hidden")},n.a.createElement("div",{className:"day2"},n.a.createElement("div",{className:"forecast-date-info"},e.date2&&n.a.createElement("p",null,e.date2)),n.a.createElement("div",{className:"forecast-weather-info"},n.a.createElement("div",{className:"forecast-weather-temp"},e.weather_icon2&&n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather_icon2,"@2x.png"),alt:"".concat(e.description2)}),e.temperature2&&n.a.createElement("p",{className:"color-text"},e.temperature2,"\xb0F")),n.a.createElement("div",{className:"forecast-condition"},e.description2&&n.a.createElement("p",null,e.description2)))),n.a.createElement("div",{className:"day3"},n.a.createElement("div",{className:"forecast-date-info"},e.date3&&n.a.createElement("p",null,e.date3)),n.a.createElement("div",{className:"forecast-weather-info"},n.a.createElement("div",{className:"forecast-weather-temp"},e.weather_icon3&&n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather_icon3,"@2x.png"),alt:"".concat(e.description3)}),e.temperature3&&n.a.createElement("p",{className:"color-text"},e.temperature3,"\xb0F")),n.a.createElement("div",{className:"forecast-condition"},e.description3&&n.a.createElement("p",null,e.description3)))),n.a.createElement("div",{className:"day4"},n.a.createElement("div",{className:"forecast-date-info"},e.date4&&n.a.createElement("p",null,e.date4)),n.a.createElement("div",{className:"forecast-weather-info"},n.a.createElement("div",{className:"forecast-weather-temp"},e.weather_icon4&&n.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.weather_icon4,"@2x.png"),alt:"".concat(e.description4)}),e.temperature4&&n.a.createElement("p",{className:"color-text"},e.temperature4,"\xb0F")),n.a.createElement("div",{className:"forecast-condition"},e.description4&&n.a.createElement("p",null,e.description4)))))};a(18).config();var w="cb097335fd62f4cf147aefee07730478",E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={date:void 0,temperature:void 0,city:void 0,country:void 0,description:void 0,weather_icon:void 0,date_forecast_day2:void 0,temp_forecast_day2:void 0,description_day2:void 0,weather_icon_day2:void 0,date_forecast_day3:void 0,temp_forecast_day3:void 0,description_day3:void 0,weather_icon_day3:void 0,date_forecast_day4:void 0,temp_forecast_day4:void 0,description_day4:void 0,weather_icon_day4:void 0,visible:!1,error:void 0},a.getWeather=function(){var e=Object(l.a)(s.a.mark((function e(t){var r,n,c,i,o,l,d,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.elements.city.value,n=t.target.elements.city.value,!r||!n){e.next=22;break}return e.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&APPID=").concat(w,"&units=imperial"));case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,e.next=12,fetch("https://api.openweathermap.org/data/2.5/forecast?q=".concat(r,",").concat(n,"&APPID=").concat(w,"&units=imperial"));case 12:return o=e.sent,e.next=15,o.json();case 15:l=e.sent,0===(d=a.hourConverter(i.dt))&&(d=1),m=Math.ceil((24-d)/3)+2,a.setState({date:a.timeConverter(i.dt),temperature:Math.round(i.main.temp),city:i.name,country:i.sys.country,description:i.weather[0].description,weather_icon:i.weather[0].icon,date_forecast_day2:a.timeConverter(l.list[m].dt),temp_forecast_day2:Math.round(l.list[m].main.temp),description_day2:l.list[m].weather[0].description,weather_icon_day2:l.list[m].weather[0].icon,date_forecast_day3:a.timeConverter(l.list[m+8].dt),temp_forecast_day3:Math.round(l.list[m+8].main.temp),description_day3:l.list[m+8].weather[0].description,weather_icon_day3:l.list[m+8].weather[0].icon,date_forecast_day4:a.timeConverter(l.list[m+16].dt),temp_forecast_day4:Math.round(l.list[m+16].main.temp),description_day4:l.list[m+16].weather[0].description,weather_icon_day4:l.list[m+16].weather[0].icon,visible:!0,error:""}),e.next=23;break;case 22:a.setState({error:"Please enter a city and country"});case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"timeConverter",value:function(e){var t=new Date(1e3*e);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+", "+t.getDate()}},{key:"hourConverter",value:function(e){return new Date(1e3*e).getHours()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(_,null),n.a.createElement(f,{getWeather:this.getWeather,error:this.state.error}),n.a.createElement(v,{date:this.state.date,temperature:this.state.temperature,city:this.state.city,country:this.state.country,description:this.state.description,weather_icon:this.state.weather_icon,visible:this.state.visible}),n.a.createElement(y,{date2:this.state.date_forecast_day2,temperature2:this.state.temp_forecast_day2,description2:this.state.description_day2,weather_icon2:this.state.weather_icon_day2,date3:this.state.date_forecast_day3,temperature3:this.state.temp_forecast_day3,description3:this.state.description_day3,weather_icon3:this.state.weather_icon_day3,date4:this.state.date_forecast_day4,temperature4:this.state.temp_forecast_day4,description4:this.state.description_day4,weather_icon4:this.state.weather_icon_day4,visible:this.state.visible}))}}]),t}(n.a.Component);i.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.12f9df00.chunk.js.map