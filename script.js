// Assignment Code
const generateBtn = document.querySelector("#generate");

//generate password based on answers to prompts
function generatePassword() {  
  const pwLength = lengthEl();

  //sets password length. rejects lengths that are outside parameters.
  function lengthEl() {
    const reply = parseInt(prompt("Number of characters desired (Min: 8, Max: 128)"));
    if (reply > 7 && reply < 129) {
      alert("Great, thanks!");
      return reply;
    } else {
      alert("Password must be between 8 and 128 characters")
      lengthEl()  
    }
  }

  //prompts to select password options
  const lowercaseEl = confirm("Use lowercase letters?");
  const uppercaseEl = confirm("Use uppercase letters?");
  const numberEl = confirm("Use numbers?");
  const symbolEl = confirm("Use symbols?");

  //only accepted characters will be added to array
  const charArray = [];
  
  if(lowercaseEl === true) {
    for(i = 97; i <= 122; i++) {
      charArray.push(String.fromCharCode(i));
    }
  }


  if(uppercaseEl === true) {
    for(i = 65; i <= 90; i++) {
      charArray.push(String.fromCharCode(i));
    } 
  }
  
  if(numberEl === true) {
    for(i = 48; i <= 57; i++) {
      charArray.push(String.fromCharCode(i));
    }
  }

  if(symbolEl === true) {
    for(i = 33; i <= 47; i++) {
      charArray.push(String.fromCharCode(i));
    }
  }

  console.log(charArray);

  //generates a random character until pwLength is reached
  const finalPassword = [];
  

  for(i = 0; i < pwLength; i++) {
    const randomChar = charArray[Math.floor(Math.random() *charArray.length)];
    finalPassword.push(randomChar);
  }

  const stringPassword = finalPassword.join("");
  
  return stringPassword;
}


// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);