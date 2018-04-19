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
          subjectImage.attr("primary", results[i].images.fixed_height.url);
          subjectImage.attr("alternate", results[i].images.fixed_height_still.url)
          subjectImage.addClass("animate");

          subjectDiv.append(p);
          subjectDiv.append(subjectImage);
          $("#gifs").prepend(subjectDiv);
          $(document.body).on("click", "img", function() {
            var state = $(this).attr("class");
            if (state === "still") {
              $(this).attr("src", $(this).attr("primary"));
              $(this).attr("class", "animate");
            } else {
              $(this).attr("src", $(this).attr("alternate"));
              $(this).attr("class", "still");
            }
            console.log(subjectImage);
            
          });
         
        };
      });
      
});    
      $("#add-subject").on("click", function(event) {
        if ($("#subject").val() == "") {
          return false
        } else {
        event.preventDefault();
        var subjectTask = $("#subject").val().trim();
        var newButton = $("<button>");
  
        newButton.attr("animal-type", $("#subject").val().trim());
        newButton.addClass("btn btn-primary");
        newButton.append(subjectTask);

        $("#button-div").append(" ");
        $("#button-div").append(newButton);
        $("#subject").val("");
      };
    });
