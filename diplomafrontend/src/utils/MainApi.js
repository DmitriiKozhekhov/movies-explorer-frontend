import { BASE_URL } from "../constants/constants";

class MainApi {
  constructor(host, headers, corsHeaders) {
    this._host = host;
    this._headers = headers;
    this._corsHeaders = corsHeaders;
    this._profileInfoHost = `${this._host}/users/me`;
    this._moviesHost = `${this._host}/movies`;
  }

  getResOrError(res){
    if (res.ok){
      return res.json();
    }
    return Promise.reject({ error: `Ошибка при загрузке данных`, message: res });
  }

  getUserInfo() {
    return fetch(this._profileInfoHost, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
      mode: 'cors',
    })
      .then(this.getResOrError)
  }

  editProfile(editedName, editedEmail) {
    return fetch(this._profileInfoHost, {
      method: 'PATCH',
      headers: this._headers,
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify({
        name: editedName,
        email: editedEmail
      })
    })
      .then(this.getResOrError);
  }

  getMovies() {
    return fetch(this._moviesHost, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
      mode: 'cors',
    })
      .then(this.getResOrError);
  }

  saveMovie(movie) {
    return fetch(this._moviesHost, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      mode: 'cors',
      body: JSON.stringify(movie),
    })
      .then(this.getResOrError);
  }

  deleteMovie(movieId) {
    return fetch(`${this._moviesHost}/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
      mode: 'cors',
    })
      .then(this.getResOrError);
  }
}

export const mainApi = new MainApi(BASE_URL, {'Content-Type': 'application/json'});
