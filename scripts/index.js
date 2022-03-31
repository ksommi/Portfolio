/* Elementos */
var menuButton = document.querySelector("#menubtn");
var navBar = document.querySelector("#mySidepanel");
var main = document.querySelector("#main");
var myName = document.querySelector("#Kevin");
var navContainer = document.querySelector("#panel-container");
var header = document.querySelector("#header");

/* formulario */

var inputName = document.querySelector("#nameForm");
var inputEmail = document.querySelector("#emailForm");
var inputSubject = document.querySelector("#subjectForm");
var inputMessage = document.querySelector("#messageForm");
var formButton = document.querySelector("#mensajebtn");
var circleCheck = document.querySelectorAll(".fa-circle-check");
var circleExclamation = document.querySelectorAll(".fa-circle-exclamation");

/* Validaciones */
var isNameValid = false;
var isEmailValid = false;
var isSubjectValid = false;
var isMessageValid = false;

/* Eventos */

menuButton.addEventListener("click", menuNav);
inputName.addEventListener("blur", validateName);
inputEmail.addEventListener("blur", validateEmail);
inputSubject.addEventListener("blur", validateSubject);
inputMessage.addEventListener("blur", validateMessage);
formButton.addEventListener("click", (e) => {
  e.preventDefault();

  saveAll();
  console.log(entireForm);
});

function menuNav() {
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
    main.style.marginTop = "0";
    myName.style.display = "block";
    navContainer.style.width = "";
    header.style.height = "";
  } else {
    navBar.style.display = "block";
    main.style.marginTop = "110px";
    myName.style.display = "none";
    navContainer.style.width = "100%";
    header.style.height = "165px";
  }
}

function saveAll() {
  entireForm = {
    name: inputName.value,
    email: inputEmail.value,
    subject: inputSubject.value,
    message: inputMessage.value,
  };
  return entireForm;
}

function wrong(id, number) {
  circleExclamation[number].style.display = "block";
  circleCheck[number].style.display = "none";
  id.classList.add("invalid");
}

function check(id, number) {
  circleExclamation[number].style.display = "none";
  circleCheck[number].style.display = "block";
  id.classList.remove("invalid");
}

function validateName() {
  var name = inputName.value;
  name = name.trim();
  if (/([^a-zA-Z ])/.test(name) || name === "" || name.length > 20) {
    wrong(inputName, 0);
    isNameValid = false;
  } else {
    check(inputName, 0);
    isNameValid = true;
  }
  updateButtonStatus();
}

function validateEmail() {
  var email = inputEmail.value;
  if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
    check(inputEmail, 1);
    isEmailValid = true;
  } else {
    wrong(inputEmail, 1);
    isEmailValid = false;
  }
  updateButtonStatus();
}

function validateSubject() {
  var subject = inputSubject.value;
  if (subject === "" || subject.length > 50) {
    wrong(inputSubject, 2);
    isSubjectValid = false;
  } else {
    check(inputSubject, 2);
    isSubjectValid = true;
  }
  updateButtonStatus();
}

function validateMessage() {
  var message = inputMessage.value;
  if (message === "" || message.length > 300) {
    wrong(inputMessage, 3);
    isMessageValid = false;
  } else {
    check(inputMessage, 3);
    isMessageValid = true;
  }
  updateButtonStatus();
}

function updateButtonStatus() {
  if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}
