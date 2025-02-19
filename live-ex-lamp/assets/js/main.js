console.log('turn on');
/* 

Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.


Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"



*/

// # preparation (select the dom nodes)

const imgEl = document.querySelector('img')
const btnEl = document.querySelector('button')
console.log(imgEl, btnEl);


// add an event listener to listen for the button click
btnEl.addEventListener('click', function () {
  //console.log('hi');
  //change the image
  console.log(imgEl.src);
  if (imgEl.src.includes('yellow')) {
    imgEl.src = './assets/img/white_lamp.png'
    btnEl.innerText = 'accendi'

  } else {
    imgEl.src = './assets/img/yellow_lamp.png'
    btnEl.innerText = 'spengi'
  }


})
