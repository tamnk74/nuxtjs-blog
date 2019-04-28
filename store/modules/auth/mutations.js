import * as types from './mutation-types';
import axios from 'axios';

export default {
  [types.CHECK](state) {
    // Check user is login
    state.authenticated = !! window.localStorage.getItem('token');
    const jsonUser = window.localStorage.getItem('user');
    state.user = jsonUser && JSON.parse(jsonUser);
    const token =  window.localStorage.getItem("token");
    axios.defaults.headers.common['Authorization'] = null;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },

  [types.LOGIN](state, data) {
    // Set flag user is login
    state.authenticated = true;

    state.user = {
      email: data.email,
      name: data.name
    }

    localStorage.getItem("token");
  },

  [types.LOGOUT](state) {
    // Set flag user is logout
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    state.authenticated = false;
    state.user = '';

    // Remove header common
    axios.defaults.headers.common['Authorization'] = null;
    return true;
  },

  [types.SET_USER](state, data) {
    // Reset state in local
    localStorage.setItem("user", JSON.stringify(data));
    state.authenticated = true;
    state.user = data;
  },

}
