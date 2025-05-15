/*
   lab.js - This JavaScript/jQuery script appends random sentences to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Adam Sinclair
   Date: 2025
*/

// Array of real example sentences
const sentences = [
  "HI how are you doing?",
  "I love learning JavaScript it's fun and powerful.",
  "Santa Cruz is such a beautiful place to study and train.",
  "Let's go for a bike ride this weekend!",
  "Coding gets easier the more you practice it.",
  "What do you think about AI and ethics?",
  "I'm working on my ART101 lab right now!",
  "Sometimes a little debugging goes a long way.",
  "Don't forget to commit your changes to GitHub!",
  "This lab is a great way to experiment with jQuery."
];



// Function to get a random sentence
function generateRandomText() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

// Click listener for button
$("#make-convo").click(function () {
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
