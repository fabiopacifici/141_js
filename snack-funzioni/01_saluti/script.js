/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * 
 * @param {String} name 
 */
/* function greet(name) {

  return `Hi ${name}`

} */

const greet = name => `Hi ${name}`


// Invoca la funzione qui e stampa il risultato in console
const greethings = greet(userName)


//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(greethings);
