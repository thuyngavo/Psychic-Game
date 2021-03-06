

// all of the options 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables 
var wins = 0;
var losses = 0;
var ties = 0;
var turnsLeft = 9;
var userChoice = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");

var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");
var turnsText = document.getElementById("turns-left");
var userChoiceText = document.getElementById("userchoice-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  var userGuess = event.key;
  // Randomly chooses computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // setting terms for outcome of the game     
  if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || 
    (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || 
    (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || 
    (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || 
    (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || 
    (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || 
    (userGuess === "y") || (userGuess === "z")) {

    //conditions for win
    if ((userGuess === "a" && computerGuess ==="a") || 
        (userGuess === "b" && computerGuess ==="b") || 
        (userGuess === "c" && computerGuess ==="c") || 
        (userGuess === "d" && computerGuess ==="d") || 
        (userGuess === "e" && computerGuess ==="e") || 
        (userGuess === "f" && computerGuess ==="f") || 
        (userGuess === "g" && computerGuess ==="g") || 
        (userGuess === "h" && computerGuess ==="h") || 
        (userGuess === "i" && computerGuess ==="i") || 
        (userGuess === "j" && computerGuess ==="j") || 
        (userGuess === "k" && computerGuess ==="k") || 
        (userGuess === "l" && computerGuess ==="l") || 
        (userGuess === "m" && computerGuess ==="m") || 
        (userGuess === "n" && computerGuess ==="n") || 
        (userGuess === "o" && computerGuess ==="o") || 
        (userGuess === "p" && computerGuess ==="p") || 
        (userGuess === "q" && computerGuess ==="q") || 
        (userGuess === "r" && computerGuess ==="r") || 
        (userGuess === "s" && computerGuess ==="s") || 
        (userGuess === "t" && computerGuess ==="t") || 
        (userGuess === "u" && computerGuess ==="u") || 
        (userGuess === "v" && computerGuess ==="v") || 
        (userGuess === "w" && computerGuess ==="w") || 
        (userGuess === "x" && computerGuess ==="x") || 
        (userGuess === "y" && computerGuess ==="y") || 
        (userGuess === "z" && computerGuess ==="z")) {
        wins++;
        turnsLeft--;
    }  

    //condition for ties
    else if (userGuess === computerGuess) {
      ties++;
      turnsLeft--;
    }
        
    //condition for loss
    else {
      losses++;
      turnsLeft--;
    }

    // Hidden text
    directionsText.textContent = "";
    computerChoiceText.textContent = "";
    tiesText.textContent = "";

    // Displayed text
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    turnsText.textContent = "Guesses left: " + turnsLeft;
    userChoiceText.textContent = "Your guesses for far: " + userGuess + "";
   
  }
};