$("button").on("click", function() {
    
    var subject = $(this).attr("data-subject");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;
        console.log(queryURL);

        console.log(response);
        for (var i = 0; i < results.length; i++) {

          var subjectDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var subjectImage = $("<img>");
          subjectImage.attr("src", results[i].images.fixed_height.url);

          subjectDiv.append(p);
          subjectDiv.append(subjectImage);

          $("#gifs").prepend(subjectDiv);
        };
      });
});