// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
//create variable with desired password size
  var passwordSize = prompt("Please enter length of password between 8 and 128 characters.");
  if ( 8 <= passwordSize && passwordSize <= 128 ) {
    //variables to store additional prompt answers if answer is in acceptable range.
      var lowercase = prompt("Do you want to include lowercase? y/n");
      var uppercase = prompt("Do you want to include uppercase? y/n");
      var numeric = prompt("Do you want to include numbers? y/n");
      var specialCharacters= prompt("Do you want to include special characters(`!#$%&()*+,-./:;<=>?@[]^_~`)? y/n");
      var possible = "";
      var alertNoty = 0;
      var text = "";

      //process variable prompt answer for lowercase to set possible character sting set used to generage the password
      if (lowercase == 'y') {
          possible += 'abcdefghijklmnopqrstuvwxyz';
      } else {
        alertNoty--;
      }
      //process variable prompt answer for uppercase to set possible character sting set used to generage the password
      if (uppercase == 'y') {
          possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else {
        alertNoty--;
      }
      //process variable prompt answer for numeric to set possible character sting set used to generage the password
      if (numeric == 'y') {
          possible += '0123456789';
      } else {
        alertNoty--;
      }
      //process variable prompt answer for specialCharacters to set possible character sting set used to generage the password
      if (specialCharacters == 'y') {
          possible += `!#$%&()*+,-./:;<=>?@[]^_~`;
      } else {
        alertNoty--;
      }
    } else {
    //This sets the alert variable and alerts if the characters is not in the right range.
      alertNoty = -6;
      alert("Password needs to be between 8 and 128 characters.");
    }
  //This is what runs if answer is within character range and at least one additional prompt answered y
  if (alertNoty >= -3 ) {
      for (var i = 0; i < passwordSize; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    //This is what sets the form field if characters wanted is not within acceptable range.
  } else if (alertNoty == -6) {
    return text = `Password needs to be between 8 and 128 characters.`;
    //this is what the form field states if characters in acceptable range, but no other prompt answered with y.
  } else if (alertNoty == -4) {
    return text = `Please give me something to work with.`;
    //final catch all
  } else {
    return text = `Please answer with the text "y" for yes and "n" for no.`;
  }
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
