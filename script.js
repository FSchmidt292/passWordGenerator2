// Assignment code here
window.alert("Welcome to the password generator!");
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "@", "#", "$", "%", "&", "*"];
//verify security level is an acceptable selection

var securityLvl = window.prompt("How secure do you need your password? For mixed case letters: 1. For mixed case letters with numbers: 2 for mixed case letters with numbers and symbols: 3");
var charLength = window.prompt("how many characters is your password? (MUST BE WITHIN 8 - 128 RANGE");

  var selectSecurity = function() {
    if (securityLvl === "1"|| securityLvl ==="2"||securityLvl==="3"){
      console.log(securityLvl);
    }else{
      return window.alert("please refresh and select a valid option, your selection of "+ securityLvl +" is not a valid option");
    }
  };

selectSecurity();

//verify length of password

function selectCharacterLength() {

  if (charLength <= 7 || charLength >= 129){
    window.alert("please refesh and select a valid option, your selection of " + charLength +" is not a valid option");
  }else{
    console.log(charLength);
  }
};

selectCharacterLength();

trueValue = +charLength

var pool = (function(){
  if (securityLvl === "1") {
    a =  alpha + capital
    return a;
  }else if (securityLvl === "2"){
    a = alpha + capital + numeric
    return a;
  }else if (securityLvl === "3"){
    a = alpha + capital + numeric +symbol
    return a;
  }
})();

function pullFromPool() {
  return pool(Math.floor(Math.random() * pool.length))
}

function writePassword() {
    for (var i = 0; i < trueValue; i++) {
      password += pullFromPool();
    } 
    return password;
  };

makePassword();
console.log(password);

/*var trueValue = +charLength;



function generatePassword(){
  if (securityLvl === "1"){
    var split1 = Math.floor(trueValue / 2);
    var split2 = Math.ceil(trueValue / 2);
    var passwordShell = [];
      if (password.length !== trueValue){
        for(i = 0; i < split1; i++) {
          var alphaIndex = Math.floor(Math.random * alpha.length);
          passwordShell.push(alpha[alphaIndex]);

        }
      }
    }
  };
generatePassword();*/

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
