$(document).ready(function() {

  // Mobile navigation menu
  $(".nav-small").change(function(e) {
    window.location = '/tag/'+ e.target.value;
  })
  
});
