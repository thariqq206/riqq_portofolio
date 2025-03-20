window.onload = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.classList.add('visible');
    });
  };

const modal = document.querySelector(".modal");
const priviews = document.querySelectorAll(".galery img");
const original = document.querySelector(".full.img");
const caption = document.querySelector(".caption");

