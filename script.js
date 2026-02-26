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
        
            // create a variable to track the current interval ID (returned from the setInterval function)
            let intervalId = 0;
            // create the function to move the image
            function startImageMove(){
                // we are creating a variable that is a shortcut or nickname for our HTML image element
                let memeImage = document.getElementById("memeImage");
                
                // setInterval allows us to repeatedly run code
                // function(){} is an anonymous function - a way to run a chunk of code 1 time as a function argument
                intervalId = setInterval(function(){
                    let topCord = getRandomInt(1000);
                    let leftCord = getRandomInt(1000);
                
                    memeImage.style.left = topCord + "px";
                    memeImage.style.top = leftCord + "px";
                }, 1000); // 1000ms = 1 second


                // enable the stop button  == can click on stop button
                document.getElementById("btnStop").disabled = false;
                // disable the start button == cannot click on start button
                document.getElementById("btnStart").disabled = true;
            }
            // create the function that stops the image from moving
            function stopImageMove(){
                // call a built in javascript function that stops the setinterval from running
                clearInterval(intervalId);

                
                // disable the stop button  == cannot click on stop button
                 document.getElementById("btnStop").disabled = true;
                // enable the start button == can click on start button
                 document.getElementById("btnStart").disabled = false;
            }
