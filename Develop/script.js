// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
 let pass='';
 let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz012345678900!@#$%^&*()_+'
let passwordlength=(8,128); 
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
  let random = prompt('choose passwork length 8-128');
  let text;
  if (random== "8" || random =="128") {
    text= "cancelled prompt.";
  }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);