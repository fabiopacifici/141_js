console.log('hi');

/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/


// add a variable to hold the `sum` value, initialize the variable to zero
let sum = 0;

// loop for 10 times
for (let i = 0; i < 3; i++) {
  // [in the loop] ask to the user to insert a number (must be a number)
  const userNumb = Number(prompt('type a number. It must be a number. es. 1'))
  console.log(userNumb);
  // [in the loop] sum the generated number with the current value stored inside the `sum` variable using the plus operator (or plus assignment)
  sum += userNumb

}

// print the sum outside of the loop
console.log(sum);



