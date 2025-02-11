//alert('It works');

/* 📌 Conditional statements (control flow tools)

  # syntax
  - if keyword
  - (condtion) conditional expression
  - { // your code here }


  if (condtion) {

      // your code here

  }

  // Make the condition work with a boolean value
  const condition = false
if (condition) {

  // your code here
  console.log('I am inside the condition');

}

*/

//const isRaining = true // if its false the code in the condition is not parsed otherwise it will be logged in the console.

// 👉 If statement
/* if (isRaining) {
  // your code here
  console.log('Take the umbrella');
}
 */

// 👉 If/else
/*
syntax
if(condition){
  // code to run
} else {
 // code to run
}

*/

/*
if (isRaining) {
  // this is executed if isRaining is true
  console.log('Take the umbrella');
} else {
  // this is executed if is raining is false
  console.log('Enjoy the sun 😎');
} */

// 👉 If/elseif/else
/*
if (contions) {
  // code to run if condition is true
} else if (another_condition) {
  // code to run only if the first condition is false and another_condition is true
} else {
  // code to run if none of the conditions above is true
}
 */



//const isCold = false;
/* 
if (isRaining) {
  // code to run if condition is true
  console.log('take the umbrella ☔');

} else if (isCold) {
  // code to run only if the first condition is false and another_condition is true
  console.log('take the jacket 🧥');

} else {
  // code to run if none of the conditions above is true
  console.log('Enjoy the sun 😎');

}
 */



/* 📌 Operatiori relazionale

- == 
- !=
- >
- <
- >=
- <=

// identitá
- ===
- !==

*/




let x = 3

console.log(x == 2);


if (x == 2) {
  // run this code only if x is equal to two
  console.log('x is equal to two');

} else if (x > 10) {
  // run the code only ifg x is greather tha 10
  console.log('X is greather than 10');

} else {
  console.log(`X is: ${x}`);
}


/* Operatori logici 

- && (AND logico) 
- || (OR logico) 
- ! (not)

*/

const isRaining = true;
x = 5;
console.log(x == 10 && isRaining); // false -> true
console.log(x == 10 || isRaining); // true

if (x == 10 || isRaining) {
  console.log('I am in the if block');

} else {
  console.log('inside the else block');

}


/* Live coding 
Inizializziamo due parole a due variabili.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.
*/


// # Preparation steps
const first_word = 'Computer'
const second_word = 'Computer'
console.log(first_word, second_word);
//console.log(second_word.length);

// # Elaboration steps
console.log(first_word.length > second_word.length);

if (first_word.length > second_word.length) {
  console.log('The first word in longer than the second');
} else if (second_word.length > first_word.length) {
  console.log('The second word in longer than the second');
} else {
  console.log('The two words have the same lenght', first_word, second_word);
}



/* Math  */


console.log(Math);
console.log(Math.random());



/* Variable scope (Block scope) */

let validation = true; // global scope
const wordA = "Word A"; // global scope
let wordB = "Word B"; // glbal scope

if (validation === true) {
  let wordC = "Word C"; // block scope
  let wordB = "Word Custom B"; // block scope (its a new variable)
  console.log(wordA); // WordA
  console.log(wordB); // Word Custom B
  console.log(wordC); // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
//console.log(wordC); // ERROR!💥



/* Live coding 

pari o dispari:

chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 

Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 

Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

*/

// # Preparation
const pcNumber = Math.floor(Math.random() * 9) + 1
let result;

// # Collect the data
const userChoice = 'dispari' // prompt()
const userNumber = 4 // Number(prompt())


// # Elaboration
const sum = pcNumber + userNumber
console.log(sum, pcNumber, userNumber, userChoice);

// check if its even
if (sum % 2 === 0) {
  result = 'pari'
} else {
  result = 'dispari'
}

// # Output
if (userChoice === result) {
  console.log('You win');

} else {
  console.log('You lose');
}

/* Live coding: quanto manca

utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

*/

// # Preparation
const minutes_in_hour = 60
const now = new Date().getMinutes()
// # Elaboration
const minutes_to_next_hour = minutes_in_hour - now
// # Output
console.log(`Mancano ${minutes_to_next_hour} minuti alla prossima ora`);

