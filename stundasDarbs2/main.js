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

btnOrange.onclick = function() {
  modalOrange.style.display = "block";
}

btnWizard.onclick = function() {
  modalWizard.style.display = "block";
}

function close_btn() {
    modal.style.display = "none";
    modalOrange.style.display = "none";
    modalWizard.style.display = "none";
}

function darkModeFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  const btn = document.getElementById("darkModebtn");
  if (btn.innerText === 'Halloween') {
      btn.innerText = 'Barbie';
  } else {
      btn.innerText = 'Halloween';
  }
}

function burgerNav() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}