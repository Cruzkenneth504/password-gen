//querySelector selects first element inside doc//
//querySelectorAll selects elements that match//

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";//string//
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";//string//
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//string//
var numbers = "0123456789";//number//
var optionsVariable = "";//undifine value


generateBtn.addEventListener("click", writePassword);//add event listener so wehn click add generates password

function writePassword() {
//adds statements that will permform told task//
    password.value === "";
    var randomString = "";

    var iSlowercase = confirm("Would you like your password to contain lowercase letters?");
    var iSuppercase = confirm("Would you like  your password to contain uppercase letters?");
    var iSnum = confirm("Would you like your password to contain numbers?");
    var iSspecialChar = confirm("Would you like to include special characters?");
    var iSpasswordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");


    //"If" statement returns true(Boleean) values//
    //*//
    if (iSpasswordLength < 8 || iSpasswordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var iSpasswordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    //"else if is code  block that executes if statement is false"//
    else if (iSlowercase === false && iSuppercase === false && iSnum === false && iSspecialChar === false) {
     

    }
   
    if (iSlowercase) {
        optionsVariable += lowercaseAlphabet;
    }

    if (iSuppercase) {
        optionsVariable += uppercaseAlphabet;
    }

    if (iSnum) {
        optionsVariable += numbers;
    }

    if (iSspecialChar) {
        optionsVariable += specialCharacters;
    }
        //"Forloops"  around code blocks 
    for (var i = 0; i < iSpasswordLength; i++) {
        //chartAt returns characters specific index position//
        //Math.floor its rounds given number input //
        //Math.random its returns numbers greater than or equal to 0 and less than 1,
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }

    password.value = randomString;

}
//invokes function//
writePassword()