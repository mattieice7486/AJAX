$(document.body).on("click", ".btn", function() {
    
    var subject = $(this).attr("animal-type");
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
      $("#add-subject").on("click", function(event) {
        event.preventDefault();
        var subjectTask = $("#subject").val().trim();
        var newButton = $("<button>");
  
        newButton.attr("animal-type", $("#subject").val().trim());
        newButton.addClass("btn btn-primary");
        newButton.append(subjectTask);

        $("#button-div").append(" ");
        $("#button-div").append(newButton);
        $("#subject").val("");

      });
