import axios from 'axios'

const concatUrl = function (url) {
  const baseUrl = process.env.baseUrl + '/api/';
  return baseUrl.concat(url);
}

export function get(url, payload = '') {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios({
    method: 'GET',
    url: concatUrl(url),
    params: payload
  });
}

export function post(url, payload = '') {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };
  return axios({
    method: 'POST',
    url: concatUrl(url),
    data: payload
  })
}


export function patch(url, payload = '') {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios({
    method: 'PATCH',
    url: concatUrl(url),
    data: payload
  });
}

export function put(url, payload = '') {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios({
    method: 'PUT',
    url: concatUrl(url),
    data: payload
  });
}

export function del(url, payload = '') {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios({
    method: 'DELETE',
    url: concatUrl(url),
    data: payload
  });
}
