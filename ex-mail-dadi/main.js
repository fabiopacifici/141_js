/*
📌 Mail

*/


// Crea una lista di email di invitati ad una festa.
const guestList = [
  "luke@gmail.com",
  "luis@gmail.com",
  "luana@gmail.com",
  "alessandro@gmail.com",
  "antonella@gmail.com",
  "rosy@gmail.com",
  "marina@gmail.com",
  "vincenzo@gmail.com",
  "viktoe@gmail.com"

]
// Chiedi all’utente la sua email
const userEmail = prompt('type your email address here:')
console.log(guestList, userEmail);

let canAccess = false;
let message = 'Sorry go home, you are not invited to the party'

// ciclo all'interno della guest list
for (let index = 0; index < guestList.length; index++) {
  const thisGuest = guestList[index];
  if (thisGuest === userEmail) {
    canAccess = true
    message = `Hi ${userEmail} welcome to the party`
    break
  }
}

// Controlla che la mail dell'utente sia sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull’esito del controllo.
if (canAccess) {
  console.log(message);

} else {
  console.log(message);
}



console.log(guestList.includes(userEmail))




/*


📌Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo.
*/

const limit = 6;
// create a variable to store a random number from 1 to six for the player
const playerNumber = Math.ceil(Math.random() * limit)
// create a variable to store a random number from 1 to six for the pc
const pcNumber = Math.ceil(Math.random() * limit)
console.log(playerNumber, pcNumber);


// check if the player number is greather that the pc number (player wins)
if (playerNumber > pcNumber) {
  alert(`player wins - score: Player ${playerNumber} PC ${pcNumber}`);
} else if (playerNumber < pcNumber) {
  // otherwise check if the pc number is greather that the player number (pc wins)
  alert(`pc wins - score: Player ${playerNumber} PC ${pcNumber}`);

} else {
  // otherwise same number (try again)
  alert(`Try again -  score: Player ${playerNumber} PC ${pcNumber}`)
}


