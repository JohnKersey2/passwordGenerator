// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase
var uppercase
var numbers
var specialCharacters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() { 
  var passwordLength = (parseInt(prompt ("How many characters would you like your password to be?\n(Please input a number between 8 and 128)", "8 to 128"))) // creates window prompt for character limit and changes user input to an int
  if (passwordLength >= 8 && passwordLength <= 128 ) { // If user submits valid number, continues on to generate password 

    // Confirms which characters the user wants
    lowercase = confirm ("Do you want lowercase letters in your password?\n(Press okay for yes, press cancel for no.)")
    uppercase = confirm ("Do you want uppercase letters in your password?\n(Press okay for yes, press cancel for no.)")
    numbers = confirm ("Do you want numbers in your password?\n(Press okay for yes, press cancel for no.)")
    specialCharacters= confirm ("Do you want special characters in your password?\n(Press okay for yes, press cancel for no.)")

    var passwordCharacters = generateCharacters() // Runs a function to create a string based on user input
    var generatedPassword = ""

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }

    return generatedPassword; // sends a string to writePassword function
  }
  else { // Returns a try again message instead of a password if the user gave an invalid length
    return "Please check that you picked a number between 8 and 128 and try again.";
  }
} 

function generateCharacters() {
    return "ABCabc123!@#" //placeholder to test if generatePassword function returns string to writePassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
