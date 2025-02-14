console.log('hi');

/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/


// create a `variable` to hold an `empty array`
const oddNumbers = []
// `loop for` six times
for (let i = 0; i < 6; i++) {
  // [inside the loop] add a `variable` to store the user number provided via a `prompt`
  const userNumb = parseInt(prompt('type a number. It must be a number, es: 1'))
  console.log(userNumb);
  // check `if` the number is odd
  if (userNumb % 2 !== 0) {
    // [inside the if] push the odd number into the empty array
    oddNumbers.push(userNumb)
  }

}

// print the array of odd numbers
console.log(oddNumbers);
