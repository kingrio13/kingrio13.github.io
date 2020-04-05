const hambutton = document.querySelector(".menu-wrapper");
hambutton.addEventListener("click", toggleMenu, false);
const btnham= document.querySelector('btn-ham');


function toggleMenu() {
  //document.querySelector(".menu-wrapper").classList.toggle("responsive");
  hambutton.classList.toggle("isactive");


}
