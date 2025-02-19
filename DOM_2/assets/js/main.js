console.log('DOM 2');
const listEl = document.querySelector('.list')
console.log(listEl);

const movies = ['Matrix', 'Imitation Game', 'Avatar', 'Starwars']



// Just numbers
const targetEl = document.getElementById('target')
for (let i = 0; i < 10; i++) {

  targetEl.innerHTML += `<li>${i}</li>`

}


// with create element

for (let i = 0; i < 10; i++) {

  // create the node
  const liEl = document.createElement('li')
  // append the content
  liEl.append(i)
  targetEl.appendChild(liEl)
}



/* 📌 1 With innertHTML */


let listItems = ''
for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];
  // \n creates a new line
  listItems += `<li>${thisMovie}</li>\n`
}

console.log(listItems);

listEl.innerHTML = listItems


// 📌 2 DOM API (createElement + )

//const listEl = document.querySelector('.list')
console.log(listEl);

//const movies = ['Matrix', 'Imitation Game', 'Avatar', 'Starwars']
for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];

  // create a new li node element
  const liEl = document.createElement('li')
  console.log(liEl);

  // append the content to the list item
  liEl.append(thisMovie)
  console.log(liEl);

  //append the li child to the ul parent
  listEl.appendChild(liEl)

}



// Web API
//const listEl = document.querySelector('.list')
console.log(listEl);

//const movies = ['Matrix', 'Imitation Game', 'Avatar', 'Starwars']


for (let index = 0; index < movies.length; index++) {
  const thisMovie = movies[index];

  listEl.insertAdjacentHTML('beforeend', `<li>${thisMovie}</li>`)


}