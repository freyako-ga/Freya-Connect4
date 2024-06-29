// ! As a user i want to be able to open up the game and play connect 4
//  ** create a grid using .grid

// ! As a user i want to be able to see who's turn it is 

// * player selected to start 
//          + needs a variable (spade/diamond)
//          + call it turn 

// * Message needs to be displayed to show who's turn it is
//           + create a function called updateMessage

// ! As a user I want to be able to place a counter on the grid
// * clickevent on grid cells
//              + use event.target.id to target the index thats been clicked
//              + define a columns array containing arrays of every single column on the board - each oclumn array should contain the indexes of the cells iwthin the column
//              + find the column array containing the event.target.id
//              + once the column has been found we want to find the lowest avaialble cell 

// ! As a user I want to be able to play with another player
//              + create a function called switchPlayer

// ! As a user I want to be able to see if I've won
//              + create a function called checkforWin
//              + if combo is 4 whether it's rows/cols/diags, win
//              + use the arrays to pick out which 4s are consecutive with the 

// ! As a user I want to be able to see if it's a tie 
//              + checkforTie function
//              + check if i have any counters space left on the grid
//              + if there are no free cells, then end the game 

// ! As a user I want to be able to reset the game 
//              + create a function called resetGame
//              + here reset the diamond and spade buttons to 0 so make a resetVariables functions and add this in here
//              + update the display so add this in (updateMessage)





/*-------------------------------- Constants --------------------------------*/
//grid creation
const width = 6
const height = 7
const totalSquarecount = width * height
const squareEls = []

const diags = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29],
    [2, 9, 16, 23,],
    [3, 8, 13, 18],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25, 30],
    [6, 13, 20, 27, 34, 41],
    [11, 16, 21, 26, 31, 36],
    [12, 19, 26, 33, 40],
    [17, 22, 27, 32, 37],
    [18, 25, 32, 39]
]

const rows = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41]
]

const cols = [
    [0, 6, 12, 18, 24, 30, 36],
    [1, 7, 13, 19, 25, 31, 37],
    [2, 8, 14, 20, 26, 32, 38],
    [3, 9, 15, 21, 27, 33, 39],
    [4, 10, 16, 22, 28, 34, 40],
    [5, 11, 17, 23, 29, 35, 41]
]



/*---------------------------- Variables (state) ----------------------------*/

// * player selected to start 
//          + needs a variable (spade/diamond)
//          + call it turn 
let turn 
let winner
let tie


/*------------------------ Cached Element References ------------------------*/

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result-display')
const diamond = document.querySelector('#diamond')
const spade = document.querySelector('#spade')
const reset = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/

//Grid creation


for (let i = 0; i < totalSquarecount; i++) {
    const square = document.createElement('div')
    square.classList.add('sqr')
    square.id = i
    // square.innerText = i
    square.style.height = `${95.5 / height}%`
    square.style.width = `${100 / width}%`
    squareEls.push(square)
    grid.appendChild(square)
    square.setAttribute('data-index', i)
}

// create a function called updateMessage

const updateMessage = () => {
    if (winner === true) {
        resultDisplay.textContent = `${turn} wins!!`
    } else if (tie === true) {
        resultDisplay.textContent = 'Draw! Start Again'
    } else {
        resultDisplay.textContent = `${turn}'s turn!`
    }
    // * Message needs to be displayed to show who's turn it is
}


// ? As a user I want to be able to reset the game 
//              + create a function called resetGame
//              + here reset the diamond and spade buttons to 0 so make a resetVariables functions and add this in here
//              + update the display so add this in (updateMessage)

const resetBoard = () => {
    // remove all counters to reset the board
    squareEls.forEach(el => el.classList.remove('counter', 'diamond', 'spade'))
}


const handleClick = (event) => {
    //  use event.target.id to target the index thats been clicked
    const index = Number(event.target.id)
    placePiece(index)
    // check first for win
    checkForWinner()
    // check for draw
    checkForDraw()
    //update the message board
    updateMessage()
    // switch player
    switchPlayer()
}




// ? As a user I want to be able to see if I've won
//              + create a function called checkforWin
//              + if combo is 4 whether it's rows/cols/diags, win
//              + use the arrays to pick out which 4s are consecutive with the 

const checkForWinner = () => {
    cols.forEach(col => {
        let combo = 0 
        col.forEach(index => {
            const cell = squareEls[index]
            if (cell.classList.contains(turn)) {
                combo +=1
            } else { 
                combo = 0
            }
            if (combo === 4) {
                endGame()
            }
        })
    })
    rows.forEach(rows => {
        let combo = 0
        rows.forEach(index => {
            const cell =squareEls[index]
            if (cell.classList.contains(turn)) {
                combo +=1
            } else {
                combo = 0
            } if (combo === 4) {
                endGame()
            }
        })
    })
    diags.forEach(diags => {
        let combo = 0
        diags.forEach(index => {
            const cell =squareEls[index]
            if (cell.classList.contains(turn)) {
                combo +=1
            } else {
                combo = 0
            } if (combo === 4) {
                endGame()
            }
        })
    })
    switchPlayer()
}





// ? As a user I want to be able to see if it's a tie 
//              + checkforTie function
//              + check if i have any counters space left on the grid
//              + if there are no free cells, then end the game 

checkForDraw = () => {
    tie = squareEls.every(el => el.classList.contains('counter') === true)
    updateMessage()
    switchPlayer()
}

// end game once there's a winner
const endGame = () => {
    winner = true
}


const placePiece = (index) => {
    //  find the cols array containing the index
    let foundColumn
    cols.forEach(col => {
        const indexInArray = col.includes(index)

        if (indexInArray === true) {
            foundColumn = col
        }
    })



    // * once the column has been found we want to find the lowest avaialble cell 
    // check each cell in found column to find if there is a class of counter, if there is not, place piece at the bottom of each coloumn
    let lowestFreeCell
    foundColumn.forEach(index => {
        const cell = squareEls[index]
        // adding a class to the cell
        if (cell.classList.contains('counter') === false) {
            lowestFreeCell = cell
        }
    
    })
    console.log(lowestFreeCell)

        if (lowestFreeCell) { 
            lowestFreeCell.classList.add('counter', turn) 
        }
}


// ? As a user I want to be able to play with another player
//              + create a function called switchPlayer
const switchPlayer = () => {
    if (turn === 'diamond') {
        turn = 'spade'
    } else {
        turn = 'diamond'
    }
}


const resetVariables = () => {
    //              + here reset the diamond and spade buttons to 0 so make a resetVariables functions and add this in here
    winner = false
    turn = 'diamond'
    tie = false
    console.log('')
}

// resetting the game updates each executions
const resetGame = () => {
    resetVariables()
    resetBoard()
    updateMessage()
    console.log('resetGame')
}
// /*----------------------------- Page Load -----------------------------*///

resetGame()

// /*----------------------------- Event Listeners -----------------------------*///

squareEls.forEach(squareEl => {
    squareEl.addEventListener('click', handleClick);
})

reset.addEventListener('click', resetGame)

