function coinFlip(playerGuess, penneyGuess) {
    var flipArray = [];
    var flipLog = [];
    var flip;
    var flag = 0;
    console.log("Player's guess is "+ playerGuess);
    console.log("Penney's guess is "+ penneyGuess);
    while (flag == 0) {
      var flip = Math.floor(Math.random()*2);
      console.log(flip);
      if (flipArray.length < 3) {
          flipArray.push(flip);
      } else {
          flipArray.shift();
          flipArray.push(flip);
      }
      flipLog.push(flip);
      console.log(flipArray);
      if (flipArray[0] === playerGuess[0] && flipArray[1] === playerGuess[1] && flipArray[2] === playerGuess[2] ) {
            console.log('YOU WIN!\n The last three coin flips were ' + playerGuess);
          flag = 1;
      }
      if (flipArray[0] === penneyGuess[0] && flipArray[1] === penneyGuess[1] && flipArray[2] === penneyGuess[2]) {
          console.log('YOU LOSE!\n The last three coin flips were ' + penneyGuess);
          flag = 1;
      }
    }
};

coinFlip(playerGuess, penneyGuess);