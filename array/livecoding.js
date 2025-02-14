/* Live coding JS Array */

const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]




/* 
Tasks todo:
  1. Aggiungi Fred all'array names
  2. Aggiungi 4 alla fine dell'array numbers
  3. Aggiungi Rio all'inizio dell'array cities
  4. Stampare solo i numeri dispari usando un ciclo

*/

// 1 task
names.push('Fred')
//names[0] = 'Fred';
console.log(names);

// 2 task
numbers.push(4)
console.log(numbers);

// 3 task
cities.unshift('Rio')
console.log(cities);

// task 4

for (let index = 0; index < numbers.length; index++) {
  const thisNumber = numbers[index];

  if (thisNumber % 2 !== 0) {
    console.log(thisNumber);
  }


}

