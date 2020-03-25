const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c000215b640f5b08daddcd029b6207aa";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    //console.log(weathertemp);
    //console.log(weathertemp.main.temp);
    //document.getElementById('current-temp').innerHTML=weathertemp.main.temp;

    let temp=(weatherObject.main.temp-273.15)*9/5+32;
    document.getElementById('current-temp').innerHTML=weatherObject.main.temp;


    const imagesrc = 'https://openweathermap.org/img/w/' + weatherObject.weather[0].icon + '.png';  // note the concatenation
    const desc = weatherObject.weather[0].description;  // note how we reference the weather array

    
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);




  });