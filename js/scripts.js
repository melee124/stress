//business

//ui
$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptomTotal = $(this).val();
      console.log(symptomTotal);
    });
  });
});
