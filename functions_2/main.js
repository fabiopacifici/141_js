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

//console.log(reverseWord('fabio'));

// 📌 function declarations
/* 
function reverseWord(word) {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }

  return reversedWord
}


//console.log(reverseWord('fabio'));


function isPalindrom(word) {


  const reversedWord = reverseWord(word)
  console.log(reversedWord);

  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    return true

  }
  return false

}



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
 */


// 📌 Function expression (not hoisted)
// anononymous funcion

//console.log(reverseWord('alessandreo'));

// function expression
/* const reverseWord = function (word) {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }

  return reversedWord
}

console.log(reverseWord('alessandreo')); */


/* 📌 Arrow Functions 
 - const/let
 - functionName
 - = 
 - () => {}


  options:
  - `()` can remove the round parenthesis if there is only one paramenter
  - `()` mandatory with zero or more than one param
  - {} can be omitted if the code in a one-liner otherwise they are mandatory
  - when the {} are omitted the return is implicit

*/

/* const reverseWord = (word) => {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }

  return reversedWord
} */

const reverseWord = word => {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }

  return reversedWord
}

console.log(reverseWord('alessandreo'));



// 👉 function declaration
/* function sum(x, y) {
  return x + y
}
 */
// 👉 function expression
/* const sum = function (x, y) {
  return x + y
} */

// 👉 function expression with arrow function
// ()=>{}
// with curly brackets and return explicit
/* const sum = (x, y) => {
  return x + y
} */

// 👉 arrow function without curly brackets and return implicit

/* const sum = (x, y) => x + y

console.log(sum(10, 40));

const printCalcAge = () => console.log('Hi there')

printCalcAge() */


// anon funtion
/* function() {

}
 */
// anon function arrow

/* () => {

} */


// function declaration
function isEven(numb) {
  if (numb % 2 === 0) {
    return 'pari'

  }
  return 'dispari'
}

//function expression
const isEvenNumb = function (numb) {
  if (numb % 2 === 0) {
    return 'pari'

  }
  return 'dispari'
}

// arrow function
/* const isEvenNum = numb => {
  if (numb % 2 === 0) {
    return 'pari'

  }
  return 'dispari'
} */

//  one liner arrow function rounded parentesis, curly and return omitted
const isEvenNum = numb => numb % 2 === 0


console.log(isEvenNum(11));



/* function sum() {
  //globalVar = 'ciao i am a global variable' // 😈
  var test = '123'
  let anotherTest = 1234
  const thistest = 'ciao'
  console.log(globalVar);

}
sum() */
//console.log(test); // error
//console.log(anotherTest); // error
//console.log(thistest); // error

//console.log(globalVar); // error if the function is not called




a = 0; // global variable 😈
b = "buongiorno" // global variable 😈 
var c = "ciao"; // global variable

saluta(); // 

console.log("a is " + a); // 0
console.log("b is " + b); // buongiorno

function saluta() {
  var d = "asd";
  console.log("a is " + a); // 0
  var b = a + 1;
  console.log("b is " + b); // 1
  console.log(c); // ciao
}

/* 


a is 0
main.js:274 b is 1
main.js:275 ciao
main.js:267 a is 0
main.js:268 b is buongiorno

*/

/* 📌 Functions Workshop */

// 1. Function declaration 
/* function myFunction() {
  console.log('ciao ragazzi');
}
 */


//2. arrow function 
/* const myFunction = () => {
  console.log('ciao here');

} */
// 2.1 function declaration
/* const myFunction = function () {
  console.log('ciao here');

} */

// 3. if possible shorten the declaration
const myFunction = () => console.log('ciao here');


// 👉 Add function
// 1. Function declaration 
function add(a, b) {
  return a + b;
}

// 1.2 function expression
const add = function (a, b) {
  return a + b
}

// 2. arrow function
const add = (a, b) => { return a + b }

// 3. if possible shorten the declaration
const add = (a, b) => a + b



// 👉 Function to find the square of a number:
function square(n) {
  return n * n;
}

// 1.2 function expression
const square = function (n) {
  return n * n;
}
// 2. arrow function
const square = (n) => {
  return n * n;
}

// 3. if possible shorten the declaration
const square = (n) => n * n

// 4. shorter
const square = n => n * n


// 👉 Function to check if a string is empty or not:
function isEmpty(str) {
  return str === '';
}

// 1.2 function expression
const isEmpty = function (str) {
  return str === '';

}
// 2. arrow function
const isEmpty = (str) => {
  return str === '';

}
// 3. if possible shorten the declaration
const isEmpty = (str) => str === '';
// 4. variant
const isEmpty = str => str === '';


// 👉 Function declaration
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 1.2 function expression
const sumArray = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// 2. arrow function
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 3. if possible shorten the declaration
const sumArray = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 👉 Function to Reverse a String Traditional Function Declaration
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('Grogu')); // Output: "ugorG"

// 1.2 function expression
const reverseString = function (str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('Grogu')); // Output: "ugorG"

// 2. arrow function
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('Grogu')); // Output: "ugorG"
// 3. if possible shorten the declaration
const reverseString = str => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('Grogu')); // Output: "ugorG"



// 👉 Function to Find the Maximum Number in an Array Traditional Function Declaration
/* function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 1, 4, 1, 5, 9];
console.log(findMax(numbers)); // Output: 9 */

// 1.2 function expression
/* const findMax = function (arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 1, 4, 1, 5, 9]; */
// 2. arrow function
/* const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 1, 4, 1, 5, 9]; */
// 3. if possible shorten the declaration


/**
 * 
 * @param {Array} arr 
 * @returns 
 */
const findMax = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const numbers = [3, 1, 4, 1, 5, 9];
findMax()


// JsDocs

/**
 * Reverse a given string
 * @param {string} word 
 * @returns {string} the reversed word
 */
function reversedWord(word) {
  let reversedWord = ''
  for (let i = word.length - 1; i >= 0; i--) {
    const thisChar = word[i]
    reversedWord += thisChar
  }

  return reversedWord
}

reversedWord()


alert()