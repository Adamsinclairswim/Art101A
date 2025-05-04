/*
 * Author: Adam Sinclair
 * Date: 5/4/2025
 * Description: lab 7 name work
 */
// This function prompts the user for their name, sorts the letters, and displays the result
function getSortedUserName() {
    let userName = window.prompt("Please enter your name:");
  
    if (userName) {
      let sortedName = userName.split('').sort().join('');
      document.getElementById("output").innerText = "Your sorted name is: " + sortedName;
    } else {
      document.getElementById("output").innerText = "You didn't enter a name.";
    }
  }
  