const userName = document.querySelector(".name");
userName.addEventListener("input", checkLetters);

const userSurname = document.querySelector(".surname");
userSurname.addEventListener("input", checkLetters);

function checkLetters(event) {
  if (userName.validity.patternMismatch) {
    userName.setCustomValidity("Solo se aceptan letras");
  } else {
    userName.setCustomValidity("");
  }
}
