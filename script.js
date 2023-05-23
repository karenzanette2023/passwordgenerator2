// generate a new password everytime button is clicked
// give parameters to apply while generating password
// Set length between 8 and 128 characters
// confirm special uppercase, lowercase and numbers in password
// after password is generated, it should be generated in an alert or written on the page.

// Assignment Code

var generatePW = "new-password"
var generateBtn = document.querySelector("#generate");
// Asking user for parameters to generate their random password.
function generatePassword() {
  var newPassword = ""
  var passwordLength= window.prompt("Choose a value between 8 and 128")
  console.log (passwordLength);
  var hasSpecial = window.confirm("Do you want special characters?")
  console.log ("Has special?", hasSpecial);
  var hasUppercase = window.confirm("Do you want uppercase letters?")
  console.log ("Has uppercase?", hasUppercase);
  var hasLowercase = window.confirm("Do you want lowercase letters?")
  console.log ("Has lowercase?", hasLowercase);
  var hasNumbers = window.confirm("Do you want numbers?")
  console.log ("Has numbers?", hasNumbers);
  // defining all of the above variables
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">", "/"]
  
  // If the user wants special characters, they are concatonated to the password
  if (hasSpecial === true) {
    newPassword = newPassword.concat(hasSpecial);
  };
  // If the user wants uppercase letters, they are concationated to the password
  if (hasUppercase === true) {
    newPassword = newPassword.concat(hasUppercase);
  };
  // If the user wants lowercase letters, they are concationated to the password
  if (hasLowercase === true) {
    newPassword = newPassword.concat(hasLowercase);
  };
  // If the user wants lowercast letters, they are concationated to the password
  if (hasNumbers === true) {
    newPassword = newPassword.concat(hasNumbers);
  };
  return newPassword

  for (var i = 0; i < 5; i++); {
    var index = Math.floor(Math.random() * newPassword.length);

  }
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);