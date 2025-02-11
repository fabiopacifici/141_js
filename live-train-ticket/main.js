
/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


// 📌 preparation
const price_per_km = 0.21
const minor_discount = 0.2
const senior_discount = 0.4
let ticket_price, message;

// 📌 gather the data from the user
// Ask to the user the number of km to do (prompt)
const km = 10 //Number(prompt('Type the number of km you want to do. es. 10'))
// Ask to the user the passenger age (prompt)
const age = 10 //Number(prompt('Type the passenger age. es. 10'))


// 📌 elaboration
ticket_price = km * price_per_km
message = 'Standard price'

// check if age if less than 18 and apply 20% off
if (age < 18) {
  // apply 20%
  //ticket_price = ticket_price - ticket_price * minor_discount
  ticket_price -= ticket_price * minor_discount
  message = '20% discount applied'
}
// otherwise check if age if greather than 65 and apply 40% off
else if (age >= 65) {
  ticket_price -= ticket_price * senior_discount
  message = '40% discount applied'
}
// otherwise standard price no discount

const final_price = ticket_price.toFixed(2)

// 📌 print the output
console.log(`Ticket price: ${final_price} - ${message}`);

