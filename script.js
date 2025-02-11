// const APILINK =
//   'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCHAPI =
//   'https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query='

const APILINK = ' http://www.omdbapi.com/?t='
const APIKEY = '&apikey=8bd467f3'

const main = document.getElementById('section')
const form = document.getElementById('form')
const search = document.getElementById('query')

function retrunMovies(url) {
  console.log(url)

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(Object.keys(data))
      Object.keys(data).forEach((element) => {
        data[element]
        const div_card = document.createElement('div')
        div_card.setAttribute('class', 'card')

        const div_row = document.createElement('div')
        div_row.setAttribute('class', 'row')

        const div_column = document.createElement('div')
        div_column.setAttribute('class', 'column')

        const image = document.createElement('img')
        image.setAttribute('class', 'thumbnail')
        image.setAttribute('id', 'image')

        const title = document.createElement('h3')
        title.setAttribute('id', 'title')

        const center = document.createElement('center')

        title.innerHTML = `${data['Title']} / ${data['Released']}`
        image.src = data['Poster']

        center.appendChild(image)
        div_card.appendChild(center)
        div_card.appendChild(title)
        div_column.appendChild(div_card)
        div_row.appendChild(div_column)

        main.appendChild(div_row)
      })
    })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  main.innerHTML = ''

  const searchItem = search.value

  if (searchItem) {
    retrunMovies(APILINK + searchItem + APIKEY)
    search.value = ''
  }
})
