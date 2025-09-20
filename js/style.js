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

// overlay
const title = document.querySelector('.galery-title');

document.querySelector('.galery').addEventListener('mouseenter', function(){
  title.style.display = "block";
})
document.querySelector('.galery').addEventListener('mouseleave', function(){
  title.style.display = "none";
})