// ** create a grid using .container
//  ** create function of .message this is to show whose turn it is & current game state (win tie etc.)
//  ** create function called init ( this function will reset the global variables to start position)
//  ** run init() to clear container and set player turn
//  ** create variables for players (diamond, ace), container (create an array of 42 empty strings for each square), win & tie
//  ** create function called render to update container & message
// 
// As a user i want to be able to see the board state update after my move
//  ** create a function called render() to utilise the functions updateContainer & updateMessage which is called in at the end of handleClick function (render should also be used in the init function!)
//  
//  As a user i want to be able to take turns with another player
//  ** create a function called switchPlayerTurn ()
//  ** have func switchPlayerTurn run as part of the handleClick event
//  As a user i want to be able to clearly see whose turn it is on the screen
//  ** create functions for updateContainer & updateMessage to clearly see the current game state
//  ** call on these functions inside the render () function

//  As a user i want to be able to drop my disc into a column when i make a move
//  ** create a const called sqaureELs (remember querySelectorAll) to target all sqaures within the container
//  ** create a eventListener targeting sqaureELs the event listener has to run through each square using a forEach method on 'click'
//  ** create a function called handleClick. this will provide the event listener for squareELs with information on what to do for 'click' (make sure to add this to the squareEls eventListener!)
//  
// As a user i want to know when i have won the game so i can celebrate
//  ** create a function called checkForWinner(), this will check the winningCombos against current game state at the end of each turn
//  ** create a const called winningCombos containing an array of nested arrays that state each winning combo there is (target index of each square) [0,1,2,3], [3,4,5,6] etc
//  (better wincon is on click event it checks )

//  As a user i want to know when the game is a tie so that i can start a new game
//  ** create a function called checkForTie, within this function the computer will check each square for empty strings

//  As a user i want to be able to press a button to reset the game after a win or tie
//  ** create a button in html (#button .reset)
//  ** create a const called resetBtnEl to getElementId of reset in the html
//  ** then create an eventListener in js that calls on the element (resetBtnEL) and clears the container & message Els (init)