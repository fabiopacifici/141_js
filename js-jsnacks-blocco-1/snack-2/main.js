/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/


// ask the user to insert a word inside a prompt
const firstWord = prompt('Type a word')
// ask the user to insert another word inside a prompt
const secondWord = prompt('Type another word')

// check if the lenght of the first word is greather than the second and print a message
if (firstWord.length > secondWord.length) {
  // print something
  console.log(`${secondWord} - ${firstWord}`);

} else if (secondWord.length > firstWord.length) {
  // print something
  console.log(`${firstWord} - ${secondWord}`);

} else {
  console.log('The words have the same length');
}

// otherwise check if the lenght of the second word is greather than the first and print a message

// otherwise they have the same lenght and we print another message