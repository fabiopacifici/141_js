/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui
function countVowels(str) {

  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const foundVowels = []
  for (let index = 0; index < str.length; index++) {
    const thisChar = str[index];

    if (vowels.includes(thisChar)) {
      count++
      foundVowels.push(thisChar)
    }

  }
  return [count, foundVowels]

}


// Invoca la funzione qui e stampa il risultato in console
const vowelsCount = countVowels(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log(`I found ${vowelsCount[0]} (${vowelsCount[1]})`);



/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno

function contaVocali(str) {

  // creo una variabile per salvare il conteggio delle vocali
  const count = 0;


  // elonco le vocali che ci sono
  const vocali = 'aeiou'

  //guardo la stringa e vedo se uno dei caratteri é una
  // vocale


  // Restituisco un valore dalla funzione
  return count;


}
// invoco la funzione
const counter = contaVocali();
console.log(counter);*/


// non ho capito come andare avanti, dalla funzione faccio un return e in console non c'é nulla.

// domande?
// hai invocato la funzione?

// c'é il return l'invocazione delal funzione fa loggata in console 