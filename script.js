const generateEl = document.getElementById("generate");
const resultEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const numberEl = document.getElementById("charset-0");
const uppercaseEl = document.getElementById("charset-2");
const lowercaseEl = document.getElementById("charset-1");
const symbolEl = document.getElementById("charset-3");


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
};
console.log(randomFunc);
generateEl.addEventListener('click', () => {
  const length = parseInt(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length){

  let finalPassword = "";
  const typesCount = lower + upper + number + symbol;

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
  item => Object.values(item)[0]
  );
  
  if(typesCount === 0){
    return '';
  }

  for (var i = 0; i<length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      if( funcName === "lower"){
        finalPassword += randomFunc.lower();
      }
      if( funcName === "upper"){
        finalPassword += randomFunc.upper();
      }
      if( funcName === "number"){
        finalPassword += randomFunc.number();
      }
      if( funcName === "symbol"){
        finalPassword += randomFunc.symbols();
      }
    });
  }

  return finalPassword;
}


function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 48);
}

function getRandomSymbol(){
  var symbols = "!$%^&*()-=+[]{};#:@~,./<>?"
  return symbols[Math.floor(Math.random()*symbols.length)];
}