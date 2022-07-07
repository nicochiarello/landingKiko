let $navbarBtn = document.querySelector(".bx");
let $navbarMobile = document.querySelector(".navbar-mobile");

$navbarBtn.addEventListener("click",()=>{
    $navbarMobile.classList.toggle("active")
})