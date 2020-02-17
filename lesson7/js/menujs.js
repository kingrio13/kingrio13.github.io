const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);



function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
  hambutton.classList.toggle("changex");
  
  if (hambutton.classList.contains("changex")) {
    hambutton.innerHTML="X";
  } else {
    hambutton.innerHTML="&#9776; Menu";
  }
  
  

}
