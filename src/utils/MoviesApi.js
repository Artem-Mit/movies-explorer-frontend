class MoviesApi {
  constructor(options) {
    this._url = options.url;
  }

  async _useFetch(newMethod = "GET") {
    const res = await fetch(`${this._url}`, {
      method: newMethod,
      headers: { "Content-Type": "application/json" },
    });
    return this._checkResult(res);
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return this._useFetch();
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;
