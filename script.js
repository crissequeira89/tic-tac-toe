// Variables:

var nextPlayer = "X";
var lastTurn = false;
var turn = 1;
var getSquare = "";
var squareSelected = "";

// Variables that check if a square has already been selected:

var stl = false;
var stc = false;
var str = false;
var scl = false;
var sm = false;
var scr = false;
var sbl = false;
var sbc = false;
var sbr = false;

// Variables to check which player marked each square:

var stlInner = "";
var stcInner = "";
var strInner = "";
var sclInner = "";
var smInner = "";
var scrInner = "";
var sblInner = "";
var sbrInner = "";
var sbcInner = "";

// Functions:

// Invoked whenever the player clicks/taps on one of the squares. Determines which turn in this round is being played. There can be a maximum of 9 turns.
function roundTurn(getSquare) {
  squareSelected = getSquare;
  switch (turn) {
    case 1:
      squareTaken();
      break;
    case 2:
      squareTaken();
      break;
    case 3:
      squareTaken();
      break;
    case 4:
      squareTaken();
      break;
    case 5:
      squareTaken();
      break;
    case 6:
      squareTaken();
      break;
    case 7:
      squareTaken();
      break;
    case 8:
      squareTaken();
      break;
    case 9:
      lastTurn = true;
      squareTaken();
  }
}

// Calls the functions necessary to prepare for the next turn.
function prepareNextTurn() {
  squareSelection();
  turnLog();
}

// Changes the CSS “display” property of the “button” element to “table” to make it visible.
function showButton() {
  document.getElementById("button").style.display = "table";
}

// Draws the current player’s symbol on the square.
function drawXorO() {
  document.getElementById(squareSelected).innerHTML = nextPlayer;
}

// Applies color to the symbol based on who’s turn it was. O is red and X is blue.
function colorSymbol() {
  if (nextPlayer == "O") {
    document.getElementById(squareSelected).style.color = "red";
  } else {
    document.getElementById(squareSelected).style.color = "blue";
  }
}

// Outputs text on the console indicating the turn number and player.
function turnLog() {
  console.log("Turn " + turn + " ended. " + nextPlayer + " just played.");
}

// Determines which player’s turn it is and assigns an O or an X accordingly.
function playerTurn() {
  if (nextPlayer == "X") {
    nextPlayer = "O";
    document.getElementById("scoreboard").innerHTML = "Turn: O";
  } else {
    nextPlayer = "X";
    document.getElementById("scoreboard").innerHTML = "Turn: X";
  }
}

// Displays the winner of the round.
function playerWon() {
  if ((nextPlayer == "X") & (lastTurn == true)) {
  } else if (nextPlayer == "X") {
    nextPlayer = "O";
  } else {
    nextPlayer = "X";
  }
  console.log(nextPlayer + " won the round.");
  document.getElementById("scoreboard").innerHTML = nextPlayer + " won the round.";
  turn = 0;
  showButton();
}

// Invoked in case of a draw.
function roundDraw() {
  document.getElementById("scoreboard").innerHTML = "Draw.";
  turn = 0;
  showButton();
}

// Determines which square was selected.
function squareSelection() {
  switch (squareSelected) {
    case "stl":
      console.log(nextPlayer + " just selected the top left square.");
      break;
    case "stc":
      console.log(nextPlayer + " just selected the top center square.");
      break;
    case "str":
      console.log(nextPlayer + " just selected the top right square.");
      break;
    case "scl":
      console.log(nextPlayer + " just selected the center left square.");
      break;
    case "sm":
      console.log(nextPlayer + " just selected the middle square.");
      break;
    case "scr":
      console.log(nextPlayer + " just selected the center right square.");
      break;
    case "sbl":
      console.log(nextPlayer + " just selected the bottom left square.");
      break;
    case "sbc":
      console.log(nextPlayer + " just selected the bottom center square.");
      break;
    case "sbr":
      console.log(nextPlayer + " just selected the bottom right square.");
  }
}

