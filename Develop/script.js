// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 let pass='';
 let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz012345678900!@#$%^&*()_+'
let passwordlength=8; 
 for (let i = 1; i<=passwordlength; i++){
  let char =  Math.floor(Math.random() *
  str.length +1);

  pass += str.charAt(char)
 }
return pass;

}


// Write password to the #password input  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);