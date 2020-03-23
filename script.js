var charTypes = {
  'upper': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  'lower': 'abcdefghijklmnopqrstuvwxyz',
  'number': '0123456789',
  'special': '!$%^&*()-=+[]{};#:@~,./<>?'
};

function myFunction() {
    var checkBox = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i<checkBox.length; i++){

        checkBox.value = charTypes[type];
      //   console.log(checkBox[i].value);
      if (checkBox[i].checked == true){
        console.log(checkBox[i].value);
        } 
        // else {
      //   console.log("is not checked");
      // }
      
    }
    
  }

window.onload = function() { 
  var inputs = document.querySelectorAll('form div input[type=text]');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var div = input.parentNode;
    //set initial value
    var type = div.id;
    input.value = charTypes[type];
    input.size = 40;
    //hook up reset handler
    var anchor = div.querySelector('a');
    anchor.onclick = function (input, type) {
      return function () {
        input.value = charTypes[type];
        return false;
      };
    }(input, type);
  }
}

function _generatePassword(passwordLength, charBlocks) {
  var allChars = "";
  for (var i = 0; i < charBlocks.length; i++) {
    allChars += charBlocks[i];
  }
  var numChars = allChars.length;
  var password = "";
  for (var i = 1; i <= passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * numChars));
  }
  return password;
}

function generatePassword(passwordLength) {
  var charBlocks = [];
  for (id in charTypes) {
    var isTicked = document.querySelector('div#' + id + ' input[type=checkbox]').checked;
    var value = document.querySelector('div#' + id + ' input[type=text]').value;
    if (isTicked) {
      charBlocks.push(value);
    }
  }
  
  var $length = document.getElementById('length');
  var passwordLength = parseInt($length.value)
  
  var password = _generatePassword(passwordLength, charBlocks);
  var $display = document.getElementById('display-password');
  $display.textContent  = password;
}

var checkbox = document.querySelectorAll("input[type=checkbox]");
console.log(checkbox);
for ( var i = 0; i<checkbox.length; i++){
  if(checkbox[i].checked === true){
    alert("Something is checked");
  }  

}

var checkbox1 = document.getElementById("charset-0");
if(checkbox1.checked === true){
  alert("Something is checked");
}  


var generateButton = document.getElementById("generate");

generateButton.addEventListener("change", function() {
  var checkbox = document.querySelectorAll("input[type=checkbox]");
  for (var i=0; i<checkbox.length; i++) {

    console.log(checkbox[i].checked+"number is checked");

    
  }
});

function _generatePassword(passwordLength, charBlocks) {
  var allChars = "";
  for (var i = 0; i < charBlocks.length; i++) {
    allChars += charBlocks[i];
  }
  var numChars = allChars.length;
  var password = "";
  for (var i = 1; i <= passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * numChars));
  }
  return password;
}

function generatePassword(passwordLength) {
  var charBlocks = [];
  for (key in charTypes) {
    var isTicked = document.querySelectorAll("input[type=checkbox]").checked;
    var value = document.getElementById("length").value;
    if (isTicked) {
      alert("This is clicked");
      charBlocks.push(value);
    }
  }
  var $length = document.getElementById("length");
  var passwordLength = $length.value;

  var password = _generatePassword(passwordLength, charBlocks);
  password.textContent = password;
}

generateButton.addEventListener("click", function(event) {
  event.preventDefault();
  var $length = document.getElementById("length");
  var passwordLength = $length.value;
  password.textContent = passwordLength;
});

var checkbox = document.querySelectorAll("input[type=checkbox]");


