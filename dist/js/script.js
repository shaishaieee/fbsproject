const burgir = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__navm");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    menu.classList.toggle("open");
});
