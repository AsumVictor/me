const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("hidden")
}


menuToggler.addEventListener("click",openMenu)