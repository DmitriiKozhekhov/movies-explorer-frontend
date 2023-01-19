import { BASE_URL } from "../constants/constants";

function request({url, method = 'POST', data}) {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
    ...!!data && {body: JSON.stringify(data)},
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res.status);
    });
}

export function register(email, password, name) {
  return request({
    url: '/signup',
    data: {email, password, name}
  });
}

export function authorize(email, password) {
  return request({
    url: '/signin',
    data: {email, password}
  });
}

export function signout() {
  return request({
    url: '/signout',
    method: 'GET',
    credentials: 'include',
  });
}

export function getContent() {
  return request({
    url: '/users/me',
    method: 'GET',
    credentials: 'include',
  });
}
