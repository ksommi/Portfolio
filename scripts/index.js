/* Elementos */
var menuButton = document.querySelector("#menubtn");
var navBar = document.querySelector("#mySidepanel");
var main = document.querySelector("#main");
var myName = document.querySelector("#Kevin");
var navContainer = document.querySelector("#panel-container");
var header = document.querySelector("#header");

/* Eventos */

menuButton.addEventListener("click", menuNav);

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
