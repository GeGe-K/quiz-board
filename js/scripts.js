//value="10" for 10 marks, value="0" for 0 marks assigned to the radio buttons
// Business Logic
$(document).ready(function(){
  $("form#quiz-board").submit(function(event){
    var qsn1 = $("input:radio[name = qsn1]:checked").val();
    var qsn2 = $("input:radio[name = qsn2]:checked").val();
    var qsn3 = $("input:radio[name = qsn3]:checked").val();
    var total = parseInt(qsn1)+parseInt(qsn2)+parseInt(qsn3);
    $("#total").text("Your total is" + total);
// Front-End
    $("button").click(function() {
      $("#total-showing").toggle();
      $("#quiz-board-hidden").toggle();
    });
    $("form#quiz-board").hide();
    $("#total").show();

    event.preventDefault();
  });
  $("#reload").click(function() {
    location.reload();
  })
})
