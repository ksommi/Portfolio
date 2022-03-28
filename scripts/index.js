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

/* Eventos */

menuButton.addEventListener("click", menuNav);
inputName.addEventListener("blur", validateName);
inputName.addEventListener("keypress", updateButtonStatus);
inputEmail.addEventListener("blur", validateEmail);
inputEmail.addEventListener("keypress", updateButtonStatus);
inputSubject.addEventListener("blur", validateSubject);
inputSubject.addEventListener("keypress", updateButtonStatus);
inputMessage.addEventListener("blur", validateMessage);
inputMessage.addEventListener("keypress", updateButtonStatus);
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
    return false;
  } else {
    check(inputName, 0);
    console.log("true");
    return true;
  }
}

function validateEmail() {
  var email = inputEmail.value;
  if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)) {
    check(inputEmail, 1);
    console.log("true email");
    return true;
  } else {
    wrong(inputEmail, 1);
    updateButtonStatus();
    return false;
  }
}

function validateSubject() {
  var subject = inputSubject.value;
  if (subject === "" || subject.length > 50) {
    wrong(inputSubject, 2);
    return false;
  } else {
    check(inputSubject, 2);
    updateButtonStatus();
    return true;
  }
}

function validateMessage() {
  var message = inputMessage.value;
  if (message === "" || message.length > 300) {
    wrong(inputMessage, 3);
    return false;
  } else {
    check(inputMessage, 3);
    updateButtonStatus();
    return true;
  }
}

function updateButtonStatus() {
  if (validateName === true && validateEmail === true) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}

// si tiro "validateName === true" en consola me arroja false aunque el nombre este verificado correctamente
