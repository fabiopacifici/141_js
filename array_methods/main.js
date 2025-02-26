/* 
📌 ForEach array method
- array.forEach(callback)
- callback: (element, index, array) => {}
- forEach() method executes a provided function once for each array element.
*/

// Loop over the names array 
const names = ['Marco', 'Luca', 'Luigi', 'Mario']

// via a for loop
for (let i = 0; i < names.length; i++) {
  const thisName = names[i]
  console.log(names[i])
  console.log(thisName);


}

// using a forEach
names.forEach((elemnt, i, arr) => {
  console.log(elemnt, i, arr, names);

})


// Loop over the numbs array
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// via a for loop
for (let i = 0; i < numbs.length; i++) {
  console.log(numbs[i])
}

// using a forEach
numbs.forEach((numb) => {
  console.log(numb);

})


// Loop over the movies array
const movies = [
  {
    id: 1,
    title: 'The Matrix',
    genre: 'sci-fi',
    year: 1999,
    cast: ['Keanu Reeves', 'Laurence Fishburne'],
    director: 'The Wachowskis',

    /* getMovieDetails: () => { }, */

    getMovieDetails() {
      console.log(this); // {}

      return `${this.title} is a ${this.genre} movie directed by ${this.director} in ${this.year}`
    }

  },
  {
    id: 2,
    title: 'The Matrix Reloaded',
    genre: 'sci-fi',
    year: 2003,
    cast: ['Keanu Reeves', 'Carrie-Anne Moss'],
    director: 'The Wachowskis',
    getMovieDetails() {
      return `${this.title} is a ${this.genre} movie directed by ${this.director} in ${this.year}`
    }

  },
  {
    id: 3,
    title: 'The Matrix Revolutions',
    genre: 'sci-fi',
    year: 2013,
    cast: ['Keanu Reeves', 'Carrie-Anne Moss'],
    director: 'The Wachowskis',
    getMovieDetails() {
      return `${this.title} is a ${this.genre} movie directed by ${this.director} in ${this.year}`
    }
  },

]

// via a for loop
for (let i = 0; i < movies.length; i++) {

  const thisMovie = movies[i]
  console.log(thisMovie);

}

// using a forEach
movies.forEach((movie) => {
  console.log(movie.title);
  console.log(movie.getMovieDetails());

})



// Loop over the moviesEls NodeList
const moviesEls = document.querySelectorAll('.col')
console.log(moviesEls);

// via a for loop
for (let i = 0; i < moviesEls.length; i++) {
  const movieEl = moviesEls[i]
  console.log(movieEl);
}

// via a forEach loop
moviesEls.forEach((movieEl) => {

  console.log(movieEl);

})


/* 📌 Map 

const names = ['Marco', 'Luca', 'Luigi', 'Mario']

*/

const namesList = []

for (let i = 0; i < names.length; i++) {
  const thisName = names[i]
  namesList.push(`${thisName} ${i}`)
}

console.log(namesList);



const newNames = names.map((element, index) => {
  return `${element} ${index}`
})


console.log(names, newNames);

// ['Marco 0', 'Luca 1', 'Luigi 2', 'Mario 3']


// Loop over the numbs array
//const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbs = numbs.map((numb) => {
  return numb * 5
})

console.log(newNumbs);


// Loop over the movies array


const moviesDetails = movies.map((movie) => {
  return movie.getMovieDetails()
})

console.log(moviesDetails);



/* 📌 Filter
- array.filter(callback)
- callback: (element, index, array) => {}
- filter() method creates a new array with all elements that pass the test implemented by the provided function.

*/

// use filter to filter out names that start with 'M'
// const names = ['Marco', 'Luca', 'Luigi', 'Mario']

// extended version
/* const filteredNames = names.filter((name) => {
  if (name.startsWith('M')) {
    return true
  }
  return false

}) */

// shorter version
const filteredNames = names.filter(name => name.startsWith('M'))

console.log(filteredNames);

// ['Marco', 'Mario']


/* const filteredMovies = movies.filter(filterByYear);


function filterByYear(movie) {
  if (movie.year > 2000) {
    return true
  }
  return false
}

console.log(filteredMovies); */


// one-liner solution

const filteredMovies = movies.filter(movie => movie.year > 2000);

console.log(filteredMovies);


/* 📌 Find 

- array.find(callback)
- callback: (element, index, array) => {}
- find() method returns the value of the first element in the provided array that satisfies the provided testing function or undefined if not found.

*/

// find the movie with id 2
const foundElement = movies.find((movie) => {
  return movie.id === 10 || movie.id === 2
})


// use the returned value 
console.log(foundElement);

if (foundElement) {
  console.log('I found the movie');

} else {
  console.log('Not found movie');

}
