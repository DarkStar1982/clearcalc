function show_dialog(element_ref)
{
  var id = element_ref.id;
  var dialog = document.getElementById('template_dialog');
  dialog.returnValue = 'favAnimal';

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    //-- Safari stub -->
    // confirm("No, this is "+id);
    alert("The <dialog> API is not supported by this browser");
  }
}
