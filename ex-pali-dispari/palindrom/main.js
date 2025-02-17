console.log('Hello, World!');
/*
Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

/* function reverseWord(word) {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }
  //console.log(reversedWord);
  return reversedWord
}

function isPalindrom(word) {

  // reverse the word
  const reversedWord = reverseWord(word)
  console.log(reversedWord);


  // check if its a palindrom
  //  the reversed word === word
  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return true

  }
  return false

}
 */

// ask a word to the user
//const word = 'luigi' // prompt('type a word and i'll tell you if its a palindrom')


// check if its palindom
// print the result
/* if (isPalindrom(word)) {
  console.log(`${word} is a palindom`);

} else {
  console.log(`${word} is NOT a palindom`);
}
 */

function splitStringIntoArray(word) {

  // split the word
  let wordArr = []

  for (let i = 0; i < word.length; i++) {
    const thisChar = word[i]
    wordArr.push(thisChar)
  }
  return wordArr
}


function reverseArray(arr) {
  // reverse the array
  const revArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    const thisElement = arr[i]
    revArray.push(thisElement)
  }
  //console.log(revArray);
  return revArray
}

function joinArrIntoString(arr) {
  let joinString = ''

  for (let i = 0; i < arr.length; i++) {
    const thisElement = arr[i];
    joinString += thisElement
  }
  return joinString

}


const word = 'fabio'



function isPalindrom(word) {

  // splits the string into an array
  const splitWord = splitStringIntoArray(word)

  // revese the array items order
  const revArr = reverseArray(splitWord)

  // join the array elements
  const revString = joinArrIntoString(revArr)

  // check if its a palindrom
  if (word.toLowerCase() === revString.toLowerCase()) {
    return true

  }
  return false

}


function isPal(word) {

  const revWord = word.split('').reverse().join('')
  console.log(revWord);
  if (word.toLowerCase() === revWord.toLowerCase()) {
    return true
  }
  return false

}



if (isPal(word)) {
  console.log('palindrom');

} else {
  console.log('not palindrom');

}






/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/




/* Functions 

- function declaration (recap)
- function expression 
- arrow function
- jsdocs

*/


/* function logSum(x, y) {
  console.log(x + y);
  
}
 */
