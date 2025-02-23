console.log('hi timing functions');

function sum() {

  console.log('hi there');

}
console.log(sum);


const array = [1, 3, 5]
for (let index = 0; index < array.length; index++) {
  const element = array[index];

  console.log(element);

}

console.log('hi there');

sum()



/* 📌 Timing funtions */

// 👉 Set Timeout  (executed only once)
// with anon function
const alertTimeoutId = setTimeout(function () {
  alert('Join our newsletter');

}, 5000)

// with a function handler
const timetoutId = setTimeout(logMessage, 3000)
console.log(timetoutId, 'timeout ID');

function logMessage() {
  console.log('Join our newsletter');
}


// 👉 set interval (exectured infinitely)

const intervalId = setInterval(logMessage, 1000)
console.log(intervalId, 'Interval ID');


clearInterval(intervalId)

clearTimeout(alertTimeoutId)




/* 

Scrivere un programma che faccia il conto alla rovescia per 10 secondi e poi auguri buon anno.


*/


