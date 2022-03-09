function openNav() {
  document.getElementById("mySidepanel").style.display = "block";
  document.getElementById("main").style.marginTop = "170px";
  document.getElementById("Kevin").style.display = "none";
  document.getElementById("panel-container").style.width = "100%";
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidepanel").style.display = "none";
  document.getElementById("main").style.marginTop = "0";
  document.getElementById("Kevin").style.display = "block";
  document.getElementById("panel-container").style.width = "";
  document.getElementById("openbtn").style.display = "block";
}
