// Assignment Code
const generateBtn = document.querySelector("#generate");

//password settings
let lengthEl;
let lowercaseEl; 
let uppercaseEl;
let numberEl;
let symbolEl;

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //prompts for password settings
  lengthEl = parseInt(prompt("Enter a number between 8 and 128."));
  lowercaseEl = confirm("Include lowercase letters?");
  uppercaseEl = confirm("Include uppercase letters?");
  numberEl = confirm("Include numbers?");
  symbolEl = confirm("Include symbols?");
}

