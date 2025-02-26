console.log('hi');
//select the form element form the dom
const formEl = document.getElementById('member_form')
const cardsEl = document.querySelector('#cards .row')
const teamMembers = [
  {
    name: "Alice Johnson",
    job: "Project Manager",
    image: "https://picsum.photos/id/65/300/200"
  },
  {
    name: "Bob Smith",
    job: "Software Engineer",
    image: "https://picsum.photos/id/66/300/200"
  },
  {
    name: "Charlie Brown",
    job: "UX Designer",
    image: "https://picsum.photos/id/68/300/200"
  },
  {
    name: "Diana Prince",
    job: "Quality Assurance",
    image: "https://picsum.photos/id/69/300/200"
  }
];

console.log(teamMembers);
renderTeamMembers(teamMembers, cardsEl)





/* 💡 anonymous functions
// function declaration style
function(e){
}

// arrow function style
(e)=>{
  }
*/

// add a submit event listener to the form 
formEl.addEventListener('submit', (e) => {

  // prevent the form default
  e.preventDefault()

  // select the form inputs
  // save the name into a variable
  const name = document.querySelector('input[name="name"]').value
  console.log(name);

  // save the job into a variable
  const job = document.querySelector('input[name="job"]').value
  console.log(job);

  // save the image into a variable
  const image = document.querySelector('input[name="image"]').value
  console.log(image);


  // create an object litteral (ES5) = 2016
  /*   const member = {
      name: name,
      job: job,
      image: image
    } */

  // create an object (shortcut ES6) 2017
  const member = {
    name,
    job,
    image
  }


  console.log(member);

  // Create a function that returns the markup
  const markup = getMemberMarkup(member)


  // extended syntax
  //cardsEl.innerHTML = cardsEl.innerHTML + markup

  //console.log(cardsEl.innerHTML + markup);

  // shortend syntax
  cardsEl.innerHTML += markup


  // reset the form input elements

  // option 1
  /*   document.querySelector('input[name="name"]').value = ''
  document.querySelector('input[name="job"]').value = ''
  document.querySelector('input[name="image"]').value = '' */

  // option 2
  formEl.reset()


})


// Functions


function renderTeamMembers(membersArray, domEl) {

  for (let index = 0; index < membersArray.length; index++) {
    const thisMember = membersArray[index];
    console.log(thisMember);


    // Create a function that returns the markup
    const markup = getMemberMarkup(thisMember, 'col-4', 'col-md-3', 'col-lg-4')
    console.log(markup);

    domEl.innerHTML += markup

  }
}



function getMemberMarkup(memberObj, ...classes) {

  // desctructuring an object
  const { name, image, job } = memberObj

  console.log(name, image, job);

  console.log(classes);


  const markup = ` 

    <div class="${classes.join(' ')}"> 
      <div class="card">
        <img src="${image}" alt="" class="card-img-top">

        <div class="card-body">
          <h3>${name}</h3>
          <p>${job}</p>
        </div>
      </div>
    </div>
    `

  console.log(markup);
  return markup
}



// descructuring array
/* const [userName, userJob, userImage] = ['Fabio', 'Developer', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png']

console.log(userName, userJob, userImage); */


// skip a value
/* const [userName, , userImage] = ['Fabio', 'Developer', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png']
console.log(userName, , userImage); */




// without destructuring

/* const student = {
  name: 'Paolo',
  age: 30,
  email: 'paolo@email.it',
  list: [
    'item 1',
    'item 1',
    'item 1',
  ]
}; */

/* const name = student.name
const age = student.age
const email = student.email */


/* const { name, age, email } = student

console.log(name); // Paolo */



const thisStudentArray = ['Paolo', 30, 'paolo@email.it']

const [name, age, email] = thisStudentArray

// select only the first and the last item
//const [name, , email] = thisStudentArray
// console.log(name, email);

console.log(name, age, email);




// Spred operator
const person = {
  name: 'Person 1',
  age: 10,
}


console.log(person);

//const anotherPerson = person
const anotherPerson = { ...person }

console.log(anotherPerson);


person.lastname = 'lastname person'

console.log(person, anotherPerson);





const moviesList = ['Starwars', 'Matrix', 'Avatar']
const moviesCopy = ['Cio', ...moviesList, 'Tenet']

moviesList.push('Imitation Game')
console.log(moviesList, moviesCopy);





function myFunction(...myArguments) {
  console.log(myArguments);
}

myFunction('uno');
//avremo un array composto da tre elementi

myFunction('uno', 3, { name: 'pippo' });

myFunction('uno', 3, { name: 'pippo' }, true, 'cioao', 'fabio', [1, 3, 55]);



function sum(...numbs) {
  console.log(numbs);

  let sum = 0;
  for (let i = 0; i < numbs.length; i++) {
    const num = numbs[i];
    sum += num
  }

  return sum

}

sum(1, 5, 6, 5)



function dd(...params) {
  for (let i = 0; i < params.length; i++) {
    console.log(`${i}:${params[i]}`);
  }
}

dd(1, 4, 6, ['ciao', 'coiap'])