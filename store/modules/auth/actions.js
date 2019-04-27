import * as types from "./mutation-types";
import { get, post } from "@/plugins/api";
import constants from "@/constants";

const HTTP_SUCCESS = 200;

export const check = ({ commit }) => {
  commit(types.CHECK);
};

//This is login function
export const login = ({ commit }, data) => {
  commit("SET_LOADING", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.REQUEST_LOGIN, {
      email: data.email,
      password: data.password,
    })
      .then(result => {
        // Set localstorage
        if (result.data.data) {
          localStorage.setItem("token", result.data.data.token);
          localStorage.setItem("user", JSON.stringify(result.data.data.user));

          // Reset state after login
          commit(types.SET_USER, result.data.data.user);
          commit("SET_LOADING", false, { root: true });
          resolve(HTTP_SUCCESS);
        }
      })
      .catch(error => {
        commit(types.LOGOUT);
        localStorage.removeItem("token");
        commit("SET_LOADING", false, { root: true });
        commit("notifyError", error, { root: true });
        reject(error);
      });
  });
};

// This is logout function
export const logout = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    // Remove localstorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    commit(types.LOGOUT);
    resolve(HTTP_SUCCESS);
  });
};

export default {
  check,
  login,
  logout
}
