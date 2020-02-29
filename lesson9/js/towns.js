const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        townNamecheck=towns[i].name;
        
        if(townNamecheck=="Fish Haven" || townNamecheck=="Preston" || townNamecheck=="Soda Springs"){

        let section = document.createElement('section');

        
        let townName= document.createElement('h2');
        let townMotto= document.createElement('span');
        let yearFounded= document.createElement('span');
        let currentPopulation= document.createElement('span');
        let averageRainfall= document.createElement('span');


        let townImg= document.createElement('img');


        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        currentPopulation.textContent ="Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Anual Rain Fall: " +towns[i].averageRainfall;
        

        let alttext=towns[i].photo;  
        // since there is no image url i will use default for now
        townImg.setAttribute('src', "images/gallery/placeholder.png"); 
        townImg.setAttribute('alt',alttext);


        section.appendChild(townName);
        townMotto.setAttribute('class',"townmotto");
        section.appendChild(townMotto);
        section.appendChild(yearFounded);
        section.appendChild(currentPopulation);
        section.appendChild(averageRainfall);
        section.appendChild(townImg);



        document.querySelector('div.towns').appendChild(section);
    }
  
      }
  



});
