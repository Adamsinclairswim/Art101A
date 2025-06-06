// Wait until the document is ready
$(document).ready(function() {
  console.log("Lab 16: XKCD JSON API");

  // URL to fetch the latest XKCD comic via AllOrigins proxy
  const apiURL = "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json";

  // Make the AJAX request
  $.ajax({
    url: apiURL,
    method: "GET",
    success: function(data) {
      console.log("Data received:", data);

      // Build HTML with comic info
      const comicHTML = `
        <h3>${data.title}</h3>
        <img src="${data.img}" alt="${data.alt}" width="500">
        <p><em>${data.alt}</em></p>
      `;

      // Inject the HTML into the page
      $("#output").html(comicHTML);
    },
    error: function(err) {
      console.error("Error loading comic:", err);
      $("#output").html("<p>Sorry, something went wrong fetching the comic.</p>");
    }
  });
});
