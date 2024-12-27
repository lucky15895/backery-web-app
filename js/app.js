const toggleBtn = document.querySelector("#toggleBtn");
const menu = document.querySelector("#menu");
const bgWhiteNav = document.querySelector(".bg-white-nav");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
toggleBtn.addEventListener(
    "click",
    function(){
        toggleBtn.classList.toggle("fa-times");
        toggleBtn.classList.toggle("fa-bars");
        menu.classList.toggle("open-menu");
    }
)

document.addEventListener(
    "scroll",
    function(event){
        console.clear();
        console.log(event);
        if(window.scrollY > 60){
            bgWhiteNav.style.opacity = 1;
            nav.classList.add("floating-nav");
        }
        else{
            bgWhiteNav.style.opacity = "";
            // nav.style.position = "";
            nav.classList.remove("floating-nav");
        }
    }
)