let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let buttons = ["red", "yellow", "green", "purple"];

document.addEventListener("keypress", function () {

    if (started == false) {
        console.log("game is  started");
        started = true;

        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomInd = Math.floor(Math.random() * 3);
    let randomColor = buttons[randomInd];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(ind) {

    if (userSeq[ind] === gameSeq[ind]) {
        if (userSeq.length == gameSeq.length) {
            //levelUp();
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score Is:<b>${level}<b> <br> press any key to start`;
        let body=document.querySelector("body");
        body.style.backgroundColor="#FF0000";
        h2.style.color="#FF0000";
        setTimeout(function(){
            body.style.backgroundColor="#2C2D2D";
        },150);
    
        setTimeout(function(){
            h2.style.color="#FF0000";
        },150);

        reSet()
    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reSet() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}