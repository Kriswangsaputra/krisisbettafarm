let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

const btnTogle = document.getElementById('navbar-togle');
const navMenu = document.getElementById('nav-list-id');
const navContainer = document.getElementById('navbar-container-id');

btnTogle.addEventListener('click',() =>{
  navMenu.classList.toggle('show');
  navContainer.classList.toggle('show');
});