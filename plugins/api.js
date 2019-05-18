import axios from 'axios'

const concatUrl = function (url) {
  const baseUrl = process.env.baseUrl + '/api/';
  return baseUrl.concat(url);
}

const axiosFactory = function(method = 'GET', url, payload = {}) {
  let token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };

  return axios(Object.assign({
    method: method,
    url: concatUrl(url),
  }, method === 'GET' ? { params: payload }: { data: payload }));
}

export function get(url, payload = '') {
  return axiosFactory('GET', url, payload);
}
export function post(url, payload = '') {
  return axiosFactory('POST', url, payload);
}
export function patch(url, payload = '') {
  return axiosFactory('PATCH', url, payload);
}
export function put(url, payload = '') {
  return axiosFactory('PUT', url, payload);
}
export function del(url, payload = '') {
  return axiosFactory('DELETE', url, payload);
}