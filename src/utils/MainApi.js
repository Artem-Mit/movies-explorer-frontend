class MainApi {
  constructor (options) {
    this.url = options.url;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async register(data) {
    const res = await fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return this._checkResult(res);
  };

  async login(data) {
    const res = await fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return this._checkResult(res);
  };

  async deleteMovie(id) {
    const res = await fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    return this._checkResult(res);
  }

  async createMovie(data) {
    const res = await fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return this._checkResult(res);
  }
}

const mainApi = new MainApi({
  url: process.env.REACT_APP_API_SRV,
})

export default mainApi;
