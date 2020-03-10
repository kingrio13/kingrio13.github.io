const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
fetch(forecastURL)
  .then((responseforecast) => responseforecast.json())
  .then((forecastObject) => {

    console.table(forecastObject);
    console.log(forecastObject);

    
   let x=0;
    for(i in forecastObject.list){
      let newdate= new Date(forecastObject.list[i].dt_txt);
      //console.log(newdate.getHours());
      //18:00
      if(newdate.getHours()==18){
        let elementid="forcastweather"+x;
        let imageid="forcastimg"+x;
      

        //console.log(forecastObject.list[i].weather[0].icon);

        //icon
        //http://openweathermap.org/img/wn/10d@2x.png


        let imagelink=`http://openweathermap.org/img/wn/${forecastObject.list[i].weather[0].icon}@2x.png`;

        document.getElementById(imageid).setAttribute('src', imagelink);
        document.getElementById(imageid).setAttribute('alt', forecastObject.list[i].weather[0].description);
        
        //temperature
        document.getElementById(elementid).innerHTML=forecastObject.list[i].main.temp + "&#8457;";
        //console.log(forecastObject.list[i].main.temp + "object#"+ i);
        x++;
      }

    }


    
  });