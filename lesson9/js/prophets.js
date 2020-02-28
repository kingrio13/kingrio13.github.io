const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      let birthdate= document.createElement('span');
      let birthplace= document.createElement('span');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthdate.textContent="Date of Birthdate: "+prophets[i].birthdate;
      birthplace.textContent="Place of Birth: "+prophets[i].birthplace;
      //birthdate
      //birthplace
      let alttext= prophets[i].name + ' ' + prophets[i].lastname + "-" + prophets[i].order;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt',alttext);

      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);
     

    }

  });


 
