window.alert ("This is an alert! JavaScript is running!");

var generateBtn = document.querySelector("#generate");



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
var upperCase = false;
var lowerCase = false;
var number = false;
var specialCharacter = false;
​

console.log(`Default Upper Case: ${upperCase}`)
console.log(`Default Lower Case: ${lowerCase}`)
console.log(`Default Number: ${number}`)
console.log(`Default Special Character: ${specialCharacter}`)
​

upperCase = confirm("Would you like upper case letters?");
lowerCase = confirm("Would you like lower case letters?");
number = confirm("Would you like a number?");
specialCharacter = confirm("Would you like special characters?");

console.log(`Updated Upper Case: ${upperCase}`)
console.log(`Updated Lower Case: ${lowerCase}`)
console.log(`Updated Number: ${number}`)
console.log(`Updated Special Character: ${specialCharacter}`)
function random_password_generate(max,min)
{
  function validateForm() {
    var fullname = document.forms["subscribForm"]["fullname"].value;
    var phone = document.forms["subscribForm"]["phone"].value;
    if (fullname == "") {
        alert("Email must be filled out");
        document.getElementById('fnameValidError').innerHTML = "You must have to provide email";
        document.getElementById('fullname').style.border = "solid 1px red";
        return false;
    } else {
          document.getElementById('fnameValidError').innerHTML = "";
          document.getElementById('fullname').style.border = "solid 1px #a9a9a9";
    }
    if (phone == "") {
        alert("Email must be filled out");
        document.getElementById('phoneValidError').innerHTML = "You must have to provide phone number";
        document.getElementById('phone').style.border = "solid 1px red";
        return false;
    } else {
         document.getElementById('phoneValidError').innerHTML = "";
         document.getElementById('phone').style.border = "solid 1px #a9a9a9";
    }var passwordChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@!%&()/";
    var randPwLen = Math.floor(Math.random() * (max - min + 1)) + min;
    var randPassword = Array(randPwLen).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    return randPassword;
}
document.getElementById("generatePassword").addEventListener("click", function(){
    random_password = random_password_generate(16,8);
    document.getElementById("randomPassword").value = random_password;
});
