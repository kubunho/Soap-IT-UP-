

const board = document.querySelector(".board");
const sven = document.querySelector(".sven");
const button = document.querySelector(".button");
const soap = document.querySelector(".soap");
const wall = document.querySelector(".wall");
const result = document.querySelector(".result");
const timer = document.querySelector(".timer");
const gotIt = document.querySelector(".result");
const svenTalk = document.querySelector(".svenTalking");
const loseFace = document.querySelector(".svenFace");
const resultAfterTimeOut = document.querySelector(".resultAfterTimeOut");
const sadSven = document.querySelector(".sadSven");


let getStarted = false;
let svenMaxPixels = 700;
let speed = -4;
let soapSpeed = 20;
let svenMinPixels = 616;
let svenIsWatching= false;
let checkTimeOut = true;
let soapMaxPixels = 648;
let lost = false;
let changeSvenMoves;
let sadSvenMaxPixels = 629;
svenTalk.style.display = "none";
loseFace.style.display = "none";
sadSven.style.display = "none";

    button.addEventListener("click", function () {

        let counter = 60;
        let clock = setInterval(function () {
            if (counter >= 0) {
                timer.innerHTML = counter;


            }
            if (counter === 0) {

                clearInterval(counter);
            }
            counter--;
        }, 1000);


        let gameInterval =setInterval(() => {
            svenTalk.style.display = "none";
            if(svenMaxPixels == 616){
                svenTalk.style.display = "block";
                svenIsWatching = true;
            }else{
                svenIsWatching = false;
            }
            if(svenIsWatching == true && soapMaxPixels != 648){
                lost = true;
                board.style.background = "black";
                wall.style.display = "none";
                sven.style.display = "none";
                svenTalk.style.display = "none";
                result.innerHTML = "Wygrałes!";
                clearInterval(clock);
                //clearInterval(svenGoesLeft);
                setTimeout(() =>{
                    console.log("dziaua tajmałt");
                    loseFace.style.display = "block";
                    resultAfterTimeOut.innerHTML = "Noc ze Svenem!";

                },1500);



            }else if (soapMaxPixels == 445){
                clearInterval(gameInterval);
                clearInterval(clock);
                sven.style.display = "none";
                svenTalk.style.display = "none";
                let sadSvenMoves = setInterval(() => {
                    sadSven.style.display = "block";
                    sadSvenMaxPixels = speed;
                    sadSven.style.left = sadSvenMaxPixels + "px";
                    if(sadSvenMaxPixels <= 476) {
                        clearInterval(sadSvenMaxPixels);
                        console.log("hehehe");
                    }

                    },50);

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
                                console.log("no weź mydełko moja walentynko");
                            }
                            clearInterval(svenMoves);
                            checkTimeOut = true;
                        } else if (svenMaxPixels >= 700) {
                            clearInterval(svenMoves);
                            checkTimeOut = true;
                        }
                    }, 50);
                }, Math.random() * 5000 + 1000);
            }

        }, 50);
        window.addEventListener("keyup", function (e) {

            if (e.which == "90") {
                soapMaxPixels -= soapSpeed;
                soap.style.top = soapMaxPixels + "px";
                if (soapMaxPixels < 445) {
                    soapMaxPixels = 445;
                    console.log("brawo");
                }

                console.log("dziala");
            } else if (e.which == "88") {
                soap.style.top = 648 + "px";
                soapMaxPixels = 648;

            }
        });


    });








