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


$("#submit").click(function() {
  
  const userName = $("#user-name").val();

 
  const userNameSorted = sortString(userName);

  
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
