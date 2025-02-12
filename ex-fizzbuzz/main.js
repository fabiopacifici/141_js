console.log('hi');

/*
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
In che ordine devo mettere le condizioni?

tools:
- const/let
- for
- %
- if/elseif/else
- console.log

*/

// Stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

  // short version: i % 15 === 0
  // extended version: (i % 3 === 0 && i % 5 === 0)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');

  } else if (i % 3 === 0) {
    // per i multipli di 3 stampi “Fizz”
    console.log('Fizz');

  } else if (i % 5 === 0) {
    // per i multipli di 5 stampi Buzz
    console.log('Buzz');

  } else {
    // print the number
    console.log(i);
  }

}




// Stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    // per i multipli di 3 stampi “Fizz”

    console.log('Fizz');


  } else if (i % 5 === 0) {
    // per i multipli di 5 stampi Buzz
    console.log('Buzz');

  } else if (i % 3 === 0 && i % 5 === 0) {
    // this condition is never executed
    // i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
  }

  else {
    // print the number
    console.log(i);

  }

}

