
const homegallery = document.querySelectorAll(".home-gal");
const heroBannerApper = document.querySelector(".hero-banner")
const headerNavigation=document.querySelector("header");
const headerMenu=document.querySelector(".menu-wrapper");

const fadeinObserver = document.querySelectorAll(".fade-in");



const appearHeader = {
    threshold: 0,
    rootMargin: "-150px"
  };

  const heroObserver = new IntersectionObserver(function(
    entries,heroObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        headerNavigation.classList.add("header-out");
        headerMenu.classList.add("header-out");
      } else {
        headerNavigation.classList.remove("header-out");
        headerMenu.classList.remove("header-out");
      }
    });
  },
  heroBannerApper);


  heroObserver.observe(heroBannerApper);







// this is for the home gallery
const appearOptions = {
    threshold: 0,
    rootMargin: "-150px"
  };
  
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
      entry.target.removeAttribute('data-src');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

homegallery.forEach(homegallery => {
  appearOnScroll.observe(homegallery);
});









// this is anyone you want to observer
const appearAllOptions = {
    threshold: 0,
    rootMargin: "-150px"
  };
  
const appearOnAllScroll = new IntersectionObserver(function(entries, appearOnAllScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
        entry.target.classList.add("appear");
        appearOnAllScroll.unobserve(entry.target);
    }
  });
},
appearAllOptions);

fadeinObserver.forEach(fadeinObserver => {
    appearOnAllScroll.observe(fadeinObserver);
  });
