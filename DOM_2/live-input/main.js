console.log('hi');

// select the dom nodes
const inputEl = document.getElementById('name')
const submitEl = document.querySelector('button')
const paragraphEl = document.querySelector('p') // add the paragraph
console.log(inputEl, submitEl);

console.log(inputEl.value);

// attach a click event listener to the submit button
submitEl.addEventListener('click', function () {
  console.log(inputEl.value);

  if (inputEl.value.lenght > 0) {
    paragraphEl.innerHTML = inputEl.value
  }


})

// listen to the input event on the input element
inputEl.addEventListener('input', function () {
  paragraphEl.innerText = inputEl.value
})
