/*
   Lab 12 - Sorting Hat
   Author: Adam Sinclair
   Date: 2025
   Description: Sorts a name into a fictional house using string length and modulo
*/

function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;
  if (mod === 0) {
    return "Hufflepuff";
  } else if (mod === 1) {
    return "Ravenclaw";
  } else if (mod === 2) {
    return "Gryffindor";
  } else {
    return "Slytherin";
  }
}

$("#button").click(function(){
  let name = $("#input").val();
  let house = sortingHat(name);
  $("#output").append("<p>The Sorting Hat has sorted you into <strong>" + house + "</strong>!</p>");
});
