console.log('Hello, World!');
/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

function generateNumberBetweenOneAndFive() {
  return Math.ceil(Math.random() * 5)
}

function sum(x, y) {
  return x + y
}

function isEven(numb) {
  if (numb % 2 === 0) {
    return 'pari'

  }
  return 'dispari'
}

// L’utente sceglie pari o dispari
const playerChoice = 'dispari' // prompt()

// inserisce un numero da 1 a 5
const playerNumb = 2 // Number(prompt('type a number between 1 and 5 inclusinve'))


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
const pcNumb = generateNumberBetweenOneAndFive()
console.log(pcNumb, playerNumb, playerChoice);


//Sommiamo i due numeri
const result = sum(playerNumb, pcNumb)
console.log(result);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
console.log(isEven(result));

if (isEven(result) === playerChoice) {
  console.log(`You win! Result: ${result} | Your choice: ${playerChoice} - Your number: ${playerNumb} | pcNumber: ${pcNumb}`);

} else {
  console.log(`PC wins, try again! Result: ${result} | Your choice: ${playerChoice} - Your number: ${playerNumb} | pcNumber: ${pcNumb}`);
}
// Dichiariamo chi ha vinto.






/* 

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

*/


/* function getRndInteger(min, max) {

  console.log(max, min);
  console.log(max - min + 1); 10 - 2 + 1 // 9
  console.log(Math.random());
  console.log(Math.random() * (max - min + 1));
  console.log(Math.floor(Math.random() * (max - min + 1)));
  console.log(min);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}



getRndInteger(2, 10)
 */



const list = [1, 2, 3, 4]

const listWithoutDuplicates = []
for (let index = 0; index < list.length; index++) {
  const thisElement = list[index];

  if (!listWithoutDuplicates.includes(thisElement)) {
    listWithoutDuplicates.push(thisElement)
  }

}

console.log(listWithoutDuplicates);
