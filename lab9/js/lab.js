/*
   Requirements: jQuery must be loaded for this script to work.
   Instructor:Wes modes
   Author: Adam Sinclair
   Date: 2025
*/

// Add buttons to each section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Add click event listeners
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

$("#button-results").click(function(){
  $("#results").toggleClass("special");
});
