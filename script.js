// Assignment code here
function generatePassword(){
  var lowerCase, upperCase, numericValue, spCharacter;
  var length = prompt("Length of password");
  if(length >= 8 && length <= 128){
    var charSet = "";
    if(lowerCase = window.confirm("Do you  want the password to contain lowercase")){
      charSet = "abcdefghijklmnopqrstuvwxyz";
    }
    if(upperCase = window.confirm("Do you  want the password to contain UPPERCASE")){
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(numericValue = window.confirm("Do you  want the password to contain Numeric Value")){
      charSet += "0123456789";
    }
    if(spCharacter = window.confirm("Do you  want the password to contain Special Character")){
      charSet += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    console.log(charSet);
    // debugger;
    //var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var retVal = "";
    
    for(var i = 0, n = charSet.length; i < length; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
    //  console.log(charset.charAt(1));
  }else{
    window.alert("Length must be between 8 and 128");
  }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
