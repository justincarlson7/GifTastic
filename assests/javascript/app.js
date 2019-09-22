

$(document).ready(function () {

    var searchString
    var topics = ["tennis", "rugby", "croquet"];



var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchString + "&api_key=7ICApg1Tm6BdKtIJ7k5hHwUNzEhoH8JV";


// for (var i = 0; i < topics.length; i++) {
//     var topicButton = $("<p>").text(toDoItem);

for(i=0;i<topics.length;i++)
{
   console.log(topics[i])
}
    
});


    // // var html = "";
    // for (i = 0 ; i < 3 ; i++)
    //     // html = "<button data-topic="topics[i]"> "topics[i]"</button>";
    // $("#search-terms").prepend("<button data-topic="topics[i]"> "topics[i]"</button>");
    // });

// var topicButton = $("<p>").text("*" + toDoItem);



// $("button").on("click", function() {

 
  
//      var searchString = $("#button").val().trim();


//      //ajax to use API URL and searchString concat
//      $(ajax)
    
//      var newresult = $("<p>").text("*" + toDoItem);

//      //then prepend (use <div> tag) result image url into results div and include rating
     
//      $("#to-do").attr("id", "item-" + toDoCount);
//      




// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });
