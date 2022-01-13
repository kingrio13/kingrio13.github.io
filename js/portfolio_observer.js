
const sliders = document.querySelectorAll(".featured-wrapper");
const featureimage = document.querySelectorAll(".featured-image");

const skills = document.querySelectorAll("ul.webskills li");
const myskills_title = document.querySelectorAll("#myskills .container span");
const contactus_linked = document.querySelectorAll(".contactus_linked ul li");

const appearOptions = {
  threshold: 0,
  rootMargin: "10px"
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
      appearOnScroll.unobserve(entry.target);
    }


    if(entry.target.dataset.delay){
        entry.target.style.opacity= '1';
        entry.target.style.transition= `opacity ${entry.target.dataset.delay} ease-in`;
    }

  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

featureimage.forEach(featureimage => {
    appearOnScroll.observe(featureimage);
  });


  skills.forEach(skills => {
    appearOnScroll.observe(skills);
  });

  myskills_title.forEach(myskills_title => {
    appearOnScroll.observe(myskills_title);
  });


contactus_linked.forEach(contactus_linked => {
    appearOnScroll.observe(contactus_linked);
  });