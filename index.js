let homeScore = document.getElementById("score-home-text")
let guestScore = document.getElementById("score-guest-text")

function homeAdd1 (){
    homeScore.textContent = Number(homeScore.textContent) + 1
}
function homeAdd2(){
    homeScore.textContent = Number(homeScore.textContent) + 2
}
function homeAdd3(){
    homeScore.textContent = Number(homeScore.textContent) + 3
}
function guestAdd1(){
    guestScore.textContent = Number(guestScore.textContent) + 1
}
function guestAdd2(){
    guestScore.textContent = Number(guestScore.textContent) + 2
}
function guestAdd3(){
    guestScore.textContent = Number(guestScore.textContent) + 3
}

function newGame(){
    homeScore.textContent = 0
    guestScore.textContent = 0
}