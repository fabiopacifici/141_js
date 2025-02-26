// Preparation 
const slides = [
  {
    image: './assets/img/01.jpg',
    title: 'Svezia',
    text: 'Scandinavia\'s blend of nature and innovation.',
  },
  {
    image: './assets/img/02.jpg',
    title: 'Norvegia',
    text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
  },
  {
    image: './assets/img/03.jpg',
    title: 'Alaska',
    text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
  },
  {
    image: './assets/img/04.jpg',
    title: 'Gran Canyon',
    text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
  },
  {
    image: './assets/img/05.jpg',
    title: "Skyrim",
    text: 'Epic Nordic fantasy with dragons and ancient magic.',
  }
];
let activeSlide = 0

console.log(slides);


// Select the dom elements

const sliderEl = document.querySelector('.slider')
const prevEl = document.querySelector('.prev')
const nextEl = document.querySelector('.next')

console.log(sliderEl, prevEl, nextEl);

// 👉 render all the images into the slider dom elements
// for loop + dom api
/* for (let index = 0; index < slides.length; index++) {
  const thisSlide = slides[index];

  console.log(thisSlide);

  // generate slide markup
  // 1. DOM API document.creteElement
  // 2. templete literal
  // 3. WEB API element.insertAdjacentHTML

  const imgEl = document.createElement('img')
  imgEl.src = thisSlide.image

  // check if the index === activeSlide
  imgEl.className = index === activeSlide ? 'active' : ''
  console.log(imgEl);

  sliderEl.appendChild(imgEl)

}
 */

// for loop + template literal
let slidesImagesElements = ''
for (let index = 0; index < slides.length; index++) {
  const { image, text, title } = slides[index];


  // generate slide markup
  // 1. DOM API document.creteElement
  // 2. templete literal
  const markup = renderSlideElement(image, title, index)
  slidesImagesElements += markup

  // 3. WEB API element.insertAdjacentHTML

}

sliderEl.innerHTML = slidesImagesElements


function renderSlideElement(image, title, index) {
  return `<img class="${index === activeSlide ? 'active' : ''}" src="${image}" alt="${title}">`
}

// Add event listener to the prev button
/* function prev (){

}
 */
prevEl.addEventListener('click', function () {
  console.log('cliccato su prev');



  if (activeSlide > 0) {
    activeSlide--

  } else {
    activeSlide = slides.length - 1
  }


  // TODO: what happens if i press prev when i am on the first image?


  console.log('Clicked next');

  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')
  console.log(activeImage);

  // remove the active class
  activeImage.classList.remove('active')

  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide]

  // add active class
  nextSlide.classList.add('active')

})


// Add event listener to the next button

/* function next() {
  console.log('Clicked next');

} */
nextEl.addEventListener('click', function () {



  if (activeSlide < slides.length - 1) {
    activeSlide++
  } else {
    activeSlide = 0
  }


  console.log('Clicked next');

  // select the currently active image
  const activeImage = document.querySelector('.slider img.active')
  console.log(activeImage);

  // remove the active class
  activeImage.classList.remove('active')

  // get the next slide
  const nextSlide = document.querySelectorAll('.slider img')[activeSlide] // tokelist []

  // add active class
  nextSlide.classList.add('active')



})




// Additional Notes
// conditional statement
/*
 if(index===activeSlide){

 } else {

 }

 // ternary operator
 index === activeSlide ? '' : ''
 */
