// Assignment Code
const generateBtn = document.querySelector("#generate");

//sets password length. rejects lengths that are outside parameters.
function lengthEl() {
  const reply = parseInt(prompt("Number of characters desired (Min: 8, Max: 128)"));
  if (reply > 8 && reply < 128) {
    alert("Great, thanks!");
    return reply;
  } else {
    alert("Password must be between 8 and 128 characters")
    lengthEl()  
  }
}

//pulls characters into arrays for use in password
function createLowerArray() {
  const charArray = [];
  for(i = 97; i <= 122; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}

function createUpperArray() {
  const charArray = [];
  for(i = 65; i <= 90; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}

function createNumberArray() {
  const charArray = [];
  for(i = 48; i <= 57; i++) {
    charArray.push(String.fromCharCode(i));
  }
  return charArray;
}

function createSymbolArray() {
  const symbols = "~`!@#$%^&*()_-+={[}]|\:;<,>".split("");
  return symbols;
} 

//generate password based on answers to prompts
function generatePassword() {  
  const password = '';
  const pwLength = lengthEl();
  console.log(pwLength);

  //prompts to select password options
  const lowercaseEl = confirm("Use lowercase letters?");
  const uppercaseEl = confirm("Use uppercase letters?");
  const numberEl = confirm("Use numbers?");
  const symbolEl = confirm("Use symbols?");

  //array to be called when randomizing characters
  const pwArrays = [];

  console.log(pwArrays);
  
  if(lowercaseEl === true) {
    let lowercaseArray = createLowerArray();
    pwArrays.lowercase = lowercaseArray;  
  }

  if(uppercaseEl === true) {
    let uppercaseArray = createUpperArray();
    pwArrays.uppercase = uppercaseArray;  
  }
  
  if(numberEl === true) {
    let numberArray = createNumberArray();
    pwArrays.number = numberArray;  
  }

  if(symbolEl === true) {
    let symbolArray = createSymbolArray();
    pwArrays.symbol = symbolArray;  
  }

  //generates a random character until pwLength is reached
  for(i = 0; i <= pwLength; i++) {
    password = 

  }
  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);