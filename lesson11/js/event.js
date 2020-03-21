const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(eventURL)
  .then((response) => response.json())
  .then((eventObject) => {

    let doctitle=document.title;

    const townsevent = eventObject['towns'];
  //console.log(townsevent);
  
    for(i in townsevent){
      if(townsevent[i].name.toLowerCase()==doctitle.toLowerCase()){
       
        let townEvent = document.createElement('div');
        townEvent.setAttribute('class', 'eventdiv');
        let towntitle= document.createElement('h3');
        towntitle.setAttribute('class', 'eventtowntitle');
        towntitle.textContent=townsevent[i].name + ' Events';

        let ullist=document.createElement('ul');


                  for(x in townsevent[i].events){
                    let lilist=document.createElement('li');
                    lilist.textContent=townsevent[i].events[x];
                    ullist.appendChild(lilist);
                  }//for loop
         townEvent.appendChild(towntitle);       
        townEvent.appendChild(ullist);
        document.querySelector('section.events').appendChild(townEvent);

      }//if statement
    }//forloop



    //Preston
    //Fish Haven
    //Soda Springs



  });