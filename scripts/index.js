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

/* Eventos */

menuButton.addEventListener("click", menuNav);
formButton.addEventListener("click", (e) => {
  e.preventDefault();

  saveAll();
  validateName(inputName.value);
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

function validateName() {
  var name = entireForm.name;
  name = name.trim();
  if (/([^a-z ])/.test(name) || name === "" || name.length > 20) {
    return false;
  }
  return true;
}
