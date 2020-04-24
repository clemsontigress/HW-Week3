// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultArea = document.querySelector("#password")


//Object of char gen functions
var randFunction = {
  lower: genRandLower,
  upper: genRandUpper,
  number: genRandNum,
  symbol: genRandSymb
};

//Create random character generators

function genRandLower() {
  var randomChar = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'()*+,-./:;<=>?@[^_`{|}~";
  var randLower = randomChar.charAt(Math.floor(Math.random()*26+1));
}
function genRandUpper() {
  var randomChar = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'()*+,-./:;<=>?@[^_`{|}~";
  var randUpper = randomChar.charAt(Math.floor((Math.random()*26+1) + 26));
}
function genRandNum () {
  var randomChar = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'()*+,-./:;<=>?@[^_`{|}~";
  var randNum = randomChar.charAt(Math.floor((Math.random()*10+1) + 52));
}
function genRandSymb() {
  var randomChar = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!'()*+,-./:;<=>?@[^_`{|}~";
  var randSymb = randomChar.charAt(Math.floor((Math.random()*25+1) + 62));
}
  


function writePassword(confirmLower,confirmUpper, confirmNumber, confirmSymbol, length) {
var generatedPW = ""

if(confirmLower){
  confirmLower = 1;}
else {
  confirmLower=0;}

  if(confirmUpper){
    confirmUpper = 1;}
  else {
    confirmUpper=0;}
    
    if(confirmNumber){
      confirmNumber = 1;}
    else {
      confirmNumber=0;}

      if(confirmSymbol){
        confirmSymbol = 1;}
      else {
        confirmSymbol=0;}

var typesCount = confirmLower + confirmUpper + confirmNumber + confirmSymbol ;


var typesArr = [{ confirmLower }, { confirmUpper }, { confirmNumber }, { confirmSymbol }].filter 
(item => Object.values(item)[0]);

for (var i=0; i < length; i += typesCount) {
  typesArr.forEach(type => {

    var functionName = Object.keys(type)[0];
    console.log("functionName:", functionName)
    generatedPW += randFunction[functionName]();
    
  })
}
shownPW = generatedPW.slice(0,length);
return shownPW
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {

  var pwLength = prompt("Choose a password length from 8-128") //Number needing validation = his "length var"
  var length = +pwLength.value
  var confirmLower = confirm("Include lowercase letters in password? If no, then 'cancel'") //true/false =his "haslower"
  var confirmUpper = confirm("Include uppercase letters in password? If no, then 'cancel'")
  var confirmNumber = confirm("Include numbers in password? If no, then 'cancel'")
  var confirmSymbol = confirm("Include symbols in password? If no, then 'cancel'")
  
  resultArea.innerHTML = writePassword(confirmLower,confirmUpper, confirmNumber, confirmSymbol, length);
  }); 