
//play butonuna tıklanma eventi
const play = document.querySelector(".fa-play");
play.addEventListener("click",Clicked);


//audio controller seçildi
const audioControl = document.querySelector(".audioControl");

//input range aralığını seçelim
const rangeInput = document.querySelector(".rangee");
//rangeInput.value değeri tutuyor.


//timer tutucu
const timer = document.getElementById("timer");

//timer2 tutucu
const timer2 = document.getElementById("timer2");


//timer için sürelerin düzgün ayarlanması!
const deneme = audioControl.currentTime

//ses arttırma eventi
const volumeHight = document.querySelector(".fa-volume-high");

//ses azaltma eventi
const volumeOff = document.querySelector(".fa-volume-off");



let isActive = true;
function Clicked(){
    isActive = !isActive;


    //toplam içerik süre hesaplamaları
    const fullSoundTime = audioControl.duration
    const fullDakika = Math.floor(fullSoundTime / 60);
    const fullSaniye = Math.floor(fullSoundTime % 60 );

    if(isActive == false){
        play.className = "fa-solid fa fa-play"
        audioControl.play();


        //ses arttırma azaltma işlemleri
        volumeOff.addEventListener("click",()=>{
                audioControl.volume -= 0.1;
        })
        volumeHight.addEventListener("click",()=>{
                audioControl.volume += 0.1;
        })



        //Müsiğin full süresini içeriğe atalım!
        if(fullDakika<10)
        {
            timer2.textContent = `0${fullDakika}:${fullSaniye}`;
        }
        else{
            timer2.textContent = `${fullDakika}:${fullSaniye}`;
        }
        


        setInterval(() => {

            //çalarken geçen süre denklemleri
            const dakika = Math.floor(audioControl.currentTime / 60)
            const saniye = Math.floor(audioControl.currentTime % 60)

            timer.textContent = `${dakika}:${saniye}`;
            if(saniye<10){
                timer.textContent =timer.textContent = `0${dakika}:0${saniye}`;
            }
            else if(dakika<10){
                timer.textContent =timer.textContent = `0${dakika}:${saniye}`;
            }


            if(audioControl.currentTime>=audioControl.duration){
                clearInterval()
            }
            else{
                rangeInput.value = (audioControl.currentTime/audioControl.duration) * 100

            }
        }, 1);

        
        
    
    }
    //Müsic durdurmak için
    else{
        play.className = "fa-solid fa fa-pause"
        audioControl.pause();
    }
}

