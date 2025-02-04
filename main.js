 // scroll effekt för att ändra navbarens bakgrund
 const navbar = document.querySelector('.navbar');

 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });