document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar");
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Hero slider
  let slides = document.querySelectorAll(".slide");
  let current = 0;
  function showSlide(index){
    slides.forEach((s,i)=>{s.classList.remove("active"); if(i===index) s.classList.add("active");});
  }
  function nextSlide(){current=(current+1)%slides.length; showSlide(current);}
  setInterval(nextSlide, 4000);

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  window.addEventListener("scroll", () => {
    let winHeight = window.innerHeight;
    reveals.forEach(el => {
      let top = el.getBoundingClientRect().top;
      if(top < winHeight - 50){el.classList.add("active");}
    });
  });
});
