// Assignment Code

//buttons
const generateBtn = document.querySelector("#generate"); //opens popup
const okayBtn = document.querySelector("#okayBtn") //closes popup

//settings
const passwordSettings = document.querySelector(".passwordSettings");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");

//button functions: open & close popup
generateBtn.onclick = function() {
  passwordSettings.style.display = "block";
}

okayBtn.onclick = function() {
  passwordSettings.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// // Write password to the #password input
// function writePassword() {
//   const password = generatePassword();
//   const passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }



