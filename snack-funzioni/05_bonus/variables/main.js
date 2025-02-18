// 📌 Tools used
// - const
// - let
// - var
// - console.log('quello che vuoi loggare qui')

//📌 Define Variables

// declare and assign a value to a variable using const (initialization)
let firstName = 'Fabio'
console.log(firstName)

//console.log(lastName);
//ReferenceError: Cannot access 'lastName' before initialization
const lastName = 'Pacific'
console.log(lastName)



// declare a variable
let age; // 

// assign a value to an existing varible
age = 45;

console.log(age);


const fullName = 'Fabio Pacific'
console.log(fullName)

console.log('This is a string logged')



// 👉 Variables with Const (not reassagnable)

//const username = 'mario';
//console.log(username);

// update a value on an existing variable
//username = 'luigi'
// Uncaught TypeError: Assignment to constant variable. at main.js: 40: 10

// 👉 Variables defined with let can be reassigned
//console.log(job);
// Uncaught ReferenceError: Cannot access 'job' before initialization

let job = 'Developer'
console.log(job); // Developer

job = 'Fullstack developer'
console.log(job);


// ⚡ Definition with var
console.log(movie)

var movie = 'star wars'
console.log(movie)


// 👉 Log before declaration

//console.log(watch); // undefined

let watch
console.log(watch)

// reassign a value to an existing variable.

watch = 'Smart watch'
console.log(watch)

watch = 123
console.log(watch)



// What is this doing?

// dichiarazione variabile
let miaStringa;

// assegnazione
miaStringa = 'ciao';

// // utilizzo/richiamo
console.log(miaStringa);

// assegnazione
miaStringa = 'arrivederci';

// utilizzo/richiamo
console.log(miaStringa);




// 📌 Data types

// 👉 Strings

//"Fabio" // useless

const first_name = "Fabio"
console.log(first_name);

console.log("Fabio");

console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);
console.log(first_name);




//const full_name = "Fabio" + " " + "Pacifici"
//const full_name = "Fabio " + "Pacifici"
const full_name = "Fabio" + " Pacifici" // Fabio Pacifici
console.log(full_name);

//const sentence = "I'm Fabio" // ok
//const sentence = 'I'm Fabio' // Broken string
const sentence = 'I\'m Fabio' // ok

console.log(sentence);


// string with numbers

const numb = 10
const numbericString = "10"

console.log(numb, numbericString);


console.log("Fabio" + 10);

const name_numb = "Fabio" + 10
console.log(name_numb);


// 👉 String contatenation with numbners

console.log(10 + "10");

console.log(10 + 10);



// Long string contatenation

const long_sentence = "I" + " " + "like" + " " + "coding" + " " + "My job is: " + job
console.log(long_sentence);



const my_full_name = firstName + " " + lastName
console.log(my_full_name);


/*
 📌 Template literal 
  - `your string here`
  - ${variable_here} text interpolation
  - Backtick: MAC option + Backslash; WIN ALT + 96;
  
  
  Nota: Per rimappare un tasto della tastiera in caso il pc non avesse il tastierino numerico leggi l'articolo ->
  https://lancellotti-marco.medium.com/remapping-backtick-and-tilde-keyboard-shortcuts-on-windows-e2923e455817
*/


const multiline_sentence = `Fabio
likes 
coding

Job: 
${job}
`

console.log(multiline_sentence);


// with more variables using text interpolation
const another_multiline_sentence = `${'name: ' + firstName} ${lastName}
likes 
coding

Job: 
${job}

`
console.log(another_multiline_sentence);


/* 📌 Dot notation and string methods  
esempio di oggetto:
console.log()
- console (object)
- . dot notation
- log() (method)

*/


const human = 'Human'

// access string methods and properties
console.log(human.length) // 5

const human_lenght = human.length
console.log(human_lenght);


console.log("Fiao".length);

// Alert in js
//alert('Hi this is an alert in the browser')

// F 0
// A 1
// B 2
// I 3
// O 4
console.log("FABIO".toLowerCase());

const char_with_chatat = movie.charAt(0)
const char = movie[0]
console.log(char);
console.log(char_with_chatat);



/* Numbers
- integer
- float

*/

// addizione, con il segno +
let somma = '4' + 4;
console.log(somma);


// sottrazione, con il segno -
let sottr = somma - 3;
console.log(sottr);

// divisione, con il segno /
let divisione = sottr / 2;
console.log(divisione);

// moltiplicazione, con il segno*
let molt = sottr * 2;
console.log(molt);

// find out the data type of a variable
console.log(typeof somma);
console.log(typeof 20);



// dot notation with numbers
console.log(0.12345.toFixed(2));

console.log(0.12345.toString());


firstName = 'Mario'

const my_name = prompt('type your name')
console.log(my_name);


my_name = 'Luigi'
