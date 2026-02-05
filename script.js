          // function will generate a random number between 1 and the maximum number requested
          function getRandomInt(maximumRoll){
            return Math.floor(Math.random() * maximumRoll + 1);
        }
        function playDiceGame(){
            // variable to hold our first roll of the die
            let roll1 = getRandomInt(6);
            let roll2 = getRandomInt(6);
            let sum = roll1 + roll2;
            // display the game details to the user
            document.getElementById("divRoll1").innerText = "The First Die Rolls: " + roll1;
            document.getElementById("divRoll2").innerText = "The Second Die Rolls: " + roll2;
            document.getElementById("divSum").innerText = "Added Together: " + sum;
            // testing for win/lose/tie by checking values of the dice rolls and the sum of their values
            // if rolls are equal, win
            // % is modulus - the result when using modulus is the remainder
            // if you divide a number by 2 and there is no remainder, the number is even
            if (roll1 == roll2 && roll1 % 2 == 0) {
                document.getElementById("divMessage").textContent = "You Win";
            }
            // if rolls add to 7 or 11, lose
            else if (sum == 7 || sum == 11) {
                document.getElementById("divMessage").textContent = "You Lose";
            }
            // if rolls are not equal even numbers, and do not add to 7 or 11, tie game
            else {
                document.getElementById("divMessage").textContent = "Tie Game (Pushed)";
            }
      
        }
        