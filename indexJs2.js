// Garvit

// FOR POPULAR LISTS (Right Side) - 
let lists=document.getElementsByClassName("popularColumn_list");
let btns=document.getElementsByClassName("popularColumn_durationContainer_btnContainer");
let currentList=0;

function changeList(moveTo){
    if(moveTo>=lists.length){
        moveTo=0;
    }
    if(moveTo<0){
        moveTo=lists.length-1;
    }

    lists[currentList].classList.toggle("activePopularList");
    btns[currentList].classList.toggle("activeBtn");
    lists[moveTo].classList.toggle("activePopularList");
    btns[moveTo].classList.toggle("activeBtn");
    currentList = moveTo; 
}

document.querySelectorAll(".popularColumn_durationContainer_btnContainer").forEach((bullet, bulletIndex) => {
    bullet.addEventListener("click", () => {
    if (currentSlide !== bulletIndex) {
    changeList(bulletIndex);
    }
});
});