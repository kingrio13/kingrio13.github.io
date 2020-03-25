


 //5604473 - preston
 //5585010 - Fish Haven
 //5607916 - Soda Spring


 var forecastURL;
 switch(doctitle.toLowerCase()) {
  case "preston":
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
    console.log("preston");
   break;
  case "fish haven":
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=c000215b640f5b08daddcd029b6207aa";
   console.log("Fish Haven");
   break;
  case "soda springs":
    console.log("Soda Spring");
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=c000215b640f5b08daddcd029b6207aa";
  break;

}

//const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
fetch(forecastURL)
  .then((responseforecast) => responseforecast.json())
  .then((forecastObject) => {

   // console.table(forecastObject);
    //console.log(forecastObject);

    
   let x=0;
    for(i in forecastObject.list){
      let newdate= new Date(forecastObject.list[i].dt_txt);
      //console.log(newdate.getHours());
      //18:00
      if(newdate.getHours()==18){
        //console.log(forecastObject.list[i].weather[0].icon);

        //icon
        //http://openweathermap.org/img/wn/10d@2x.png


        let imagelink=`http://openweathermap.org/img/wn/${forecastObject.list[i].weather[0].icon}@2x.png`;

        document.getElementById(`forcastimg${x}`).setAttribute('src', imagelink);
        document.getElementById(`forcastimg${x}`).setAttribute('alt', forecastObject.list[i].weather[0].description);
        
        //temperature
        let temp=(forecastObject.list[i].main.temp-273.15)*9/5+32;
        document.getElementById(`forcastweather${x}`).innerHTML=temp.toFixed(2) + "&#8457;";
        //console.log(forecastObject.list[i].main.temp + "object#"+ i);
        x++;
      }

    }


    
  });