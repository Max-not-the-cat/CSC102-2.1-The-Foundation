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
        // This function will add an audio element to the page
        function addAudio(){
            let divAudio = document.getElementById("divAudio");
            // create an audio HTML element using javascript
            let audioElement = document.createElement("audio");
            // set the attributes of our new HTML element
            // add an id so we can more easily work with this element
            audioElement.setAttribute("id", "myAudio");
            
            // add the file name as the source
            audioElement.setAttribute("src", "us-lab-background.mp3");
            // add controls
            audioElement.setAttribute("controls", "controls");
            // set the volume to .5 by default
            audioElement.volume = .5;
            // add our new HTML audio element to the div that will host it
            divAudio.appendChild(audioElement);
            // dissallow the user from clicking th eadd audio button now that the audio has been added to the webpage
            document.getElementById("btnAddAudio").hidden = true;
            // make the play and pause buttons appear
            document.getElementById("btPlayAudio").hidden = false;
            document.getElementById("btnPauseAudio").hidden = false;
        }
        // create the function so that we can play the audio
        function playAudio(){
            // create a shortcut nickname to the audio element that we created in the addAudio funtion
            let myAudio = document.getElementById("myAudio");
            // let the sound play
            myAudio.play();
        }
        // create the function so that we can stop playing the audio - pause
        function pauseAudio(){
            // create a shortcut nickname to the audio element that we created in the addAudio funtion
            let myAudio = document.getElementById("myAudio");
            // pause the sound
            myAudio.pause();
        }
        // instead of setting up 7 seperate variables, we are setting up one array with 7 slots
        //    watch out for the dreaded index out of bounds expection, most of the time when you see this error it is because you are trying to access the item whose number matches the number of items in the array, in this case 7. There is no 7th element in this array, the elements are in the 0-6 index
        let arrPlants = ["Cactus", "Flower", "Aloe", "Rose", "Strawberry", "Tree", "Lotus", "Tomato", "Hibiscus", "Pineapple"];
    // shortcut to the ul that will show our plants
    let ulPlants = document.getElementById("ulPlants");
        // this function will loop through the plants in the array and add them to the ul plants unordered list as list items
            function showPlants(){
                // clear out the ul plants list before adding any plants to it
                ulPlants.innerHTML = "";
                // forEach is just anouther way of looping through the array
                arrPlants.forEach(function(plant, index){
                    // create a list item to hold the current plant name as we loop through
                let li = document.createElement("li");
                // set the text of the list item to our plant name
                li.textContent = plant;
                // add an onclick event hander to allow the plant to be deleted
                li.onclick = function(){
                    // ask the user for confirmation in deleting the plant
                    if(confirm("Remove " + plant + "?")){
                        // remove the plant from the array
                        arrPlants.splice(index, 1);
                        // add a message that the plant was removed
                        document.getElementById("divMessage").textContent = plant + " was removed!";
                        // refresh the plant list
                        showPlants();
                    }
                }
                //  now add the plant to the list
                    ulPlants.appendChild(li);
                });
            }
            // the showPlants funtion will be called one time on page load
            showPlants();
        // loop through the array
        /*for (let i=0; i < arrPlants.length; i++){
            console.log("plant" + (i+1) + " = " + arrPlants[i]);
        }*/
    //    function to allow the user to add a plant to the array
       function addPlant(){
        // get the text that the user added into the addPLant text box
        let newPlant = document.getElementById("txtNewPlant").value.trim();

        // make sure that the input is not empty
        if(newPlant == ""){
            document.getElementById("divMessage").textContent = "Please enter a valid plant name";
        return;
        }
        // add the plant to the array
        arrPlants.push(newPlant);
        // let the user know that the plant was added
        document.getElementById("divMessage").textContent = newPlant + " was added!";
        // erase the text from the text box
        document.getElementById("txtNewPlant").value = "";
        // we need to call showPlants again so that we see the new plants on the page
        showPlants();
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
    
        // create the function to record the current time
        function recordTime(){
            // lets add the current time to the array
            arrTimes.push(new Date());
            // refresh the list of times
            displayTimes();
        }
        // create a function to display the content of the array in our div
        function displayTimes(){
           
            // create a shortcut to the div in the HTML coed
            let divTimes = document.getElementById("divTimes");
             // erase any times that are currently in the div
            divTimes.innerHTML = "";
            // for loop to show the contents of the array
            for (let i=0; i < arrTimes.length; i++){
                // br - is an HTML line bread tag so lines show up on seperate lines
                divTimes.innerHTML += arrTimes[i] + "<BR>";
            }
        }
       