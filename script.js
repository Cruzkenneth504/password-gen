// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // set password&charset to empty strings as the value will be populated as the program progress
  var password = '';
  var charset = '';
  //prompt for password lenght 
  var length = parseInt(prompt('How many characters would you like your password to contain?'))
  //If any of these conditions are met, the function returns an empty string to exit the function, indicating that no valid password can be generated.
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return '';
  }

  var includeUpperCase = confirm("Click OK to include upperCase characters.")
  var includeLowerCase = confirm("Click OK to include lowerCase characters.")
  var includeNumeric = confirm("Click Ok to include numeric characters")
  var includeSpecialChar = confirm("Click Ok to inlclude special characters")

  if (!includeUpperCase && !includeLowerCase && !includeNumeric && !includeSpecialChar) {
    alert("At least one character type must be selected.")
    return ''
  }

  if (includeUpperCase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  if (includeLowerCase) {
    charset += 'abcdefghijklmnopqrstuvwxyz'
  }

  if (includeNumeric) {
    charset += '0123456789'
  }

  if (includeSpecialChar) {
    charset += "!@#$%^&*()-_=+"
  }

  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex]
  }

  return password;

}
// This function should 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

