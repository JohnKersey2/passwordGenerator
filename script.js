// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var passwordLength = (parseInt(prompt ("How many characters would you like your password to be?\n(Please input a number between 8 and 128)", "8 to 128"))) // creates window prompt for character limit and changes user input to an int

      lowercase = confirm ("Do you want lowercase letters in your password?\n(Press okay for yes, press cancel for no.)") // These 4 lines create confirmation boxes to allow user to select desired options
      uppercase = confirm ("Do you want uppercase letters in your password?\n(Press okay for yes, press cancel for no.)")
      numbers = confirm ("Do you want numbers in your password?\n(Press okay for yes, press cancel for no.)")
      specialCharacters= confirm ("Do you want special characters in your password?\n(Press okay for yes, press cancel for no.)")
  
      console.log(passwordLength) // placeholder to make sure functioning correctly. 
      console.log(lowercase)
      console.log(uppercase)
      console.log(numbers)
      console.log(specialCharacters)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
