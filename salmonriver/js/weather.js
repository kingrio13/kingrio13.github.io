 //5604473 - preston
 //5585010 - Fish Haven
 //5607916 - Soda Spring


const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4092267&appid=c000215b640f5b08daddcd029b6207aa";
  

//console.log(apiURL);

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
 
 document.getElementById('currentWeather').innerHTML=weatherObject.weather[0].main;

 let temp=weatherObject.main.temp;
 temp=(temp-273.15)*9/5+32;

    document.getElementById('temperature').innerHTML=temp.toFixed(2) + " &#8457;";
    document.getElementById('humidity').innerHTML=weatherObject.main.humidity+"%";
    document.getElementById('windspeed').innerHTML=weatherObject.wind.speed + " mph"
 let f;
let speed=weatherObject.wind.speed;
 
if(temp <= 50 && speed >= 3){

f=35.74+.6215*temp-35.75*Math.pow(speed,.16)+.4275*temp*Math.pow(speed,.16)
document.getElementById("windF").innerHTML = f.toFixed(2) + " &#8457;";

} else {
   document.getElementById("windF").innerText = "N/A" 

}




 //main.humidity
 //main.temp
 //wind.speed




  });