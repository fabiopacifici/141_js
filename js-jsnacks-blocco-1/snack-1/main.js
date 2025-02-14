/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/


// add a prompt to insert the first number
const firstNumb = Number(prompt('Type the first number'))
// add a prompt to insert the second number
const secondNumb = Number(prompt('Type the second number'))

/* console.log(firstNumb, secondNumb); */

// check if the first number is greather than second number
/* if (isNaN(firstNumb) || isNaN(secondNumb)) {
  alert('Invalid input')
} else */
if (firstNumb > secondNumb) {
  console.log(`The first number: ${firstNumb} is greather than the second number: ${secondNumb}`);
} else if (secondNumb > firstNumb) {
  // otherwise check if the second number number is greather than the first number
  console.log(`The first number: ${firstNumb} is smaller than the second number: ${secondNumb}`);
} else {
  // otherwise check if they are equal
  console.log('The numbers are equal');
}





