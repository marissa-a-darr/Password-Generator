
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }

  var randomNumber = Math.random()
  return Math.floor(min*(1 - randomNumber) + randomNumber*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
 var userInput = window.prompt("Please select a password length between 8 and 128 characters.")
 
 var passwordLength = parseInt(userInput)
 
 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  window.alert('Please be sure to use a number value between 8 and 128.')
return '';
}

var userNumberSelection = window.confirm("Would you like to use numbers in your password?")

var userUppercaseSelection = window.confirm("Would you like to use uppercase letters in your password?")

var userLowercaseSelection = window.confirm("Would you like to use lowercase letters in your password?")

var userSpecialCharacterSelection = window.confirm("Would you like to use special characters in your password?") 

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var specialCharacterList = ["!", "?", "-", ".", "(", "(", '[', ']', '_', '~', '`', ';', '#', '$']

var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var userOptions =[]

if (userNumberSelection === true) {
  userOptions.push(numberList)
}
if (userUppercaseSelection === true) {
  userOptions.push(uppercaseList)
}
if (userSpecialCharacterSelection === true) {
  userOptions.push(specialCharacterList)
}
if (userLowercaseSelection === true) {
  userOptions.push(lowercaseList)
}
if (userOptions.length === 0) {
  userOptions.push(uppercaseList)
} 

var generatedPassword = ""


for (var i = 0; i < passwordLength; i ++) {
  var randomInt = getRandomItem(userOptions)
  var randomCharacter = getRandomItem(randomInt)
  generatedPassword += randomCharacter
}

return generatedPassword

}
//write passwords generates password and puts value in text field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

