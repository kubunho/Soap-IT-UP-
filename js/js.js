
const music = document.querySelector(".music");
const board = document.querySelector(".board");
const sven = document.querySelector(".sven");
const button = document.querySelector(".button");
const soap = document.querySelector(".soap");
const wall = document.querySelector(".wall");
const svenSawYou = document.querySelector(".svenSawYou");
const timer = document.querySelector(".timer");
const svenTalk = document.querySelector(".svenTalking");
const loseFace = document.querySelector(".svenFace");
const resultAfterTimeOut = document.querySelector(".resultAfterTimeOut");
const beforeStart = document.querySelector(".beforeStart");
const musicOnOff = document.querySelector(".musicPlay");
const uWin = document.querySelector(".uWin");
const nextLevelButton = document.querySelector(".nextLevel");
const jonny = document.querySelector(".jonny");
const crySven = document.querySelector(".cryinSven");
const secondStage = document.querySelector(".secondStage");
const titanic = document.querySelector(".titanic");
const subtitles = document.querySelector(".endSubtitles")


let svenMaxPixels = 700;
let speed = -4;
let soapSpeed = 5;
let svenIsWatching= false;
let checkTimeOut = true;
let soapMaxPixels = 648;
let lost = false;
let win = false;
let changeSvenMoves;
svenTalk.style.display = "none";
loseFace.style.display = "none";
musicOnOff.style.backgroundColor = "green";
nextLevelButton.style.display = "none";

musicOnOff.addEventListener("click", function () {
   console.log(musicOnOff.value);
    if(musicOnOff.value == "on"){
        music.pause();
        musicOnOff.value = "off";
        musicOnOff.style.backgroundColor = "red";
    }else{
        music.play();
        musicOnOff.value = "on";
        musicOnOff.style.backgroundColor = "green";
    }

});


music.loop = true;
music.currentTime =1;


    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "gray";

    });
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#8c2020";

    });


    button.addEventListener("click", function () {
        music.play();
        beforeStart.style.display = "none";

        let counter = 60;
        let clock = setInterval(function () {
            if (counter >= 0) {
                timer.innerHTML = counter;


            }
            if (counter === 0) {
                soap.style.display = "none";
                board.style.background = "black";
                wall.style.display = "none";
                sven.style.display = "none";
                svenTalk.style.display = "none";
                clearInterval(counter);
                clearInterval(clock);
                music.pause();
                setTimeout(() => {
                    jonny.play();
                    loseFace.style.display = "block";

                    resultAfterTimeOut.innerHTML = "Sven nie pyta. Sven bierze co mu się należy";
                },1000);

            }
            counter--;
        }, 1000);

        let gameInterval =setInterval(() => {
            if (counter >0) {
                svenTalk.style.display = "none";
                if (svenMaxPixels == 616) {
                    svenTalk.style.display = "block";
                    svenIsWatching = true;
                } else {
                    svenIsWatching = false;
                }
            }
            if(svenIsWatching == true && soapMaxPixels != 648){
                music.pause();
                lost = true;
                board.style.background = "black";
                wall.style.display = "none";
                sven.style.display = "none";
                svenTalk.style.display = "none";
                svenSawYou.innerHTML = "Wygrałes!";
                clearInterval(clock);
                setTimeout(() =>{
                    crySven.play();
                    loseFace.style.display = "block";
                    resultAfterTimeOut.innerHTML = "Noc ze Svenem!";
                },1500);



            }else if (soapMaxPixels == 445){
                nextLevelButton.style.display = "block";
                music.pause();
                clearInterval(gameInterval);
                clearInterval(clock);
                uWin.innerHTML = "Tym razem ci się udało, ale wiedz, że Sven tak łatwo nie odpuści...";
                board.style.background = "black";
                wall.style.display = "none";
                sven.style.display = "none";
                svenTalk.style.display = "none";
                win = true;
                console.log("win");
                if (win == true){
                nextLevelButton.addEventListener("click", function () {
                    secondStage.style.display = "block";
                    nextLevelButton.style.display = "none";
                    soap.style.display = "none";
                    uWin.style.display = "none";
                    secondStage.innerHTML = "Juz niedługo druga faza gry. Cela dzielona ze Svenem.";
                    setTimeout(() => {
                        secondStage.innerHTML = "Prycza wydaje się być wygodna...";
                    },2300);
                    setTimeout(() => {
                        secondStage.innerHTML = "Lecz Sven tylko czeka...";
                    },4300);
                    setTimeout(() => {
                        secondStage.innerHTML = "Az zaśniesz przodem do ściany...";
                    },6300);
                    setTimeout(() => {

                        secondStage.innerHTML = "Podziękowania:";
                    },8300);
                    setTimeout(() => {
                        titanic.play();
                        subtitles.style.display = "block";
                        subtitles.innerHTML = "Prowadzącym...";
                    },2500*5);
                    setTimeout(() => {
                        subtitles.innerHTML = "Mentorowi Mateuszowi...";
                    },2500*6);
                    setTimeout(() => {
                        subtitles.innerHTML = "Pracownikom CodersLab...";
                    },2500*7);
                    setTimeout(() => {
                        subtitles.innerHTML = "Kolegom i koleżance z grupy";
                    },2500*8);
                    setTimeout(() => {
                        subtitles.innerHTML = "Grafikom: Damianowi , Patrykowi i Białemu";
                    },2500*9);
                    setTimeout(() => {
                        subtitles.style.display = "none";
                        secondStage.innerHTML = "KONIEC";

                    },2500*10);


                });
                }




            }
            if (checkTimeOut == true) {
                checkTimeOut = false;

               changeSvenMoves = setTimeout(() => {

                    speed = speed * (-1);


                    let svenMoves = setInterval(() => {
                        svenMaxPixels -= speed;
                        sven.style.left = svenMaxPixels + "px";
                        if (svenMaxPixels <= 616) {
                            if (svenMaxPixels < 616) {
                            } else if (svenMaxPixels == 616) {
                            }
                            clearInterval(svenMoves);
                            checkTimeOut = true;
                        } else if (svenMaxPixels >= 700) {
                            clearInterval(svenMoves);
                            checkTimeOut = true;
                        }
                    }, Math.random() *50 + 20);
                }, Math.random() * 5000 + 1000);
            }

        }, 50);
        window.addEventListener("keyup", function (e) {

            if (e.which == "90") {
                if (lost == false || win == true) {
                    soapMaxPixels -= soapSpeed;
                    soap.style.top = soapMaxPixels + "px";
                    if (soapMaxPixels < 445) {
                        soapMaxPixels = 445;
                    }

                    } else {
                        console.log("nie moszna juz");
                    }

            } else if (e.which == "88") {
                if (lost == false || win == true) {
                    soap.style.top = 648 + "px";
                    soapMaxPixels = 648;
                } else {
                    console.log("nie moszna juz");
                }

            }
        });


    });








