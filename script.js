const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
    // menu.classList.toggle("menu")
}


menuToggler.addEventListener("click",openMenu)