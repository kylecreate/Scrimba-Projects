let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

///////////////
// // First Challenge (Creating a myAge variable)
// let myAge = 29;
// console.log(myAge);
///////////////

///////////////
// // Second Challenge (Human age to Dog age)
// let myAge = 29;
// let humanDogRatio = 7;

// myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);
///////////////

///////////////
// // Third Challenge (Adding and Subtracting points)
// let bonusPoints = 50;
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
///////////////

///////////////
// // Fourth Challenge (Function to call 42)
// function calling42() {
//     console.log(42)
// }
// calling42()
///////////////

///////////////
// // Fifth Challenge (Adding different variables in a function)
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }
// logLapTime();
///////////////

///////////////
// // Sixth Challenge (Increment the variable by 1 3x)
// let lapsCompleted = 0;

// lapsCompleted++;
// lapsCompleted++;
// lapsCompleted++;
// console.log(lapsCompleted);
///////////////

///////////////
// // Race Car Game
// function countDown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// Setting up the race 🏎 🏎 🏎

// countDown()

// Go! 🏁
// Players are running the race 🏎
// Race is finished

// Get ready for a new race 🏎 🏎 🏎
// countDown()
///////////////