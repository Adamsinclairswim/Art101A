// Checkers Game
// Author: Adam Sinclair
// Date: 4/18/2025

//
// Set Up the Game
  //   Create an 8x8 board with alternating dark/light squares
  //   Place red and black pieces on the appropriate squares (first 3 rows for each)
  //   Set player turn (e.g., red starts first)
  //   Display initial board

// Handle Player Turns
  //   Highlight selectable pieces for the current player
  //   Wait for player to select a piece
  //   Highlight valid move options for that piece
  //   Wait for player to choose a valid move
  //   Move piece to new location
  //   If the move is a jump, remove the captured opponent piece
  //   If the piece reaches the last row, crown it a king
// Enforce Game Rules
  //   Only allow diagonal forward movement (unless king)
  //   Enforce jumps when available (mandatory capture)
  //   Prevent illegal moves

// Check for End of Game
  //   After each turn, check if a player has no legal moves
  //     If so, declare the other player the winner

// Switch Turns
  //   After a move, switch the turn to the other player
  //   If another jump is possible with the same piece, allow chained jump before switching

// End the Game
  //   Announce the winner
  //   Offer option to restart or exit the game

