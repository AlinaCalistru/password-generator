let passLengthEl = document.getElementById("pass-length");
let passwordEls = document.querySelectorAll(".gen-pass");

// array with characters for password
let passwordChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "!",
  "`",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

//generate random password 
function generatePswd() {
  let password = "";
  for (let i = 0; i <= passLengthEl.value; i++) {
    let index = Math.floor(Math.random() * passwordChars.length);
    password += passwordChars[index];
  }

  return password;
}
// assign new password to each input field
function newPassword() {
  Array.from(passwordEls).forEach(function (element) {
    let pwd = generatePswd();
    element.value = pwd;
  });
}
