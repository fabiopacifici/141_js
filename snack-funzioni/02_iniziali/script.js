/* Scrivi una funzione che accetti un array di nomi 
e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * 
 * @param {Array} arr 
 * @returns
 */
/* function mapInitials(arr) {

  const initials = []

  for (let index = 0; index < arr.length; index++) {
    const thisElement = arr[index];

    initials.push(thisElement.charAt(0))

  }

  return initials
} */

const mapInitials = arr => {

  const initials = []

  for (let index = 0; index < arr.length; index++) {
    // select the inner array element for each iteration
    const thisElement = arr[index];

    initials.push(thisElement.charAt(0))

  }

  return initials
}


// Invoca la funzione qui e stampa il risultato in console
const initials = mapInitials(names)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);
