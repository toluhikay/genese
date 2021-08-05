const menuIcon = document.querySelector (".burger-menu");
const navbar = document.querySelector(".container");

menuIcon.addEventListener("click", ()=>{
    navbar.classList.toggle(".change");
})