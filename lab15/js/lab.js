// lab15.js - Using jQuery and AJAX to get API data
// Author: Your Name
// Date: 2025-06-02

$("#activate").click(function(){
  console.log("Button clicked!");
  $.ajax({
    url: "https://yesno.wtf/api",
    type: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data);
      $("#output").html(`
        <p><strong>Answer:</strong> ${data.answer}</p>
        <img src="${data.image}" alt="answer gif" style="max-width:100%; border-radius:10px;">
      `);
    },
    error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
      $("#output").html("<p>Something went wrong. Try again!</p>");
    }
  });
});
