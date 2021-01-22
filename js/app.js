const containerSlide = document.querySelector(".container__slide");
const slideImg = document.querySelectorAll(".container__slide img");

//buttons
const btnIzquierdo = document.querySelector("#prevButton");
const btnDerecho = document.querySelector("#nextButton"); 

//size
var cont = 1;
const size = slideImg[0].clientWidth;

containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";

//Listeners
btnDerecho.addEventListener('click', ()=>{
    if(cont >= slideImg.length - 1)return;
    containerSlide.style.transition = "transform 0.4s ease-in-out";
    cont++;
    containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
});

btnIzquierdo.addEventListener('click', ()=>{
    if(cont <= 0)return;
    containerSlide.style.transition = "transform 0.4s ease-in-out";
    cont--;
    containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
});

containerSlide.addEventListener('transitionend', ()=>{
    if(slideImg[cont].id === "lastClone"){
        containerSlide.style.transition = "none";
        cont = slideImg.length - 2;
        containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
    }

    if(slideImg[cont].id === "firstClone"){
        containerSlide.style.transition = "none";
        cont = slideImg.length - cont;
        containerSlide.style.transform = "translateX(" + (-size * cont) + "px)";
    }
});