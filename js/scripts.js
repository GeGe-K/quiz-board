//value="10" for 10 marks, value="0" for 0 marks assigned to the radio buttons
//
// // Business Logic
// var choises = [];
// var total = 0;
// var tabulate = function(){
//   for (i=1; i<=3; i++){
//     var answer = parseInt($("input:radio[name=qsn "+ i +"]:checked").val());
//      if(isNaN(answer)){
//        alert("Please ensure you fill all questions");
//      }
//      else {
//        answer.push(answer);
//      }//
// // Business Logic
// var choises = [];
// var total = 0;
// var tabulate = function(){
//   for (i=1; i<=3; i++){
//     var answer = parseInt($("input:radio[name=qsn "+ i +"]:checked").val());
//      if(isNaN(answer)){
//        alert("Please ensure you fill all questions");
//      }
//      else {
//        answer.push(answer);
//      }

// for (i = 1; i <= 3; i++) {
// var answer = $("input:radio[name=qsn"+i+"]:checked").val();
// userInputs.push(answer);
// }

//   alert(answer);
//   alert(choises);
// });
// var total = 0;
// var tabulate = function(){
//   var i=1
//   // userInputs.forEach(function(userInput){
//    var answer = $("input:radio[name=qsn"+i+"]:checked").val();
//    // userInputs.push(answer);
//    i+=1;
//    if (answer===10){
//      total
//    }
//  });
document.ready(getElementById(){
  $("form#quiz-board").submit(function(event){
    var qsn1 = $("input:radio[name = qsn1]:checked").val();
    var qsn2 = $("input:radio[name = qsn2]:checked").val();
    var qsn3 = $("input:radio[name = qsn3]:checked").val();
    var total = parseInt(qsn1)+parseInt(qsn2)+parseInt(qsn3);
    $("#display").text("Your total is" + total);

    







  };
};
