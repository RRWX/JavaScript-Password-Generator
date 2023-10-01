// Assignment code here
function generatePassword() {
  var numbers = "0123456789";
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "@!#$%^&*()\\~+_-./':,{}";
  
  var possibleCharacters = "";

  // get input and validate
  numberOfCharacters = prompt("How Long do you want in your password To be? Please choose between 8-128 characters.");
  
  while(numberOfCharacters < 8 || numberOfCharacters > 128){
    numberOfCharacters = prompt("Please choose between 8-128 characters.");
  }

  while(isNaN(numberOfCharacters)){
    numberOfCharacters = prompt("Please enter a number.");
  }

 var hasLowercase = confirm("Do you want lowercase letters?");
  

 var hasUppercase = confirm("Do you want uppercase letters?");
 

 var hasNumbers = confirm("Do you want to use numbers?");
 

 var hasSpecial = confirm("Do you want special characters?");


  while(hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    alert("Please select at least one character type.");
  hasLowercase = confirm("Do you want lowercase letters?");
  hasUppercase = confirm("Do you want uppercase letters?");
  hasNumbers = confirm("Do you want to use numbers?");
  hasSpecial = confirm("Do you want special characters?");
  };

  
  if (hasLowercase) {
    possibleCharacters +=(letters.toLowerCase());
  }
  if (hasUppercase) {
    possibleCharacters += letters;
  }
  if (hasNumbers) {
    possibleCharacters += numbers;
  }
  if (hasSpecial) {
    possibleCharacters +=specialCharacters;
  }

  let finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =Math.floor(Math.random() * possibleCharacters.length);
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
