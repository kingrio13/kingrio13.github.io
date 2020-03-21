
 let doctitle=document.title;

 //5604473 - preston
 //5585010 - Fish Haven
 //5607916 - Soda Spring


 var apiURL;
 switch(doctitle.toLowerCase()) {
  case "preston":
    apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
    console.log("preston");
   break;
  case "fish haven":
     apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=c000215b640f5b08daddcd029b6207aa";
   console.log("Fish Haven");
   break;
  case "soda springs":
    console.log("Soda Spring");
  apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=c000215b640f5b08daddcd029b6207aa";
  break;

}

//console.log(apiURL);
 
//const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    

 //console.table(weatherObject); 
 document.getElementById('currentWeather').innerHTML=weatherObject.weather[0].main;


 //console.log(weatherObject.main.temp);

 let temp=weatherObject.main.temp;
 //(0K − 273.15) × 9/5 + 32
 temp=(temp-273.15)*9/5+32;
 
 document.getElementById('temperature').innerHTML=temp.toFixed(2) + " &#8457;";


 //console.log(weatherObject.main.humidity);
document.getElementById('humidity').innerHTML=weatherObject.main.humidity+"%";
 
 //console.log(weatherObject.wind.speed);
 document.getElementById('windspeed').innerHTML=weatherObject.wind.speed + " mph"





 //temp is declared earlier
 let f;
let speed=weatherObject.wind.speed;
 
if(temp <= 50 && speed >= 3){
  //f=35.74+0.6215t-35.75s0.16+0.4275ts0.16

f=35.74+.6215*temp-35.75*Math.pow(speed,.16)+.4275*temp*Math.pow(speed,.16)
  //console.log(f);
document.getElementById("windF").innerHTML = f.toFixed(2) + " &#8457;";

} else {
   document.getElementById("windF").innerText = "N/A" 

}




 //main.humidity
 //main.temp
 //wind.speed




  });