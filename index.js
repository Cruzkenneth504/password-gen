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

  let pwLenght = prompt("Select password length. (8-10 Charachters)");
 
  if (pwLenght >= 8 && pwLenght <= 20) {
    password.lenght = pwLenght;
 
  var isLow = confirm("Include lowercase letters in password ");
  var isUpp = confirm("Include uppercase letters in password");
  var isNum = confirm("Include numbers in password");
  var Chartset = confirm("Include special characters in password");
}else{
  alert("Please Select a password between 8-20 characters")
}


if (isLow === true) {
passwordCharacters += lowerCase;
}

if (isUpp === true) {
  passwordCharacters += upperCase;
  }
  
  if (isNum === true) {
    passwordCharacters += numbers;
    }
    
    if (isCharset === true) {
      passwordCharacters +=  speaciaCharcters;
      }
      
      else { 
        alert("Error: connot generate password")
      }

for (var i = 0; i < pwLenght; i++){
  userPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.lenght)]
}
return userPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

