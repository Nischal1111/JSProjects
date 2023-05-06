const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imageEl = document.querySelector(".image");
const imgs = document.querySelectorAll("img");
let timeout;

let currentImg = 1;

next.addEventListener("click", ()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImage();
});
prev.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImage();

});

function updateImage(){
    if(currentImg > imgs.length){
        currentImg = 1;
    } else if(currentImg < 1){
        currentImg = imgs.length;
    }
    imageEl.style.transform=`translateX(-${(currentImg-1) * 500}px)`;
    timeout = setTimeout(()=>{
        currentImg++;
        updateImage();
    },3000)
};
