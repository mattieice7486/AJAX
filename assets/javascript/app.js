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
          subjectImage.addClass("animate");
          var stillImage = $("<img>");
          stillImage.attr("src", results[i].images.fixed_height_still.url);
          stillImage.addClass("still");
          subjectDiv.append(p);
          subjectDiv.append(subjectImage);
          subjectDiv.append(stillImage);
          console.log(subjectImage);
          console.log(stillImage);
          $("#gifs").prepend(subjectDiv);
          $(document.body).on("click", ".animate", function() {
            // $(this).css(".animate {display: none}");
            // $(this).html(subjectImage);
            $(this).html(stillImage);
          });
          $(document.body).on("click", ".still", function() {
          //   $(this).css(".animate {display:block}");
            $(this).html(subjectImage);
          });
        };
      });
      
});    
      $("#add-subject").on("click", function(event) {
        if ($("#subject").val() == "") {} else {
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
