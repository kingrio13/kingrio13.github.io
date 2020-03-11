const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    

 //console.table(weatherObject); 
 document.getElementById('currentWeather').innerHTML=weatherObject.weather[0].main;


 //console.log(weatherObject.main.temp);

 let temp=weatherObject.main.temp;
 //(0K − 273.15) × 9/5 + 32
 temp=(temp-273.15)*9/5+32;
 
 document.getElementById('temperature').innerHTML=temp.toFixed(2) + "&#8457;";


 //console.log(weatherObject.main.humidity);
document.getElementById('humidity').innerHTML=weatherObject.main.humidity+"%";
 
 //console.log(weatherObject.wind.speed);
 document.getElementById('windspeed').innerHTML=weatherObject.wind.speed + "MPH"

 //main.humidity
 //main.temp
 //wind.speed




  });