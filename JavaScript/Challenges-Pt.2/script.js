////////////////////
// Challenge #1

// Create a person object that contains three keys: name, age, and county. Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
// let person = {
//     name: "Kyle",
//     age: 29,
//     country: "USA"
// }

// function logData() {
//     return person.name + " is " + person.age + " years old and lives in the " + person.country
// }

// console.log(logData())
////////////////////

////////////////////
// Challenge #2
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount the passenger will get based upon the value of the age variable
// let age = 75;

// if (age <= 6) {
//     console.log("Free Child Admission");
// } else if (age <= 17) {
//     console.log("Child Discount Admission");
// } else if (age <= 26) {
//     console.log("Student Discount Admission");
// } else if (age <= 65) {
//     console.log("Full Price Admission");
// } else {
//     console.log("Senior Citizen Discount");
// }
////////////////////

////////////////////
// Challenge #3
// Use a for loop to log the following to the console:

// The 5 largest countries in the world:
// - China
// - India
// - United States
// - Indinesia
// - Pakistan

// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }
////////////////////

////////////////////
// Challenge #4
// You need to help me fixup the largeCountries array so that China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries);
////////////////////

////////////////////
// Challenge #5
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// }
////////////////////

////////////////////
// Challenge #6
// Create a function that returns a random item from the array

// let hands = ["rock", "paper", "scissor"]

// function getRandomHand() {
//     let randomHand = Math.floor(Math.random() * 3) + 1;
//     if (randomHand === 1) {
//         console.log(hands[0]);
//     } else if (randomHand === 2) {
//         console.log(hands[1]);
//     } else if (randomHand === 3) {
//         console.log(hands[2]);
//     }
// }

// getRandomHand();
////////////////////

////////////////////
// Challenge #7
// Challenge:
// When the user clicks on the "Pick Fighters" button, pick two random emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
// let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

// let stageEl = document.getElementById("stage")
// let fightButton = document.getElementById("fightButton")

// fightButton.addEventListener("click", function() {
//     let randomIndexOne = Math.floor(Math.random() * fighters.length)
//     let randomIndexTwo = Math.floor(Math.random() * fighters.length)
//     stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
// })
////////////////////

////////////////////
// Challenge #8
// Create a function that puts the apples onto the appleShelf and the oranges onto the orangeShelf. Use a for loop, a conditional statement, and the textContent property.

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

// sortFruit()