const teachers = [
  'Nathan',
  'Fabio',
  'Phil',
  'Ed',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// array.reverse()
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const thisTeacher = teachers[i]
  reversedTeachers.push(thisTeacher);
}
console.log(reversedTeachers);
teachers.reverse()

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// array.filter()
const longNames = [];
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];

  if (thisTeacher.length >= 5) {
    longNames.push(thisTeacher)
  }
}

console.log(longNames);



// 3. Rimuovi 'Ed' dall'array teachers
// array.indexOf()
// array.splice(x, xs)
teachers.splice(teachers.indexOf('Ed'), 1)
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// array.includes()
let isFabioPresent = null;
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];

  if (thisTeacher === 'Fabio') {
    isFabioPresent = true
    break
  }
}
console.log(isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// array.join()
let teachersString = '';
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];

  if (index === teachers.length - 1) {
    teachersString += `${thisTeacher}`
  } else {
    teachersString += `${thisTeacher}, `
  }

}
console.log(teachersString);






