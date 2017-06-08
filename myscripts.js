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