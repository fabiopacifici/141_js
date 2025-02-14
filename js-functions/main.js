/* 📌 Functions

- `function` keyword
- function name `logHello`
- ()
- { //your code here}

*/

// Function declaration (subject to hoisting)


/* function logHello() {
  console.log('hello');
}

logHello()


function printHello() {
  document.writeln('hello')
}

printHello()
 */

// Function declaration (subject to hoisting)
/* logHello()
function logHello() {
  console.log('hello');
}
logHello()


printHello()
function printHello() {
  document.writeln('hello')
}
printHello()


//alertHello()
function alertHello() {
  alert('hello')
} */
//alertHello()



/* Example of functions names */

/* function logCurrentTime() {
  // create a variable to hold the current time
  const now = new Date();
  // create a variable to hold the current hour
  const hour = now.getHours()
  // create a variable to hold the current minutes
  const minutes = now.getMinutes()
  // create a variable to hold the current seconds
  const seconds = now.getSeconds()


  console.log(`${hour}:${minutes}:${seconds}`);

}

logCurrentTime() */


/*
function printCurrentTime() {


  //getCurrentTime
  // create a variable to hold the current time
  const now = new Date();
  // create a variable to hold the current hour
  const hour = now.getHours()
  // create a variable to hold the current minutes
  const minutes = now.getMinutes()
  // create a variable to hold the current seconds
  const seconds = now.getSeconds()

  // print the output
  document.writeln(`${hour}:${minutes}:${seconds}`);

}

printCurrentTime() */



/* Return value to take variables outside */
/* function getCurrentTime() {
  // ⚡ Function scope (local scope)
  //getCurrentTime
  // create a variable to hold the current time
  const now = new Date();
  // create a variable to hold the current hour
  const hour = now.getHours()
  // create a variable to hold the current minutes
  const minutes = now.getMinutes()
  // create a variable to hold the current seconds
  const seconds = now.getSeconds()

  const currentTime = `${hour}:${minutes}:${seconds}`

  return currentTime
}

const currentTime = getCurrentTime()

console.log(currentTime);

document.writeln(currentTime) */


/* 👉 Function/Local scope */

/* function greethings() {
  const message = 'hi folks'

  console.log(message);

}

console.log(message);
 */
// Functions with glocal variables 😈


/* function greethings(message) {

  console.log(message);

}
const greetingMessage = 'Hello JS'

// Invoke the function
greethings('Helllllooo')
greethings('Hello JS')


const message = 'hi folks'
console.log(message);


 */

/* 
function sum(num1, num2) {

  const risultato = num1 + num2;

  //console.log(risultato);

  return risultato


}

// argument num1 = 20, argument num2 = 30
const result = sum(20, 30) // 50
console.log(result); */



function sum(num1, num2) {

  const result = num1 + num2;

  return result

}

// argument num1 = 20, argument num2 = 30
const firsNumber = 'ciao'
const secondNumber = ' Ciao'
const result = sum(firsNumber, secondNumber) // 50
console.log(result);


/* 

numeri random: generare 10 numeri random (con un for) attraverso una funzione (copiamola da w3schools) e stamparli a schermo


*/



function getRandmInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// log the function that returns something or save it in a variable
const randomNumber = getRandmInteger(1, 100)
console.log(randomNumber);


const randomNumbers = []
for (let i = 0; i < 10; i++) {

  const randomNumb = getRandmInteger(1, 100)
  randomNumbers.push(randomNumb)

}
console.log(randomNumbers);

function getAnArrayRandomNumbers(min, max, n) {
  const randomNumbers = []
  for (let i = 0; i < n; i++) {

    const randomNumb = getRandmInteger(min, max)
    randomNumbers.push(randomNumb)

  }
  //console.log(randomNumbers);
  return randomNumbers
}


console.log(getAnArrayRandomNumbers(100, 500, 10));


console.log(getAnArrayRandomNumbers(1, 50, 5));


/* 

pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari

  if (thisNumber % 2 === 0) {
    // pari
  } else {
   //dispari
  }

*/

/* const thisNumber = 5

// check if the number is even 
if (thisNumber % 2 === 0) {
  console.log('pari');

} else {
  // otherwise is off
  // log the result
  //dispari
  console.log('dispari');
}
 */


// wrap the logic above inside a function with a clever name
//const thisNumber = 5

function isEvenNumber(numb) {

  // check if the number is even 
  if (numb % 2 === 0) {
    return true
  }
  return false

}
// invoke the function
// ask the user for a number
const thisNumber = 20
isEvenNumber(thisNumber) // true|false

if (isEvenNumber(thisNumber)) {
  console.log('É pari');

} else {
  console.log('É dispari');

}


// pass a paramenter that the function needs to accecpt to make its logic work



// Crea una funzione che non accetta paramentri 
// e che logga in console un numero


// Create una funzione che accetta un paramentro 
// e lo stampa in console






function logMessage(thisMessageParam) {

  console.log(thisMessageParam); // 💥

}


// global variable


const textMessage = 'ciao'
logMessage(textMessage) // argument gives the value to a parameter



// Capitalize Word









// param: word
function capitalize(word) {

  const fistCharacter = word.charAt(0).toUpperCase()
  console.log(fistCharacter);
  const restOfTheString = word.substring(1).toLowerCase()

  const capitalizedWord = fistCharacter + restOfTheString


  return capitalizedWord

}




const fabio = 'matrix'
const movie = capitalize(fabio); // argument as variable
console.log(capitalize('starWArs')); // directly passing a value

console.log(movie);

console.log(`${movie} is amazing`);






// reverse array

/* const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const thisTeacher = teachers[i]
  reversedTeachers.push(thisTeacher);
}
console.log(reversedTeachers); */


function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const thisElement = arr[i]
    reversedArr.push(thisElement);
  }
  console.log(reversedArr);
  return reversedArr
}

console.log(reverseArray([1, 2, 3, 4, 5]));

console.log([1, 2, 3, 4, 5].reverse());



/* Parameter */
// the thisIsCalledParamenter é il parametro
function myFunction(thisIsCalledParameter) {

}

/*  Argument */
const thisIsTheArgumentForTheFunction = 'Ciao'
myFunction(thisIsTheArgumentForTheFunction) // argument passed to the function invokation

