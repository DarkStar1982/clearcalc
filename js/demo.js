function show_dialog(element_ref, dialog_ref, text_message)
{
  var prev_background = document.body.style.background;
  document.body.style.background = "#7F7F7F";
  var button_yes = document.getElementsByClassName('button_yes')[0];
  var button_cancel = document.getElementsByClassName('button_cancel')[0];

  button_yes.addEventListener('click', function() {
        document.body.style.background = prev_background;
        dialog.close();
        update_page(element_ref, text_message+" 'Yes'");
      });
  var dialog = dialog_ref;

  button_cancel.addEventListener('click', function() {
        document.body.style.background = prev_background;
        dialog.close();
        update_page(element_ref, text_message+" 'Cancel'");
      });
  var dialog = document.getElementById('template_dialog');

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    //-- Safari stub -->
    alert("The <dialog> API is not supported by this browser");
  }
}

function update_page(element_ref, text_message)
{
    element_ref.innerHTML=text_message;
}
