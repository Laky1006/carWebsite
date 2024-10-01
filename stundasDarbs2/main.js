// Get the modal
var modal = document.getElementById("Eppy-Cat-Mod");

// Get the button that opens the modal
var btn = document.getElementById("eepy-cat-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// // Get the modal
// var modalOrange = document.getElementById("Orange-Mod");

// // Get the button that opens the modal
// var btnOrange = document.getElementById("orange-btn");

// // When the user clicks on the button, open the modal
// btnOrange.onclick = function() {
//     modalOrange.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalOrange.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalOrange) {
//     modalOrange.style.display = "none";
//   }
// }

// // Get the modal
// var modalWizard = document.getElementById("Wizard-Mod");

// // Get the button that opens the modal
// var btnWizard = document.getElementById("wizard-btn");

// // When the user clicks on the button, open the modal
// btnWizard.onclick = function() {
//     modalWizard.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalWizard.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalWizard) {
//     modalWizard.style.display = "none";
//   }
// }