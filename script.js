let weather ={
    "apiKey":"b01f116f6bb757cca7ff8ec9d20f2f6b",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid="+ this.apiKey)
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    },
    

};
