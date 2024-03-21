const passwordBox = document.getElementById("PassWord");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numbers = "0123456789";

const allChars = upperCase + lowerCase + numbers + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
}
