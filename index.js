let imagineros = ['./imaginaros/IMG_3271.JPG','./imaginaros/IMG_3207.JPG','./imaginaros/IMG_3288.JPG'];
let activeIndex = 0;
let time = 1000;
let imageirnoSliderinoElementerino = document.querySelector(".imagerino-sliderino");

console.log(imagineros[0]);

function changerinoSliderino(){
    if (this.className === 'prawerinio') {
        activeIndex+=1;
    } else {
        activeIndex-=1;
    }
    if (activeIndex < 0) activeIndex = imagineros.length-1;
    else if (activeIndex == imagineros.length) activeIndex =0;
    console.log("Activindex: " + activeIndex);
    imageirnoSliderinoElementerino.src = imagineros[activeIndex];
}
changerinoSliderino();

let buttonesChangerones = document.getElementsByTagName("button");
for (let i = 0; i <buttonesChangerones.length; i++) {
    buttonesChangerones[i].addEventListener("click", changerinoSliderino);
}

function getterinoPositionerino(){
    // console.log(window.pageYOffset);
}
window.addEventListener("scroll", getterinoPositionerino);
// function switcherinoToNexterino () {
//     imageirnoSliderinoElementerino.src = imagineros[activeIndex];
//     if(activeIndex == (imagineros.length-1)){
//         activeIndex=0

//     } else {
//         activeIndex++;
//     }
//     console.log(imageirnoSliderinoElementerino);
//     console.log("Current activeIndex value " + activeIndex);
//     setTimeout(switcherinoToNexterino, time);
// }
// switcherinoToNexterino();

// function showerinoImagerino() {
//     let i = 0, length = imagineros.length;
//     for (;i < length; i++) {
//         let img = new Image();
//         img.src = imagineros[i];
//         img.style.width = '400px';
//         document.getElementById("imagineros-listeros").appendChild(img);
//     }
// }
// showerinoImagerino();