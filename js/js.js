const sven = document.querySelector(".sven");
const button = document.querySelector(".button");
const soap = document.querySelector(".soap");
const wall = document.querySelector(".wall");
const result = document.querySelector(".result");
const timer = document.querySelector(".timer");

let getStarted = true;
let svenMaxPixels = 700;
let speed = -4;
let soapSpeed = 2;
let svenMinPixels = 616;
let svenIsWatching= true;
let checkTimeOut = true;
let soapMaxPixels = 659;

button.addEventListener("click",function () {


    window.addEventListener("keydown",function (e) {



        if(e.which == "38"){
            let soapGoesUp =setInterval(() => {
                soapMaxPixels -= soapSpeed;
                soap.style.top = soapMaxPixels + "px";
                if(soapMaxPixels > 449) {
                    clearInterval(soapGoesUp);
                }else if(soapMaxPixels <450 && svenIsWatching == true) {
                    soap.style.top =659 + "px";
                }else if (soapMaxPixels = 450) {
                    console.log("win kurła");
                }




            },100);
            console.log("dziala");
        }

        });




    let counter = 60;
    setInterval(function () {

        if (counter >= 0){
            timer.innerHTML = counter;


        }
        if (counter === 0) {
            alert ('game over. heheh');
            clearInterval(counter);
        }
        counter--;
    },1000);


    setInterval(() => {
            if(checkTimeOut == true) {
                checkTimeOut = false;

                setTimeout(() => {
                    speed = speed * (-1);

                    let svenGoesLeft = setInterval(() => {
                        svenMaxPixels -= speed;
                        sven.style.left = svenMaxPixels + "px";
                        if (svenMaxPixels <= 616 || svenMaxPixels >= 700) {
                            clearInterval(svenGoesLeft);
                            svenIsWatching = true;
                            checkTimeOut = true;
                        }
                    }, 50);
                }, Math.random() * 5000 + 1000);
            }

    }, 50);

});
    console.log("cyk");







