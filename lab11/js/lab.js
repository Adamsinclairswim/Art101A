/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Adam Sinclair
   Date: 2025
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // Convert string to array, sort it, then rejoin
  return inputString.split('').sort().join('');
}

// Click listener for submit button
$("#submit").click(function() {
  // Get value from the input field
  const userName = $("#user-name").val();

  // Sort the characters in the name
  const userNameSorted = sortString(userName);

  // Output the sorted name in a styled div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
