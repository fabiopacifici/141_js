console.log('hi');


/* when bart is clicked a prompt pops up and asks a sentence to repeat

after the first prompt anthor one pops up asking the number of times to repeat

the text appears on the board x number of times 
*/




// select the dom elements (bart + board)
const board = document.getElementById('board')
const bart = document.getElementById('bart')
console.log(bart, board);


// attach a click event listener to bart
bart.addEventListener('click', function () {
  console.log('click');
  // use a prompt to ask the sentence
  const sentence = prompt('Type a sentece to repeat')
  //Le tabelle non si usano per fare i layout

  // use another prompt to ask the number of repetition
  const times = Number(prompt('How many times?'))

  console.log(sentence);

  if (isNaN(times) || sentence.length < 5 || times < 1) {
    alert('ciucciati il calzino')
    return;
  }


  for (let i = 0; i < times; i++) {

    const markup = `<p> ${sentence}</p>`

    board.innerHTML += markup

  }



})





// loop over the repetition


// update the board step by step