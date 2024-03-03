
//play butonuna tıklanma eventi
const play = document.querySelector(".fa-play");
play.addEventListener("click",Clicked);

const audioControl = document.querySelector(".audioControl");

console.log(audioControl)
//console.log(audioControl.play())
//audioControl.stop
audioControl.play;

let isActive = true;
function Clicked(){
    isActive = !isActive;
    if(isActive == false){
        play.className = "fa-solid fa fa-play"
        console.log("play")
        audioControl.play();
        
    }
    else{
        play.className = "fa-solid fa fa-pause"
        console.log("pause")
        audioControl.pause();
    }
}


