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

        // this function will validate the user input based on the requirements of the client
        function validate(){
            // first name variable
            let firstName = document.getElementById("txtFirstName").value;
            let lastName = document.getElementById("txtLastName").value;
            let zip = document.getElementById("txtZip").value;
            let fullName = firstName + " " + lastName;
            // create a variable to hold the message we will show the user
            let message = "";
            // we need to make sure the name does not exceed 20 characters
            if (fullName.length > 20 || fullName.length == 1){
                message = "Please enter a name that is less than 20 characters.";
            }
            else if(zip.length != 5){
                message = "Please enter a 5 digit zip code.";
            }
            else{
                message = "The secret word is validation!";
            }
            // display the message on the associated div
            document.getElementById("divMessage").textContent = message;
        }
        function checkPalin(event){
    event.preventDefault();
    let wordToTest = document.getElementById("txtWord").value;
    let bPalin = isPalin(wordToTest);
    let divMessage = document.getElementById("divMessage");
    if (bPalin == true){
divMessage.textContent = "The phrase is a palindrome";
    }
    else{
        divMessage.textContent = "The phrase is a not palindrome";
    }
}
function isPalin(strToTest){
    strToTest = strToTest.toLowerCase();
    // replace all instances of spaces /\s with an empty string
    strToTest = strToTest.replace(/\s/g, "");
    let strReverse = strToTest;
    strReverse = strReverse.split("").reverse().join("");
    if (strReverse == strToTest){
        return true;
    }
    else{
        return false;
    }
}
async function getData(){
    // request the JSON file using the Fetch API
    let responce = await fetch('planets.json');
    // just a quick chest to make sure we actually got the data successfully
    if (!responce.ok){
        console.log("problem with json");
    }
    
    // hopefully the connectioon to the file is ok
    let data = await responce.json();
    // now we can loop through the data
    data.planets.forEach(
        planet => {
    // create a new div
    let planetInfo = document.createElement('div');
    // build the html to show off the planet data
    planetInfo.innerHTML = `
    <h2>${planet.name}</h2>
    <p>Distance from sun: ${planet.distanceFromSunKm}</p>
    <p>Moons: ${planet.moons}</p>
    `;
    
    document.getElementById("divData").appendChild(planetInfo);
    });}