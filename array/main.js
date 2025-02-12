
/* 📌 Array */

// 👉 Define the array
// array of numbers
//              0   1  2  3  4  5
const numbers = [2, 4, 5, 6, 7, 8]
console.log(numbers);

// 👉 Access a single array element
console.log(numbers[5]);
console.log(numbers[6]); // undefined

// Array methods and properties

// Add an element at the end of the array
numbers.push(10)
console.log(numbers);

// Add an element at the beginning of the array
numbers.unshift(1)
console.log(numbers);

// remove an element for the beginning of the array
numbers.shift()
console.log(numbers);

// remove an element from the end of an array
numbers.pop()
console.log(numbers);





// 👉 Loop over an array of elements
for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i];
  console.log(`The nunber is: ${thisNumber}`);
}


// 👉 Define the array
// array of strings
// indexes          0          1            2          3        4 
const names = ["Leonardo", "Antonella", "Giuseppe", "Vitkor", "Rosy"]
console.log(names);

// 👉 Access a single array element
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);



// 👉 Loop over an array of elements
for (let index = 0; index < names.length; index++) {
  // use the index value to take the item at the given index
  const thisName = names[index];
  // print a messsage to the console
  console.log(`Ciao ${thisName}`);

}


// mixed array
// indexes         0       1     2         3
const mixed = ["Starwars", 10, "Matrix", true]
console.log(mixed);

// 👉 Access a single array element
console.log(mixed[2]);



/* Loop over a Strings using a for loop */

//                           0 1 2 3 4 5 6 7 8
const movie = 'star wars' // s t a r   w a r s

console.log(movie[0]); // s


for (let i = 0; i < movie.length; i++) {
  const thisCharacter = movie[i]

  console.log(thisCharacter, i);

}

