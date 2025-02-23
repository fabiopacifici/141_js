// Object litteral syntax
// create an object
const person = {
  name: 'Fabio',
  age: 45,
  job: 'teacher',
  friends: ['luke', 'mark', 'mando'],
  clothes: {
    tee: '',
    pants: '',
    hat: ''
  }
}
console.log(person);


const ball = {
  'type': 'golf',
  'color': 'red',
  'material-type': 'plastic',
  materialType: 'hard plastic',
  material_type: 'soft plastic'
}


console.log(ball);


const product = {
  name: ' Laptop',
  isAvailable: true,
  colors: ['black', 'white', 'silver'],
  price: 1200,
  desciption: 'This is a laptop',
  qty: 10
}

console.log(product);

const post = {
  title: 'Learn JS',
  author: 'Fabio',
  summary: 'a cool blog post about learning js',
  body: 'this is the post body',
  'cover-image': 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20201031231040'
}
console.log(post);


// 👉 Read an object property

// 1. dot notation
post.title // Learn js
console.log(post.title);

// 2. square brackets notation
post['author'] // Fabio
console.log(post['author']);

const key = 'title' //prompt('Tell a property you want to read from the objec post')
console.log(key);


// with dot notation ❌
post.key // key not found
console.log(post.key) // undefined

post[key] // ? key? title -> post['title']
console.log(post[key]);


// read an array inside the object

console.log(product.colors); // array
console.log(product['colors'][0]);




// 👉 write an object property
post.isPublic = true
console.log(post);


post['likes'] = 10
console.log(post);


// 👉 update an object property
post.isPublic = false
console.log([post]);



// For In
for (const key in post) {
  console.log(key);
  console.log(post[key]);
  console.log(`key:value ${key}:${post[key]}`);


}

// 1. key = title
// 2. key = author
// ..


for (const key in product) {
  const thisValue = product[key]
  console.log(key);
  console.log(product[key]);
  console.log(`key:value ${key}:${thisValue}`);


}


// Complex data types

const posts = [
  {
    title: 'Learn JS',
    author: person,
    summary: 'a cool blog post about learning js',
    body: 'this is the post body',
    'cover-image': 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20201031231040'
  },
  {
    title: 'Learn PHP',
    author: 'Fabio',
    summary: 'a cool blog post about learning js',
    body: 'this is the post body',
    'cover-image': 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20201031231040'
  },
  {
    title: 'Learn React',
    author: 'Fabio',
    summary: 'a cool blog post about learning js',
    body: 'this is the post body',
    'cover-image': 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20201031231040'
  }, {
    title: 'Learn Node',
    author: 'Fabio',
    summary: 'a cool blog post about learning js',
    body: 'this is the post body',
    'cover-image': 'https://static.wikia.nocookie.net/starwars/images/4/43/TheChild-Fathead.png/revision/latest?cb=20201031231040'
  }
]

console.log(posts);


function printCard(thisPost) {
  return ` <div class="col">
            <div class="card">
              <img src="" alt="">
              <div class="card-body">
               <h3>${thisPost.title}</h3>
                <p>${thisPost.summary}</p>
              </div>
            </div>
          </div>`
}

const rowEl = document.querySelector('.row')


for (let index = 0; index < posts.length; index++) {
  const thisPost = posts[index];
  console.log(thisPost);

  const markup = `<div class="col">
            <div class="card">
              <img src="" alt="">
              <div class="card-body">
                <h3>${thisPost.title}</h3>
                <p>${thisPost.summary}</p>
              </div>
            </div>
          </div>`


  rowEl.insertAdjacentHTML('beforeend', printCard(thisPost))


}


