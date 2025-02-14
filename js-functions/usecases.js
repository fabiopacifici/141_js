
// reverse
const teachers = [
  'Nathan',
  'Fabio',
  'Phil',
  'Ed',
  'Carlo',
  'Lewis',
  'Luca'
];

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// array.reverse()

/* Same code ⚡ */
const reversedTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  const thisTeacher = teachers[i]
  reversedTeachers.push(thisTeacher);
}

console.log(reversedTeachers);


const guestList = [
  "luke@gmail.com",
  "luis@gmail.com",
  "luana@gmail.com",
  "alessandro@gmail.com",
  "antonella@gmail.com",
  "rosy@gmail.com",
  "marina@gmail.com",
  "vincenzo@gmail.com",
  "viktoe@gmail.com"

]

/* Same code ⚡ */

const reversedGuestList = [];
for (let i = guestList.length - 1; i >= 0; i--) {
  const thisGuest = guestList[i]
  reversedGuestList.push(thisGuest);
}
console.log(reversedGuestList);


/* Same code ⚡ */
const movies = ['Starwars', 'Mandalorian', 'Boba fett']
const reversedMovies = [];
for (let i = movies.length - 1; i >= 0; i--) {
  const thisMovie = movies[i]
  reversedMovies.push(thisMovie);
}
console.log(reversedMovies);



// includes esempio
const partyList = [
  "luke@gmail.com",
  "luis@gmail.com",
  "luana@gmail.com",
  "alessandro@gmail.com",
  "antonella@gmail.com",
  "rosy@gmail.com",
  "marina@gmail.com",
  "vincenzo@gmail.com",
  "viktoe@gmail.com"

]
// Chiedi all’utente la sua email
const userEmail = prompt('type your email address here:')


let canAccess = false;
// ciclo all'interno della guest list
for (let index = 0; index < partyList.length; index++) {
  const thisGuest = partyList[index];
  if (thisGuest === userEmail) {
    canAccess = true
    break
  }
}



// search inside the teachers list


const teacherName = prompt('type your email address here:')

let found = false;
// ciclo all'interno della guest list
for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];
  if (thisTeacher === teacherName) {
    found = true
    break
  }
}



teachers.includes(teacherName)
guestList.includes(userEmail)
