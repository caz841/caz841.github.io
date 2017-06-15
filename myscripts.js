$(document).ready(function() {
  var Input = $('input[name=keywords]');
  var default_value = Input.val();

  $(Input).focus(function() {
    if ($(this).val() == default_value) {
      $(this).val("");
    }
  }).blur(function() {
    if ($(this).val().length == 0) /*Small update*/ {
      $(this).val(default_value);
    }
  });
})

var buyClicked = false;

function showForm() {
  if (buyClicked == true){
    console.log("tracking clicks");
     document.getElementById('gform').style.display = 'block'; // hide form
     document.getElementById('thankyou_message').style.display = 'none';
     document.getElementById('name').value = "";
     document.getElementById('email').value = "";

  } else {
  FORMCONTENT.setAttribute("style", "display: inline;")
  buyClicked = true;
  }
}

const FORMBUTTON = document.querySelector("#buyBut");
const FORMCONTENT = document.querySelector("#buyForm");

FORMBUTTON.addEventListener("click", showForm,false);
