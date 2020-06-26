
const hambutton = document.querySelector("#showemail");
hambutton.addEventListener("click", toggleForm, false);



function toggleForm() {
  document.querySelector(".navigation").classList.toggle("responsive");
  hambutton.classList.toggle("changex");
  
  if (hambutton.classList.contains("changex")) {
    hambutton.innerHTML="X";
  } else {
    hambutton.innerHTML="&#9776; Menu";
  }
  
  

}

