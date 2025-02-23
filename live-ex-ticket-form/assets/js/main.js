/*

Descrizione
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in
console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 

Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

*/


// select the DOM elements
const formEl = document.getElementById('ticket_form')
const nameEl = document.getElementById('name')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const passengerNameEl = document.getElementById('passenger-name')
const offerNameEl = document.getElementById('offer-name')
const wagonEl = document.getElementById('wagon')
const cpCodeEl = document.getElementById('cp-code')
const ticketPriceEl = document.getElementById('ticket-price')
const ticketSectionEl = document.getElementById('ticket_section')

const pricePerKm = 0.21
const minorDiscount = 0.2
const seniorDiscount = 0.4
let ticketPrice;
let discountName;

console.log(formEl, kmEl, ageEl, pricePerKm, minorDiscount, seniorDiscount, ticketPrice);

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// add an event listener to the form listen for the submit event
formEl.addEventListener('submit', (e) => {
  // - prevent the page refresh using e.preventDefault
  e.preventDefault()

  // reset the ticket contents
  passengerNameEl.innerText = ''
  offerNameEl.innerText = ''
  ticketPriceEl.innerText = ''
  cpCodeEl.innerText = ''
  wagonEl.innerText = ''


  // - read and save km and age values from the selected inputs
  const kmValue = Number(kmEl.value)
  const ageValue = ageEl.value
  const nameValue = nameEl.value

  // elaboration of the tickt price
  ticketPrice = kmValue * pricePerKm

  console.log(ticketPrice, kmValue, ageValue, nameValue);

  // check if the ageValue is minor and apply minorDiscount
  if (ageValue === 'minor') {
    console.log('its a minor, apply 20% off');
    ticketPrice -= ticketPrice * minorDiscount
    discountName = 'Minor ticket'

  } else if (ageValue === 'senior') {
    // else if the ageValue is senior and apply seniorValue
    console.log('its a senior apply 40% off');
    ticketPrice -= ticketPrice * seniorDiscount
    discountName = 'Senior ticket'

  } else {
    discountName = 'Standard ticket'
  }

  console.log(ticketPrice, discountName, kmValue, ageValue);

  // update the dom to print the ticket data
  passengerNameEl.innerText = nameValue
  offerNameEl.innerText = discountName
  ticketPriceEl.innerText = ticketPrice.toFixed(2)
  cpCodeEl.innerText = getRandomInteger(90000, 100000)
  wagonEl.innerText = getRandomInteger(1, 9)


  ticketSectionEl.classList.remove('d-none')

})