// Checks the square selected to verify if it is already taken.
function squareTaken() {
  switch (squareSelected) {
    case "stl":
      stlInner = nextPlayer;
      if ((stl == true) & (turn == 9)) {
        console.log("The top left square is already taken.");
      } else if ((stl == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (stl == false) {
        drawXorO();
        colorSymbol();
        stl = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The top left square is already taken.");
      }
      break;
    case "stc":
      stcInner = nextPlayer;
      if ((stc == true) & (turn == 9)) {
        console.log("The top center square is already taken.");
      } else if ((stc == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (stc == false) {
        drawXorO();
        colorSymbol();
        stc = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The top center square is already taken.");
      }
      break;
    case "str":
      strInner = nextPlayer;
      if ((str == true) & (turn == 9)) {
        console.log("The top right square is already taken.");
      } else if ((str == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (str == false) {
        drawXorO();
        colorSymbol();
        str = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The top right square is already taken.");
      }
      break;
    case "scl":
      sclInner = nextPlayer;
      if ((scl == true) & (turn == 9)) {
        console.log("The center left square is already taken.");
      } else if ((scl == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (scl == false) {
        drawXorO();
        colorSymbol();
        scl = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The center left square is already taken.");
      }
      break;
    case "sm":
      smInner = nextPlayer;
      if ((sm == true) & (turn == 9)) {
        console.log("The middle square is already taken.");
      } else if ((sm == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (sm == false) {
        drawXorO();
        colorSymbol();
        sm = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The middle square is already taken.");
      }
      break;
    case "scr":
      scrInner = nextPlayer;
      if ((scr == true) & (turn == 9)) {
        console.log("The center right square is already taken.");
      } else if ((scr == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (scr == false) {
        drawXorO();
        colorSymbol();
        scr = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The center right square is already taken.");
      }
      break;
    case "sbl":
      sblInner = nextPlayer;
      if ((sbl == true) & (turn == 9)) {
        console.log("The bottom left square is already taken.");
      } else if ((sbl == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (sbl == false) {
        drawXorO();
        colorSymbol();
        sbl = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The bottom left square is already taken.");
      }
      break;
    case "sbc":
      sbcInner = nextPlayer;
      if ((sbc == true) & (turn == 9)) {
        console.log("The bottom center square is already taken.");
      } else if ((sbc == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (sbc == false) {
        drawXorO();
        colorSymbol();
        sbc = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The bottom center square is already taken.");
      }
      break;
    case "sbr":
      sbrInner = nextPlayer;
      if ((sbr == true) & (turn == 9)) {
        console.log("The bottom right square is already taken.");
      } else if ((sbr == false) & (turn == 9)) {
        drawXorO();
        colorSymbol();
        prepareNextTurn();
        checkIfRow();
      } else if (sbr == false) {
        drawXorO();
        colorSymbol();
        sbr = true;
        prepareNextTurn();
        playerTurn();
        turn++;
        checkIfRow();
      } else {
        console.log("The bottom right square is already taken.");
      }
  }
}

// Checks if a player has won this round.
function checkIfRow() {
  switch (squareSelected) {
    case "stl":
      if ((stlInner == stcInner) & (stlInner == strInner)) {
        playerWon();
      } else if ((stlInner == sclInner) & (stlInner == sblInner)) {
        playerWon();
      } else if ((stlInner == smInner) & (stlInner == sbrInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "stc":
      if ((stcInner == stlInner) & (stcInner == strInner)) {
        playerWon();
      } else if ((stcInner == smInner) & (stcInner == sbcInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "str":
      if ((strInner == stcInner) & (strInner == stlInner)) {
        playerWon();
      } else if ((strInner == scrInner) & (strInner == sbrInner)) {
        playerWon();
      } else if ((strInner == smInner) & (strInner == sblInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "scl":
      if ((sclInner == smInner) & (sclInner == scrInner)) {
        playerWon();
      } else if ((sclInner == stlInner) & (sclInner == sblInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "sm":
      if ((smInner == sclInner) & (smInner == scrInner)) {
        playerWon();
      } else if ((smInner == stcInner) & (smInner == sbcInner)) {
        playerWon();
      } else if ((smInner == stlInner) & (smInner == sbrInner)) {
        playerWon();
      } else if ((smInner == sblInner) & (smInner == strInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "scr":
      if ((scrInner == smInner) & (scrInner == sclInner)) {
        playerWon();
      } else if ((scrInner == strInner) & (scrInner == sbrInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "sbl":
      if ((sblInner == sbcInner) & (sblInner == sbrInner)) {
        playerWon();
      } else if ((sblInner == sclInner) & (sblInner == stlInner)) {
        playerWon();
      } else if ((sblInner == smInner) & (sblInner == strInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "sbc":
      if ((sbcInner == sblInner) & (sbcInner == sbrInner)) {
        playerWon();
      } else if ((sbcInner == smInner) & (sbcInner == stcInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
      break;
    case "sbr":
      if ((sbrInner == sbcInner) & (sbrInner == sblInner)) {
        playerWon();
      } else if ((sbrInner == scrInner) & (sbrInner == strInner)) {
        playerWon();
      } else if ((sbrInner == smInner) & (sbrInner == stlInner)) {
        playerWon();
      } else if (lastTurn == true) {
        roundDraw();
      }
  }
}

// All possible winning combinations

// Invoked whenever one of the players clicks/taps the “Play again!” button at the end of turn 9.
function newRound() {
  lastTurn = false;
  turn = 1;
  nextPlayer = "X";
  document.getElementById("scoreboard").innerHTML = "Turn: " + nextPlayer;
  document.getElementById("stl").innerHTML = "";
  document.getElementById("stc").innerHTML = "";
  document.getElementById("str").innerHTML = "";
  document.getElementById("scl").innerHTML = "";
  document.getElementById("sm").innerHTML = "";
  document.getElementById("scr").innerHTML = "";
  document.getElementById("sbl").innerHTML = "";
  document.getElementById("sbc").innerHTML = "";
  document.getElementById("sbr").innerHTML = "";
  stl = false;
  stc = false;
  str = false;
  scl = false;
  sm = false;
  scr = false;
  sbl = false;
  sbc = false;
  sbr = false;
  stlInner = "";
  stcInner = "";
  strInner = "";
  sclInner = "";
  smInner = "";
  scrInner = "";
  sblInner = "";
  sbcInner = "";
  sbrInner = "";
  document.getElementById("button").style.display = "none";
}