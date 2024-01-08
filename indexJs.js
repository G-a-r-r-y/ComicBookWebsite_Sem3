// Garvit

// FOR CAROUSEL - 

let slides=document.getElementsByClassName("carousel_slide");
let navLinks=document.getElementsByClassName("dot");
let currentSlide=0;

//For Arrow btns
document.getElementById("carousel_rightBtn").addEventListener("click", ()=>{
    changeSlide(currentSlide+1);
});

document.getElementById("carousel_leftBtn").addEventListener("click", ()=>{
    changeSlide(currentSlide-1);
});

//Function used for both arrow and radio btns - 
function changeSlide(moveTo){
    if(moveTo>=slides.length){
        moveTo=0;
    }
    if(moveTo<0){
        moveTo=slides.length-1;
    }

    slides[currentSlide].classList.toggle("activeSlide");
    navLinks[currentSlide].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("activeSlide");
    navLinks[moveTo].classList.toggle("activeDot");
    currentSlide = moveTo; 
}

//For lower radio btns - 
document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
    bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
    changeSlide(bulletIndex);
    }
});
});

//For Automatic feature 
window.onload=setInterval(function(){
    changeSlide(currentSlide+1)
},10000);


// ------------------------------------------------------------------------------------------------------------------------

// // FOR POPULAR LISTS (Right Side) - 
// let lists=document.getElementsByClassName("popularColumn_list");
// let btns=document.getElementsByClassName("popularColumn_durationContainer_btnContainer");
// let currentList=0;

// function changeList(moveTo){
//     if(moveTo>=currentList.length){
//         moveTo=0;
//     }
//     if(moveTo<0){
//         moveTo=currentList.length-1;
//     }

//     lists[currentList].classList.toggle("activePopularList");
//     btns[currentList].classList.toggle("activeBtn");
//     lists[moveTo].classList.toggle("activePopularList");
//     btns[moveTo].classList.toggle("activeBtn");
//     currentList = moveTo; 
// }

// document.querySelectorAll(".popularColumn_durationContainer_btnContainer").forEach((bullet, bulletIndex) => {
//     bullet.addEventListener("click", () => {
//     if (currentSlide !== bulletIndex) {
//     changeList(bulletIndex);
//     }
// });
// });