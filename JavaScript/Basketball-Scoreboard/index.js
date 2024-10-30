let scoreHomeEl = document.getElementById("home-score-el");
let scoreGuestEl = document.getElementById("guest-score-el");

// Starting scores for both teams
let countHome = 0;
let countGuest = 0;

// Home Points
function onePointHome() {
    countHome += 1;
    scoreHomeEl.innerText = countHome;
    console.log("+1 Home")
}

function twoPointsHome() {
    countHome += 2;
    scoreHomeEl.innerText = countHome;
    console.log("+2 Home")
}

function threePointsHome() {
    countHome += 3;
    scoreHomeEl.innerText = countHome;
    console.log("+3 Home")
}

// Guest Points
function onePointGuest() {
    countGuest += 1;
    scoreGuestEl.innerText = countGuest;
    console.log("+1 Guest")
}

function twoPointsGuest() {
    countGuest += 2;
    scoreGuestEl.innerText = countGuest;
    console.log("+2 Guest")
}

function threePointsGuest() {
    countGuest += 3;
    scoreGuestEl.innerText = countGuest;
    console.log("+3 Guest")
}