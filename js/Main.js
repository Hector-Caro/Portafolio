var typed = new Typed('#element', {
  strings: [
    '<i class="info-2">Front-End.</i>', 
    '<i class="info-2">Back-End.</i>'
  ],

  typeSpeed: 50,
  backSpeed: 75,
  loop: true
});


// Experiecia JS
document.addEventListener("DOMContentLoaded", function() {
  const educationBtn = document.getElementById("education-btn");
  const workBtn = document.getElementById("work-btn");
  const educationSection = document.getElementById("education-section");
  const workSection = document.getElementById("work-section");
  
  educationBtn.addEventListener("click", function() {
    educationBtn.classList.add("active");
    workBtn.classList.remove("active");
    educationSection.style.display = "block";
    workSection.style.display = "none";
  });
  
  workBtn.addEventListener("click", function() {
    workBtn.classList.add("active");
    educationBtn.classList.remove("active");
    workSection.style.display = "block";
    educationSection.style.display = "none";
  });
});


// Scroll up function

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

AOS.init();

function activarPanel(){
  const contenedor = document.querySelector(".cont-colores");
  const boton = document.querySelector(".open-panel");


  contenedor.classList.toggle("active");
  boton.classList.toggle("active");
}

var link = document.getElementById("fileCss");

function principal(){
  link.href="css/Style.css";
}

function negro(){
  link.href="css/Style-black.css";
}

