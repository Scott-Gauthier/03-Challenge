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

  var passwordSize = prompt("Please enter length of password between 8 and 128 characters.");

  if ( 8 <= passwordSize && passwordSize <= 128 ) {
    var lowercase = prompt("Do you want to include lowercase? y/n");
    var uppercase = prompt("Do you want to include uppercase? y/n");
    var numeric = prompt("Do you want to include numbers? y/n");
    var specialCharacters= prompt("Do you want to include special characters(`!#$%&()*+,-./:;<=>?@[]^_~`)? y/n");
    var possible = "";
    var alertNoty = 0;
  
    if (lowercase == 'y') {
        possible += 'abcdefghijklmnopqrstuvwxyz';
        console.log(possible);
    } else {
      alertNoty--;
      console.log(alertNoty);
    }
    if (uppercase == 'y') {
        possible += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        console.log(possible);
    } else {
      alertNoty--;
      console.log(alertNoty);
    }
    if (numeric == 'y') {
        possible += '0123456789';
        console.log(possible);
    } else {
      alertNoty--;
      console.log(alertNoty);
    }
    if (specialCharacters == 'y') {
        possible += `!#$%&()*+,-./:;<=>?@[]^_~`;
        console.log(possible);
    } else {
      alertNoty--;
      console.log(alertNoty);
    }
    } else {
      alertNoty = -6;
      console.log(alertNoty);
      alert("Password needs to be between 8 and 128 characters.");
  }
  console.log(alertNoty);
  var text = "";
  if (alertNoty >= -3 ) {
      for (var i = 0; i < passwordSize; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
  } else if (alertNoty == -6) {
    return text = `Password needs to be between 8 and 128 characters.`;
  } else if (alertNoty == -4) {
    return text = `Please give me something to work with.`;
  } else {
    return text = `Please answer with the text "y" for yes and "n" for no.`;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
