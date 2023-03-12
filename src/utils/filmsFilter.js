export default function filmsfilter(films, value) {
  return films.filter((film) =>
    ~film.nameRU.toLowerCase().indexOf(value.toLowerCase())
    ||
    ~film.nameEN.toLowerCase().indexOf(value.toLowerCase()))
}
