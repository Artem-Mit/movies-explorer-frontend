export default function filmsfilter(movies, movieName, short) {
  function filterByName(films = movies, name = movieName) {
    return films.filter((movie) =>
    ~movie.nameRU.toLowerCase().indexOf(name.toLowerCase())
    ||
    ~movie.nameEN.toLowerCase().indexOf(name.toLowerCase()))
  }

  if (!short) {
    return filterByName();
  }

  if (short) {
    const FilmsFilteredByName = filterByName();
    return FilmsFilteredByName.filter((movie) => movie.duration <= 40);
  }
}


