// WORKS JUST FINE, REFERENCES USER'S VARIABLES AS INDEX IN FOR LOOP.

// $(document).ready(function(){
//   $("#numbers").submit(function(event) {
//     var userArray = [];
//     var userCountTo = parseInt($("#countTo").val());
//     var userCountBy = parseInt($("#countBy").val());
//
//     for (userCountTo; userCountTo > 0 ; userCountTo -= 1) {
//       if ( (userCountTo % userCountBy) === 0 ) {
//         userArray.push(userCountTo);
//         $("#results").prepend("<li>"+userCountTo+"</li>");
//       }
//       else {
//       }
//     }
//     event.preventDefault();
//   });
// });

$(document).ready(function(){
  $("#numbers").submit(function(event) {

    var userArray = [];
    var userCountTo = parseInt($("#countTo").val());
    var userCountBy = parseInt($("#countBy").val());

    if ( isNaN(userCountTo) || isNaN(userCountBy) || (userCountBy>userCountTo) ){
      $("#results").append("<li>"+"oh no!"+"</li>");
    }
    else {
      for (index = 1; index <= userCountTo ; index += 1) {
        if ( (index % userCountBy) === 0 ) {
          userArray.push(index); //UNREQUIRED LINE...
          $("#results").append("<li>"+index+"</li>");
        }
        else if (index){
          // $("#results").append("<li>"+"oh no!"+"</li>");
        }
        else {
          // $("#results").append("<li>"+"oh no!"+"</li>");
        }
      }
    };



    event.preventDefault();
  });
});
