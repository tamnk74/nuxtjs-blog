import * as types from "./mutation-types";
import { get, post } from "@/plugins/api";
import constants from "@/constants";
import Vue from 'vue';

const HTTP_SUCCESS = 200;

export const check = ({ commit }) => {
  commit(types.CHECK);
};

//This is login function
export const login = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.REQUEST_LOGIN, data)
      .then(result => {
        // Set localstorage
        if (result.data.data) {
          localStorage.setItem("token", result.data.data.token);
          // Reset state after login
          commit(types.SET_USER, result.data.data.user);
          commit("setLoading", false, { root: true });
          resolve(HTTP_SUCCESS);
        }
      })
      .catch(error => {
        commit(types.LOGOUT);
        commit("notifyError", error, { root: true });
        reject(error);
      });
  });
};

// This is logout function
export const logout = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit(types.LOGOUT);
    resolve(HTTP_SUCCESS);
  });
};

export default {
  check,
  login,
  logout
}
