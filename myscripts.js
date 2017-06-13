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

function showForm() {
  FORMCONTENT.setAttribute("style", "display: inline;")
  console.log("function run");
}

const FORMBUTTON = document.querySelector("#buyBut");
const FORMCONTENT = document.querySelector("#buyForm");

FORMBUTTON.addEventListener("click", showForm,false);
