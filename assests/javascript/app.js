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

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      buttonSearchString +
      "&api_key=7ICApg1Tm6BdKtIJ7k5hHwUNzEhoH8JV&limit=10";

    console.log("queryURL", queryURL);

    var resultsGIF = [];

     //  AJAX GET request
     $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var resultsGIF = response.data;
  
        for (var i = 0; i < resultsGIF.length; i++) {
          if (resultsGIF[i].rating !== "r" && resultsGIF[i].rating !== "pg-13") {
            var gifDiv = $("<div>");
            var ratingGIF = resultsGIF[i].rating;
            var gifImage = $("<img>");
            var ratingP = $("<p>").text("Rating: " + ratingGIF);
            var stillImage = resultsGIF[i].images.fixed_height_still.url;
            var animatedImage = resultsGIF[i].images.fixed_height.url;
  
          //   var still = "still";
          //   var animate = "animate";
  
          gifImage.attr("src", stillImage);
          gifImage.attr("data-still", stillImage);
          gifImage.attr("data-animate", animatedImage);
          gifImage.attr('data-state', 'still');
          gifImage.addClass('searchGIF');
  
          //   gifImage.attr("src", resultsGIF[i].images.fixed_height.url);
          //   gifImage.attr("src", resultsGIF[i].images.fixed_height_still.url);
          //   gifImage.attr("data-still", resultsGIF[i].images.fixed_height_still.url);
          //   gifImage.attr("data-animate", resultsGIF[i].images.fixed_height.url);
  
          //   $(gifImage).attr({
          //     src: resultsGIF[i].images.fixed_height_still.url,
          //     "data-still": resultsGIF[i].images.fixed_height_still.url,
          //     "data-animate": resultsGIF[i].images.fixed_height.url,
          //     "date-state": "still"
          //   });
  
            gifDiv.append(gifImage);
            gifDiv.append(ratingP);
  
            $("#resultsDiv").prepend(gifDiv);
  
           
        
        }
      }
    });
  });

  //   $(".resultsButton").on("click", function() {

  $(document).on("click", ".resultsButton", function() {
    console.log("you just clicked a results button");

    var searchString = $(this).attr("data-topic");

    console.log("Does this match the button", searchString);

    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      searchString +
      "&api_key=7ICApg1Tm6BdKtIJ7k5hHwUNzEhoH8JV&limit=10";

    console.log("queryURL", queryURL);

    var resultsGIF = [];

    //  AJAX GET request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var resultsGIF = response.data;

      for (var i = 0; i < resultsGIF.length; i++) {
        if (resultsGIF[i].rating !== "r" && resultsGIF[i].rating !== "pg-13") {
          var gifDiv = $("<div>");
          var ratingGIF = resultsGIF[i].rating;
          var gifImage = $("<img>");
          var ratingP = $("<p>").text("Rating: " + ratingGIF);
          var stillImage = resultsGIF[i].images.fixed_height_still.url;
          var animatedImage = resultsGIF[i].images.fixed_height.url;

        //   var still = "still";
        //   var animate = "animate";

        gifImage.attr("src", stillImage);
        gifImage.attr("data-still", stillImage);
        gifImage.attr("data-animate", animatedImage);
        gifImage.attr('data-state', 'still');
        gifImage.addClass('searchGIF');

        //   gifImage.attr("src", resultsGIF[i].images.fixed_height.url);
        //   gifImage.attr("src", resultsGIF[i].images.fixed_height_still.url);
        //   gifImage.attr("data-still", resultsGIF[i].images.fixed_height_still.url);
        //   gifImage.attr("data-animate", resultsGIF[i].images.fixed_height.url);

        //   $(gifImage).attr({
        //     src: resultsGIF[i].images.fixed_height_still.url,
        //     "data-still": resultsGIF[i].images.fixed_height_still.url,
        //     "data-animate": resultsGIF[i].images.fixed_height.url,
        //     "date-state": "still"
        //   });

          gifDiv.append(gifImage);
          gifDiv.append(ratingP);

          $("#resultsDiv").prepend(gifDiv);

         
      
      }

      
    };

 
  });

  
//   $(document).on("click", ".gif", function() {
//     console.log("you clicked the button for animated gifs");

//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(".gif").attr("data-state");

//     console.log(state);
 
//   });
});

$(document).on('click', '.searchGIF', function(){

  console.log("you clicked the button for animated gifs");
  var state = $(this).attr('data-state');

  console.log(state);

  if(state == 'still'){

      console.log("if statement started");
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animated');
  } else{
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
  }
})

});