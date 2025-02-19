console.log('hi');

// select the form inputs elements
const formEl = document.getElementById('business')
const nameEl = document.getElementById('name')
const prefixEl = document.getElementById('prefix')
const usernameEl = document.getElementById('username')
const companyEl = document.getElementById('company')
const emailEl = document.getElementById('email')
const jobEl = document.getElementById('job')
const phoneEl = document.getElementById('phone')
const imageEl = document.getElementById('image')

// select the card elements
const cardCompany = document.querySelector('.card .card-header')
console.log(cardCompany, companyEl);

const cardPrefix = document.querySelector('.card .prefix')
const cardFullname = document.querySelector('.card .fullname')
const cardEmail = document.querySelector('.card .email')
const cardJob = document.querySelector('.card .job')
const cardPhone = document.querySelector('.card .phone')
const cardImage = document.querySelector('.card img')




formEl.addEventListener('submit', function (e) {
  e.preventDefault();


  // gather the data from the inputs
  const company = companyEl.value

  // update the card's values
  cardCompany.innerHTML = company
  cardPrefix.innerHTML = prefixEl.value
  cardFullname.innerHTML = usernameEl.value
  cardEmail.innerHTML = emailEl.value
  cardJob.innerHTML = jobEl.value
  cardPhone.innerHTML = phoneEl.value
  cardImage.src = imageEl.value

})

