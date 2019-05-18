import * as types from './mutation-types';
import axios from 'axios';

export default {
  [types.CHECK](state) {
    state.authenticated = !!localStorage.getItem('token');
  },

  [types.LOGIN](state, data) {
    state.authenticated = true;
    state.user = {
      email: data.email,
      name: data.name
    }
  },

  [types.LOGOUT](state) {
    // Set flag user is logout
    console.log("You has been logout to our system!");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    state.authenticated = false;
    state.user = '';
  },

  [types.SET_USER](state, data) {
    state.authenticated = true;
    state.user = data;
    console.log('%c Authentification successfull', 'color: green');
  },

}
