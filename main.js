 // scroll effekt för att ändra navbarens bakgrund
 const navbar = document.querySelector('.navbar');

 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });

 const button1 = document.getElementById("btn1");
 const button2 = document.getElementById("btn2");

 document.querySelectorAll(".button").forEach(button => {
    console.log(button.innerHTML);
 });