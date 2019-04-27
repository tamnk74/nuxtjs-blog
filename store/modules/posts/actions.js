import * as types from "./mutation-types";
import { get, post } from "@/plugins/api";
import constants from "@/constants";

const HTTP_SUCCESS = 200;

//This is login function
export const getPostList = ({ commit }, data) => {
  commit("SET_LOADING", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.GET_POST_LIST).then(result => {
      commit(types.SET_POST_LIST, result.data);
      commit("SET_LOADING", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(e => {
      commit("SET_LOADING", false, { root: true });
      reject(e);
    });
  });
};

export const createPost = ({ commit }, data) => {
  commit("SET_LOADING", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.CREATE_NEW_POST, data).then(result => {
      commit(types.SET_POST, result.data);
      commit("SET_LOADING", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(e => {
      commit("SET_LOADING", false, { root: true });
      reject(e);
    });
  });
};

export default {
  getPostList,
  createPost
}
