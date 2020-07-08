let startStop = document.getElementById("button-start-stop");
var game_turn = "off";

// Game Ended
let gameEnd = document.getElementById("game-end")

// Dice
let dice = document.getElementById("dice");
let diceImage = document.getElementById("dice-image");

// Player one
let playerOneRoll = document.getElementById("player-one-roll");
let playerOneHold = document.getElementById("player-one-hold");
let playerOneRoundScore = document.getElementById("score-num-round-one")
let playerOneScore = document.getElementById("score-num-one")
playerOneRoll.style.display = "none";
playerOneHold.style.display = "none";

// Player two
let playerTwoRoll = document.getElementById("player-two-roll");
let playerTwoHold = document.getElementById("player-two-hold");
let playerTwoRoundScore = document.getElementById("score-num-round-two")
let playerTwoScore = document.getElementById("score-num-two")
playerTwoRoll.style.display = "none";
playerTwoHold.style.display = "none";

playerOneHold.style.transition = "all 1s";
startStop.style.transition = "all 1s";
startStop.style.transition = "all 1s";
gameEnd.style.transition = "all 1s";

function buttonsVisibility(game_turn) {

    if (game_turn === "off") {
        playerOneRoll.style.display = "none";
        playerOneHold.style.display = "none";
        playerTwoRoll.style.display = "none";
        playerTwoHold.style.display = "none";        
        playerOneScore.textContent = 0;
        playerTwoScore.textContent = 0;        
        startStop.textContent = "START";
        startStop.style.backgroundColor = "#0bd43d";        
        dice.src = "images/baby_pig.png";
    }
    if (game_turn === "one") {
        playerOneRoll.style.display = "block";
        playerOneHold.style.display = "block";
        playerTwoRoll.style.display = "none";
        playerTwoHold.style.display = "none";
        gameEnd.style.opacity = 0;        
    }
    if (game_turn === "two") {
        playerTwoRoll.style.display = "block";
        playerTwoHold.style.display = "block";
        playerOneRoll.style.display = "none";
        playerOneHold.style.display = "none";
    }
    if (game_turn === "end") {
        playerOneRoll.style.display = "none";
        playerOneHold.style.display = "none";
        playerTwoRoll.style.display = "none";
        playerTwoHold.style.display = "none";
        gameEnd.style.opacity = 1;        
        playerOneScore.textContent = 0;
        playerTwoScore.textContent = 0;  
        startStop.textContent = "START";
        startStop.style.backgroundColor = "#0bd43d";
        dice.src = "images/baby_pig.png";
    }
}

startStop.addEventListener("click", function() {
    
    if (startStop.textContent === "START") {
        startStop.style.backgroundColor = "#ff3d3d";
        startStop.textContent = "STOP";
        buttonsVisibility("one");                
    }
    else if (startStop.textContent === "STOP") {
        buttonsVisibility("off");
    }
    })

playerOneRoll.addEventListener("click", () => rollDiceOne())
playerOneHold.addEventListener("click", () => holdDiceOne())
playerTwoRoll.addEventListener("click", () => rollDiceTwo())
playerTwoHold.addEventListener("click", () => holdDiceTwo())

// Player one game start
function rollDiceOne() {
    let diceValue = (Math.floor(Math.random() * 6) + 1);
    dice.src = "images/dice_" + diceValue + ".png";

    if (diceValue === 1) {
        playerOneRoundScore.textContent = 0;
        game_turn = "two";
        buttonsVisibility(game_turn)
    }
    else {      
        playerOneRoundScore.textContent = Number(playerOneRoundScore.textContent) + diceValue;
        gameWinCheck()
    }}
function holdDiceOne() {
    playerOneScore.textContent = Number(playerOneScore.textContent) + Number(playerOneRoundScore.textContent);
    playerOneRoundScore.textContent = 0;    
    game_turn = "two";
    buttonsVisibility(game_turn);
    gameWinCheck()
}
// Player one game end

// Player two game start
function rollDiceTwo() {
    let diceValue = (Math.floor(Math.random() * 6) + 1);
    dice.src = "images/dice_" + diceValue + ".png";

    if (diceValue === 1) {
        playerTwoRoundScore.textContent = 0;
        game_turn = "one";
        buttonsVisibility(game_turn);
    }
    else {      
        playerTwoRoundScore.textContent = Number(playerTwoRoundScore.textContent) + diceValue;
    }}
function holdDiceTwo() {
    playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(playerTwoRoundScore.textContent);
    playerTwoRoundScore.textContent = 0;
    game_turn = "one";
    buttonsVisibility(game_turn);    
    gameWinCheck()
}
// Player two game end

function gameWinCheck() {
    if (Number(playerOneScore.textContent) >= 100) {
        gameEnd.innerHTML = `<p>PLAYER ONE WON</p>
        <p>PlAYER ONE: ${playerOneScore.textContent}</p>
        <p>PlAYER TWO: ${playerTwoScore.textContent}</p>`
        game_turn = "end";
        buttonsVisibility(game_turn);
    }
    if (Number(playerTwoScore.textContent) >= 100) {
        gameEnd.innerHTML = `<p>PLAYER TWO WON</p>
        <p>PLAYER ONE: ${playerOneScore.textContent}</p>
        <p>PLAYER TWO: ${playerTwoScore.textContent}</p>`
        game_turn = "end";
        buttonsVisibility(game_turn);
    }
}