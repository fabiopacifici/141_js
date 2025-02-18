/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterNames(arr, char) {

  const filteredArr = []
  for (let index = 0; index < arr.length; index++) {
    const thisName = arr[index];
    const initial = thisName.charAt(0).toLowerCase()

    if (initial === char.toLowerCase()) {
      filteredArr.push(thisName)
    }

  }
  return filteredArr
}

// Invoca la funzione qui e stampa il risultato in console
const filteredNames = filterNames(names, 'a')


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filteredNames);
