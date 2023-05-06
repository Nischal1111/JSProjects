const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector(".button");
const popupEl = document.querySelector(".popup");
const closeEl = document.querySelector(".close");

buttonEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupEl.classList.remove("active");
});

closeEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupEl.classList.add("active");
});