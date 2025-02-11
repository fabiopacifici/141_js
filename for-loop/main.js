console.log(10 * 2);
console.log(10 * 3);
console.log(10 * 4);
console.log(10 * 5);
console.log(10 * 6);
console.log(10 * 7);
console.log(10 * 8);
console.log(10 * 9);
console.log(10 * 10);

// 100 lines of code


console.log(100 * 2);
console.log(100 * 3);
console.log(100 * 4);
console.log(100 * 5);
console.log(100 * 6);
console.log(100 * 7);
console.log(100 * 8);
console.log(100 * 9);
console.log(100 * 10);


// x loc

console.log(100 * 2);
console.log(100 * 3);
console.log(100 * 4);
console.log(100 * 5);
console.log(100 * 6);
console.log(100 * 7);
console.log(100 * 8);
console.log(100 * 9);
console.log(100 * 10);
console.log(100 * 11);
console.log(100 * 12);
console.log(100 * 13);
console.log(100 * 14);
console.log(100 * 15);
console.log(100 * 16);
console.log(100 * 17);
console.log(100 * 18);
console.log(100 * 19);
console.log(100 * 20);

/* 
Problem:
 - same code repeated multiple times 

Solution:
  - loop (for, while, dowhile, foreach, for in, for of) 
*/


/* const number_one = prompt('type a number')
const number_two = prompt('type a number') */


/* 
📌 Syntax
- for (keyword)
- (counter; condition; increment/decrement)
- {// your code}

for (counter; condition; increment/decrement) {

  // your code to repeat here 

}

*/




for (let i = 0; i < 10; i++) {
  // Block scope
  console.log('ciao', i);
}


for (let i = 0; i < 10; ++i) {
  // Block scope
  console.log('ciao', i);

}


for (let i = 2; i <= 10; i++) {
  console.log(10 * i);
}
console.log('here outside of the loop');

/*
- (1): i = 2 ? true -> execute the code -> i++ (i = 3)
- (2): i = 3 ? true -> execeute the code -> i++ (i = 4)
- (3): i = 4 ? true -> execeute the code -> i++ (i = 5)
- (4): i = 5 ? true -> execeute the code -> i++ (i = 6)
- (5): i = 6 ? true -> execeute the code -> i++ (i = 7)
- (6): i = 7 ? true -> execeute the code -> i++ (i = 8)
- (7): i = 8 ? true -> execeute the code -> i++ (i = 9)
- (8): i = 9 ? true -> execeute the code -> i++ (i = 10)
- (9): i = 10 ? true -> execeute the code -> i++ (i = 11)
- (10): i = 11 ? false -> exit the loop

*/


console.log('hi there');


// Incrfemento + decremento (post-position)

let x = 2;

let y = x++;
console.log(y);
console.log(x);
// y = 2, x = 3

// pre-position

let z = 2;

let u = ++z;
console.log(u);
console.log(z);
// z = 3, u = 3



for (let i = 0; i < 10; i++) {

  if (i % 2 === 0) {
    console.log(i);
  } else {
    console.log(`The number ${i} is odd`)
  }


}


/* for (let i = 0; i < 10; i++) {

  const userInput = prompt('type something')
  console.log(userInput);

}
 */
