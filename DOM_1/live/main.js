/*

DOM (Document Object Model)
- getElementById(), querySelector()
- innerText, innerHTML
- className, classList
- JavaScript Style
- Manipolazione DOM - DOM API, template literal ec. (innerHTML, insertAdjacentHTML, document.createElement, element.appendChild etc)

*/


// 📌 select DOM elements

// 👉 getElementById
/* const strongEl = document.getElementById("bold_text")
console.log(strongEl);

const portfolioEl = document.getElementById('portfolio')
console.log(typeof portfolioEl, portfolioEl);
 */

// 👉 querySelectio(css_selector)

/* const portfolio = document.querySelector('#portfolio')
console.log(portfolio); */

/* const portfolio = document.querySelector('.portfolio_section')
console.log(portfolio); */

/* const portfolio = document.querySelector('section.about')
console.log(portfolioEl); */


// 📌 access element's content
// innerHTML
// innerText

// 👉 `read` the content of a selected node
// loggo direttamente
/* console.log(portfolioEl.innerText)
console.log(portfolioEl.innerHTML)
// oppure salvo prima
const portfolioText = portfolioEl.innerText
const portfolioHTML = portfolioEl.innerHTML
// poi loggo la variabile
console.log(portfolioText, portfolioHTML); */


// 👉 `write` content on the selected node

/* portfolioEl.innerText = '<h1>Ciao</h1>lorem ipsum dolor <p class="lead"> this is a paragraph </p>' // l'HTML not parsed

portfolioEl.innerHTML = "<h1>Ciao</h1> sono l'inner HTML! <p class='lead'> this is a paragraph </p>"

console.log(portfolioEl); */


// 📌 className, classList

const leadEl = document.querySelector('.lead')

// class name (its a string)

//overwrite the content of class attribute
//leadEl.className = 'fabio'
//console.log(leadEl.className);

// append something to the class name string
leadEl.className += ' fabio'
console.log(leadEl.className);

// class list é token list (un array)
leadEl.classList.add('my-4')
console.log(leadEl.classList);



// 📌 JavaScript Style



// write on the style
leadEl.style.color = 'red'
leadEl.style.backgroundColor = 'yellow'


console.log(leadEl.style);

const groguImgEl = document.querySelector('img')

// read a property
console.log(groguImgEl.src)
console.log(groguImgEl.alt)


// write another value
groguImgEl.alt = 'This is the image of grogu'



// append html to an exitsing node

leadEl.innerHTML += '<img src="https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png" alt="grogu">'



/* 📌 Event listeners */
// select the dom element where you want to attach the listener

/* const buttonEl = document.querySelector('button')

buttonEl.addEventListener('click', function () {
  console.log('Button clicked');

})


const cardEl = document.querySelector('.card')

cardEl.addEventListener('click', () => {
  console.log('div clicked');

}) */


const buttonEl = document.querySelector('button')

function handleButtonClick() {
  console.log('clicked');

}


buttonEl.addEventListener('click', handleButtonClick)


const cardEl = document.querySelector('.card')

cardEl.addEventListener('click', handleButtonClick)