// Assignment code here
// function to generate password:
function generatePassword(){
  
  // Declare variables:
  var length = prompt("Length of password");

  // Check if input is between 8 to 128:
  if(length >= 8 && length <= 128){

    // Declare variables;
    var lowerCase, upperCase, numericValue, spCharacter;
    // Declare empty String charSet to contain password set:
    var charSet = "";

    // Promt user either to select lowercase or not.
    // If Lower case is selected, add lowercase alphabets to the variable charSet
    // else Charset remains empty: 
    if(lowerCase = window.confirm("Do you  want the password to contain lowercase")){
      charSet = "abcdefghijklmnopqrstuvwxyz";
    }
    // If Upper Case is selected, add uppercase alphabets to the charSet:
    if(upperCase = window.confirm("Do you  want the password to contain UPPERCASE")){
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    // If Numeric Calue is selcted, add numbers to charSet:
    if(numericValue = window.confirm("Do you  want the password to contain Numeric Value")){
      charSet += "0123456789";
    }
    // If special Characters are selected, add those to the charSet:
    // Double quote concatenated with \:
    if(spCharacter = window.confirm("Do you  want the password to contain Special Character")){
      charSet += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }

    // If None is selected alert users to select atleast one type:
    if(!lowerCase && !upperCase && !numericValue && !spCharacter){
      // If lenght of password inputted is less than 8 or greater than 128 exit the code.
      alert("You must choose alteast one of the following: lowercase, uppercase, numeric value, special character");
      var retVal = "You must choose alteast one of the following: lowercase, uppercase, numeric value, special character";
      return retVal;
    }

    //Declare empty string variable to containt the string:
    var retVal = "";
    
    /* Create a loop and run for the length selected by the user
      Initialized i to 0 and n to the length of the charSet
      Run loop till length is reached
      Add each value to retVal in each loop */
    for(var i = 0, n = charSet.length; i < length; ++i) {
      retVal += charSet.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }else{

    // If lenght of password inputted is less than 8 or greater than 128 exit the code.
    window.alert("Length must be between 8 and 128");
    var retVal = "Length must be between 8 and 128. Try Again";
    return retVal;
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
