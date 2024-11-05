///////////////
// // Challenge #1
// 1. Create two variables, firstName and lastName
// 2. Concatenate the two variables into a third variable called fullName
// 3. Log fullName to the console

// let firstName = "Kyle";
// let lastName = "Lastname";

// let fullName = firstName + " " + lastName;
// console.log(fullName);
///////////////

///////////////
// // Challenge #2
// Create a function that logs ou "Hi there, Linda!" when called
// let name = "Linda";
// let greeting = "Hi there";

// function greetLinda() {
//     console.log(greeting + ", " + name + "!")
// }

// greetLinda()
///////////////

///////////////
// // Challenge #3
// 1. Create two functions, add3Points() and remove1Point(), and have them...
// add/remove points to/from the myPoints variable.
// Call the functions to that the line below logs out 10.
// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints -= 1;
// }

// add3Points(myPoints);   // 6
// add3Points(myPoints);   // 9
// add3Points(myPoints);   // 12
// remove1Point(myPoints); // 11
// remove1Point(myPoints); // 10

// console.log(myPoints);  // 10
///////////////

///////////////
// // Challenge #4
// Try to predict what each of the lines will log out
// console.log("2" + 3);              // string - 23
// console.log(11 + 7)                // number - 17
// console.log(6 + "5")               // string - 65
// console.log("My points: " + 5 + 9) // string - My points: 59
// console.log(2 + 2)                 // number - 4
// console.log("11" + "14")           // string - 1114
///////////////

///////////////
// // Challenge #5
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error"
// let errorParagraph = document.getElementById("error");
// console.log(errorParagraph);

// function purchase() {
//     console.log("Button clicked");
//     errorParagraph.textContent = "Something went wrong, please try again"
// }
///////////////

///////////////
// // Challenge #6
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el");

// function add() {
//     console.log("Adding...")
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result;
// }

// function subtract() {
//     console.log("Subtracting...")
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result;
// }

// function multiply() {
//     console.log("Multiplying...")
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result;
// }

// function divide() {
//     console.log("Dividing...")
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result;
// }
///////////////

///////////////
// // Challenge #7
// The following expression should calculate total expenses for a trip, but it has a problem. It is giving me 548 but I think that is too cheap. Have a look, and see if you can figure out what problem we have with operator precedence and change the code so we log out the correct cost of the trip.

// const tripLengthDays = 2;
// const tripDistanceKM = 300;
// const fuelPricePerKM = 1.5;
// const hotelCostPerNight = 60;
// const hotelDiscountPerNight = 6;
// const foodCost = 50;

// const totalCost = foodCost + tripDistanceKM * fuelPricePerKM + (hotelCostPerNight - hotelDiscountPerNight) * tripLengthDays

// console.log(totalCost);
///////////////

///////////////
// // Challenge #8
//