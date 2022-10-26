let placeIndex = 0

const hero = document.querySelector('section#hero')
const heroTitle = hero.querySelector('.wrapper_title h1')
const heroSubtitle = hero.querySelector('.title h2')

const links = hero.querySelectorAll('.link-item')

const places = [
  {
    name: 'Parque Nacional da Tijuca',
    description: 'Conservação brasileira está aqui',
    background: 'parque-nacional-tijuca.png'
  },
  {
    name: 'Centro Cultural Banco do Brasil',
    description: 'Aqui você encontra história e cultura',
    background: 'centro-cultura-bb-rj.png'
  },
  {
    name: 'Copacabana',
    description: 'Venha pegar um bronze e caminhar no calcadçao',
    background: 'copacabana.png'
  },
  {
    name: 'Confeitaria Colombo',
    description: 'Venha buscar seu sonho',
    background: 'confeitaria-colombo.png'
  },
]

function showPlace() {
  if (placeIndex > 3) placeIndex = 0

  const place = places[placeIndex]

  hero.style.backgroundImage = `url("./assets/images/${place.background}")`
  heroTitle.innerText = place.name
  heroSubtitle.innerText = place.description

  links.forEach(element => element.classList.remove('selected'))

  hero.querySelector(`.link-item[data-place="${placeIndex}"]`).classList.add('selected')

  placeIndex++
}

let placeInterval = setInterval(showPlace, 7000)

showPlace()

links.forEach(linkElement => {
  linkElement.addEventListener('click', () => {
    clearInterval(placeInterval)

    placeIndex = linkElement.dataset.place

    showPlace()

    placeInterval = setInterval(showPlace, 7000)
  })
})