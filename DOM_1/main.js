console.log('hi');


// select the dom node (button) where attach the event listener
const buttonEl = document.querySelector('button')

// select the dom node with the nav
const navEl = document.querySelector('nav')

console.log(buttonEl, navEl);

// add an event listener to the button (click)
buttonEl.addEventListener('click', function () {
  console.log('clicked');

  //navEl.classList.toggle('active')

  if (navEl.classList.contains('active')) {
    navEl.classList.remove('active')
  } else {
    navEl.classList.add('active')
  }

})

// toggle the active class (if present remove it otherwise add it)