$(document).ready(function() {
  //create array for initial themes

  var topics = ["tennis", "rugby", "croquet"];

  //Loops through array to make the buttons

  for (i = 0; i < topics.length; i++) {
    $("#searchDiv").prepend(
      "<button class='resultsButton' data-topic=" +
        topics[i] +
        ">" +
        topics[i] +
        "</button>"
    );
  }
  //input text field for new buttons

  
//   $(".resultsButton").on("click", function() {


//     console.log("you just clicked the results button");

//     var searchString = $(this).attr("data-topic");

//     var queryURL =
//       "https://api.giphy.com/v1/gifs/search?q=" +
//       searchString +
//       "&api_key=7ICApg1Tm6BdKtIJ7k5hHwUNzEhoH8JV";

//     console.log("Does this match the button", searchString);

//     var resultsGIF = [];

//     // Constructing a URL to search Giphy for the name of the person who said the quote

//     // Performing our AJAX GET request
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       // After the data comes back from the API
//       .then(function(response) {
//         // Storing an array of results in the results variable
//         var resultsGIF = response.data;

//         // Looping over every result item
//         for (var i = 0; i < resultsGIF.length; i++) {
//           // Only taking action if the photo has an appropriate rating
//           if (
//             resultsGIF[i].rating !== "r" &&
//             resultsGIF[i].rating !== "pg-13"
//           ) {
//             // Creating a div for the gif
//             var gifDiv = $("<div>");

//             // Storing the result item's rating
//             var rating = resultsGIF[i].rating;

        
//             // Creating an image tag
//             var gifImage = $("<img>");

//               // Creating a paragraph tag with the result item's rating

//             var ratingP = $("<p>").text("Rating: " + rating);

//             // Giving the image tag an src attribute of a proprty pulled off the
//             // result item
//             gifImage.attr("src", resultsGIF[i].images.fixed_height.url);

//             // Appending the paragraph and personImage we created to the "gifDiv" div we created
            
//             gifDiv.append(gifImage);
//             gifDiv.append(ratingP);
           

//             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#resultsDiv").prepend(gifDiv);
//           }
//         }
//       });
//   });

  $(".clickSearch").on("click", function() {
    // return false;

    console.log("you just clicked the search button");
    var buttonSearchString = $("#buttonSearch")
      .val()
      .trim();

      //$("#buttonSearch").empty(); - this didn't work to clear buttons

    console.log("what is this new search string", buttonSearchString);

    //pushes search field input in to array

    topics.push(buttonSearchString);

    console.log("this is after pushing to the array - new array", topics);

    //empties seachDiv so buttons are repeated by for loop

    $("#searchDiv").empty();
    

    //Loops through array to make the buttons

    for (i = 0; i < topics.length; i++) {
        $("#searchDiv").prepend(
          "<button class='resultsButton' data-topic=" +
            topics[i] +
            ">" +
            topics[i] +
            "</button>"
        );
      }

    
  });

//   $(".resultsButton").on("click", function() {

    $(document).on('click', '.resultsButton', function(){ 
        // Your Code
//    });


    console.log("you just clicked a results button");

    var searchString = $(this).attr("data-topic");

    console.log("Does this match the button", searchString);

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      searchString +
      "&api_key=7ICApg1Tm6BdKtIJ7k5hHwUNzEhoH8JV";

      console.log("queryURL",queryURL);

  

    

    var resultsGIF = [];



    //  AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {
       
        var resultsGIF = response.data;

       
        for (var i = 0; i < resultsGIF.length; i++) {
       
          if (
            resultsGIF[i].rating !== "r" &&
            resultsGIF[i].rating !== "pg-13"
          ) {
          
            var gifDiv = $("<div>");
        
            var ratingGIF = resultsGIF[i].rating;
         
            var gifImage = $("<img>");

            var ratingP = $("<p>").text("Rating: " + ratingGIF);

            gifImage.attr("src", resultsGIF[i].images.fixed_height.url);

        
            gifDiv.append(gifImage);
            gifDiv.append(ratingP);
           
            $("#resultsDiv").prepend(gifDiv);
          }
        }
      });
  });

});
