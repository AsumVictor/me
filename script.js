const menuToggler = document.querySelector(".hamburger");
const menu = document.querySelector("#menu");

function openMenu(){
    menuToggler.classList.toggle("open")
    menu.classList.toggle("showMenu")
}


menuToggler.addEventListener("click",openMenu)