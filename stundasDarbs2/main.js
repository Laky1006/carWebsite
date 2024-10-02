// Get the modal
var modal = document.getElementById("eppy-cat-mod");
var modalOrange = document.getElementById("Orange-Mod");
var modalWizard = document.getElementById("Wizard-Mod");

// Get the button that opens the modal
var btn = document.getElementById("eepy-cat-btn");
var btnOrange = document.getElementById("orange-btn");
var btnWizard = document.getElementById("wizard-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

function close_btn() {
    modal.style.display = "none";
    modalOrange.style.display = "none";
    modalWizard.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the button, open the modal
btnOrange.onclick = function() {
    modalOrange.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOrange) {
    modalOrange.style.display = "none";
  }
}

// When the user clicks on the button, open the modal
btnWizard.onclick = function() {
    modalWizard.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWizard) {
    modalWizard.style.display = "none";
  }
}