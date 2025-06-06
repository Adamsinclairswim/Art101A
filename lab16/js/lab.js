// lab.js16
// Adam Sinclair
// june 5th 2025
$(document).ready(function() {
    // Make an API call to XKCD
    $.ajax({
        url: "https://xkcd.com/info.0.json", // API endpoint for XKCD comic
        type: "GET",
        dataType: "json", // Expecting JSON data from the API
        success: function(comicObj) {
            // On success, display the comic
            var comicHTML = `
                <h2>${comicObj.title}</h2>
                <img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">
            `;
            $('#output').html(comicHTML); // Insert the comic into the output div
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Handle errors
            console.log("Error:", textStatus, errorThrown);
        }
    });
});
