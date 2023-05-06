const navEl = document.querySelector(".nav");
const bottomEl = document.querySelector(".bottom");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomEl.offsetTop - navEl.offsetHeight ){
        navEl.classList.add("active");
    }else{
        navEl.classList.remove("active");
    }
});