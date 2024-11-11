//////////////////////
// // Challenge #1
// // Let & Const

// SETTING THE STAGE
// const player = "Per"          // let -> const
// const opponent = "Nick"       // let -> const
// const game = "AmazingFighter" // let -> const

// let points = 0
// let hasWon = false // const -> let

// PLAYING THE GAME
// points += 100
// hasWon = true

// ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

// Go through all variables and decide if they should be let or const
// Change the console logs to use template strings instead of double quotes
//////////////////////

//////////////////////
// // Challenge #2
// // Log out items in an array

// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];
// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument

// function logItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// logItems(myCourses);
//////////////////////

//////////////////////
// // Challenge #3
// // Save to localStorage

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

// localStorage.setItem("myCredits", "100");
// let myCredits = localStorage.getItem("myCredits");
// console.log(myCredits);
//////////////////////

//////////////////////
// // Challenge #4
// // addEventListener and Object in Array

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)

// const janeBtn = document.getElementById("jane-btn");

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     },
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// janeBtn.addEventListener("click", function () {
//     console.log(data[0].score);
// })
//////////////////////

//////////////////////
// // Challenge #5
// // Generate sentences

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `;
//     const lastIndex = arr.length - 1;
//     for (let i = 0; i < arr.length; i++) {
//         if (i === lastIndex) {
//             baseString += arr[i];
//         } else {
//             baseString += arr[i] + ", ";
//         }
//     }
//     return baseString;
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
// console.log(sentence);
//////////////////////

//////////////////////
// // Challenge #6
// // Render images

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// const imgs = [
//     "images/hip1.jpg",
//     "images/hip2.jpg",
//     "images/hip3.jpg"
// ]

// const container = document.getElementById("container");

// function renderImages() {
//     let imgsDOM = "";
//     for (let i = 0; i < imgs.length; i++) {
//         imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
//     }
//     container.innerHTML = imgsDOM;
// }

// renderImages();
//////////////////////

//////////////////////
// // Challenge #7
// // Rounding Numbers

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const btn = document.getElementById("purchase-btn");
// const totalPrice = 420.69235632455;
// btn.textContent = `Buy €${ totalPrice.toFixed(2) }`;
//////////////////////

//////////////////////
// // Challenge #8
// // Convert string to number

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it
const totalPrice = "420.69235632455";
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`;