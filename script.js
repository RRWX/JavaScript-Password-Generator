// Assignment code here
function generatePassword() {
  var numbers = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "@!#$%^&*()\\~+_-./':,{}";
  
  var possibleCharacters = "";

  // get input and validate
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  
  while(numberOfCharacters < 8 || numberOfCharacters > 128){
    numberOfCharacters = prompt("Please choose a valid number of characters.");
  }

  while(isNaN(numberOfCharacters)){
    numberOfCharacters = prompt("Please enter a valid number.");
  }

  hasLowercase = confirm("Do you want lowercase characters?");
  

  hasUppercase = confirm("Do you want uppercase characters?");
 

  hasNumbers = confirm("Do you want to use numbers?");
 

  hasSpecial = confirm("Do you want special characters?");


  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    alert("Please select at least one character type.");
  };

  // group selected characters
  if (hasLowercase) {
    possibleCharacters = possibleCharacters+(letters.toLowerCase());
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters+letters;
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters+numbers;
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters+specialCharacters;
  }

  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =Math.floor(Math.random() * possibleCharacters.length);
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters.substring(rng, rng+1);
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
