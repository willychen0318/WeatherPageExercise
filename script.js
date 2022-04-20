let weather ={
    "apiKey":"b01f116f6bb757cca7ff8ec9d20f2f6b",
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const{ name }= data;
        const{ icon, description }= data.weather[0];
        const{ temp, humidity }= data.main;
        const{ speed }=data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";
    },
};

document
.querySelector(".search button")//need to plus "defer" after html.script
.addEventListener("click",function(){
weather.search();
});

weather.fetchWeather("taipei");