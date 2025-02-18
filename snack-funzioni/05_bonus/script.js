/* 
Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito. 


Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)


*/

const name = 'Mario';


// Dichiara la funzione qui.
const greethings = (name) => {

  let message;

  // get the current date (now)
  const now = new Date();
  console.log(now);

  // from the current now date extract the hours
  const thisHour = now.getHours();
  console.log(thisHour);

  // check if hours is less than 13
  // print a message with 'buongiorno'
  if (thisHour < 13) {
    console.log('buongiorno');
    message = 'buongiorno'
  } else if (thisHour >= 13 && thisHour < 17) {
    // check if hours is greather than 13 but less than 17
    // print a message with 'buon pomeriggio'
    message = 'buon pomeriggio'
  } else {
    // otherwise if hours its greather than 17
    // print a message with 'buonasera'
    message = 'buonasera'
  }



  // return a greething using the provided name parameter

  return `${message} ${name}`

}

// Invoca la funzione qui e stampa il risultato in console
const greetUser = greethings('Luca') // ciao Luca


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

console.log(greetUser);
