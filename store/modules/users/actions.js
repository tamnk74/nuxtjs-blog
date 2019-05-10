import * as types from "./mutation-types";
import { get, post, put, del } from "@/plugins/api";
import constants from "@/constants";
import Vue from 'vue';

const HTTP_SUCCESS = 200;

export const getUserList = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    return get(constants.api.STD_USER).then(result => {
      commit(types.SET_USER_LIST, result.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(error => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(error);
    });
  });
};

export const getUser = ({ commit }, id) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    return get(constants.api.STD_USER + '/' + id).then(result => {
      commit(types.SET_USER, result.data.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(error => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(error);
    });
  });
};


export const createUser = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.STD_USER, data).then(result => {
      commit(types.SET_USER, result.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(error => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(error);
    });
  });
};

export const updateUser = ({ commit }, data) => {
  commit("setLoading", true, { root: true });
  return new Promise((resolve, reject) => {
    return put(constants.api.STD_USER+'/' + data.id, data).then(result => {
      commit(types.UPDATE_USER, result.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(error => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(error);
    });
  });
};

export const deleteUser = ({ commit }, id) => {
  commit("setLoading", true, { root: true });
  return new Promise((resolve, reject) => {
    return del(constants.api.STD_USER+'/' + id).then(result => {
      commit(types.DELETE_USER, id);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(error => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(error);
    });
  });
};


export default {
  getUserList,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
