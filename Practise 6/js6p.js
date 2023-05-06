const btnEl = document.querySelector(".btn");
const trailerEl = document.querySelector(".trailer");
const closeEl = document.querySelector(".close");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", ()=>{
    trailerEl.classList.remove("active");
    videoEl.pause();
    videoEl.currentTime=0;
});
closeEl.addEventListener("click",()=>{
    trailerEl.classList.add("active");
    videoEl.pause();
});