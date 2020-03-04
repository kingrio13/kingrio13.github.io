
const sliders = document.querySelectorAll(".slide-in");


const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};


const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
      entry.target.removeAttribute('data-src');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});