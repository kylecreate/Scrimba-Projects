const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let boxOneEl = document.getElementById("box-1-el");
let boxTwoEl = document.getElementById("box-2-el");
let generateButton = document.getElementById("generate-el");
let passwordLength = 10;

function generatePassword() {
    let password1 = "";
    let password2 = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);

        password1 += characters[randomIndex1];
        password2 += characters[randomIndex2];
    }

    boxOneEl.textContent = password1;
    boxTwoEl.textContent = password2;
}