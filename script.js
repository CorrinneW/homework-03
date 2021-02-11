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

//generates a random character using corresponding character codes
function getRandomLower() {
  returnString.fromCharCode(
    Math.floor(
      Math.random() * 26) + 97
    );
}

function getRandomUpper() {
  returnString.fromCharCode(
    Math.floor(
      Math.random() * 26) + 65
    );
}

function getRandomNumber() {
  returnString.fromCharCode(
    Math.floor(
      Math.random() * 10) + 48
    );
}

function getRandomSymbol() {
  const symbols = "~`!@#$%^&*()_-+={[}]|\:;<,>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//object contains randomization functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

//button functions: open & close popup
// generateBtn.onclick = function() {
//   passwordSettings.style.display = "block";
// }

// okayBtn.onclick = function() {
//   passwordSettings.style.display = "none";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, (length) => {
  // includes checked values in generated password and converts length entry from string to number
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  password.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

//generate password with selected options

function generatePassword(length, lower, upper, number, symbol) {
  //sets password to an empty string
  let generatedPassword = '';

  //counts number of checked values
  const typesCount = lower + upper + number + symbol; 
  
  //curly braces convert array to true/false key. Filter ignores all falsey (unchecked) items
  const typesArr = [{lower} {upper} {number} {symbol}].filter
  (item => Object.values(item)[0]); //0 represents false (unchecked) here

  //if no box is checked, generatePassword returns an empty string
  if(typesCount === 0) {return '';}

  //loops generatePassword til number of characters matches password length
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type) [0];
      generatedPassword += randomFunc[funcName]();
    })
    
  }
}


// // Write password to the #password input
function writePassword() {
  const password = generatePassword(length);
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

  //displays password on screen
  console.log generatedPassword;
}



