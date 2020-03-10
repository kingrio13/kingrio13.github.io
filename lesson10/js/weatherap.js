const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    

 //console.table(weatherObject); 
 document.getElementById('currentWeather').innerHTML=weatherObject.weather[0].main;


 //console.log(weatherObject.main.temp);
 document.getElementById('temperature').innerHTML=weatherObject.main.temp + "&#8457;";


 //console.log(weatherObject.main.humidity);
document.getElementById('humidity').innerHTML=weatherObject.main.humidity+"%";
 
 //console.log(weatherObject.wind.speed);
 document.getElementById('windspeed').innerHTML=weatherObject.wind.speed + "MPH"

 //main.humidity
 //main.temp
 //wind.speed




  });