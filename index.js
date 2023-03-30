// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = "abcdefghjkopqrstuxyz";
const upperCase = "ABCDEFGHJKPQRSTUXYZ";
const numbers = "0123456789"
const speaciaCharcters = "~`!@#$%^&*()-_+={}[]|\;:<>,./?";
const pwLenght ="";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userPassword = "";
  passwordCharacters = ""

  pwLenght = prompt(
    "Select password length. (8-10 Charachters)")
  ;
 
  if (pwLenght >= 8 && pwLenght <= 20){
    password.lenght = pwLenght
 
  var isLow = confirm("Include lowercase letters in password ");
  var isUpp = confirm("Include uppercase letters in password");
  var isNum = confirm("Include numbers in password")
  var Chartset = confirm("Include special characters in password")
}else{
  alert("Please Select a password between 8-20 characters")
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

