import * as types from './mutation-types';
import axios from 'axios';

export default {
  [types.CHECK](state) {
    // Check user is login
    state.authenticated = !! localStorage.getItem('token');
    const token =  localStorage.getItem("token");
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
    console.log("You has been logout to our system!");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    state.authenticated = false;
    state.user = '';

    // Remove header common
    axios.defaults.headers.common['Authorization'] = null;
    return true;
  },

  [types.SET_USER](state, data) {
    state.authenticated = true;
    state.user = data;
    console.log('%c Authentification successfull', 'color: green');  
  },

}
