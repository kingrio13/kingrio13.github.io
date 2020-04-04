const requestURL = '/salmonriver/json/ourteam.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (teamObject) {
    console.table(teamObject); 

    const team = teamObject['team'];
    for (i in team) {

      
      let div = document.createElement('div');
      let h2 = document.createElement('h2');
      let span = document.createElement('span');
      let image= document.createElement('img');
      let divcontent=document.createElement('div')


      image.setAttribute('src',team[i].imageurl);
      image.setAttribute('alt', team[i].name);
      h2.textContent = team[i].name + ' ' + team[i].lastname;
      span.textContent=team[i].position;
      divcontent.textContent=team[i].description;


      div.appendChild(image);
      div.appendChild(h2);
      div.appendChild(span);
      div.appendChild(divcontent);
      document.querySelector('section.our-teams').appendChild(div);
     

    }

  });


 
