/* 📌 Preparation steps */

// select the dom nodes for the game
const playerDiceEl = document.querySelector('.player_dice');
const computerDiceEl = document.querySelector('.computer_dice');
const winnerMessageEl = document.querySelector('.winner_message');
const rollButton = document.getElementById('roll_button');




rollButton.addEventListener('click', () => {

  // Make an ajax request to the boolean endpoint
  fetch('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2')
    .then(response => response.json())
    .then(data => {
      // log the data to see what we have
      console.log(data.success);

      console.log(data.response);

      // extract the player and computer dice values with destructuring
      const [playerDiceValue, computerDiceValue] = data.response;

      // create the player and computer dice elements
      console.log(playerDiceValue, computerDiceValue);


      // create the player dice element
      const playerDiceNode = document.createElement('img');
      playerDiceNode.src = `./assets/img/${playerDiceValue}.svg`
      playerDiceNode.alt = `Dice showing ${playerDiceValue}`;


      // create the computer dice element
      const computerDiceNode = document.createElement('img');
      computerDiceNode.src = `./assets/img/${computerDiceValue}.svg`
      computerDiceNode.alt = `Dice showing ${computerDiceValue}`;


      console.log(computerDiceNode, playerDiceNode);

      // update the dom with the two generated images
      playerDiceEl.innerHTML = '';
      computerDiceEl.innerHTML = '';
      playerDiceEl.appendChild(playerDiceNode);
      computerDiceEl.appendChild(computerDiceNode);


      // declare the winner 
      if (playerDiceValue > computerDiceValue) {
        // player wins
        winnerMessageEl.textContent = 'Player Wins!';
      } else if (playerDiceValue < computerDiceValue) {
        // computer wins
        winnerMessageEl.textContent = 'Computer Wins!';
      } else {
        // it is a draw
        winnerMessageEl.textContent = 'It is a draw!';
      }



    })

})





axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=6&items=2')
  .then(response => {
    console.log(response);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data.response);

    const [playerDiceValue, computerDiceValue] = response.data.response;



  })
