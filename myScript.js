const menu = document.querySelector(".toggle-menu");
const navLinks =  document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

menu.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");
});