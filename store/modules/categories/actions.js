import * as types from "./mutation-types";
import { get, post } from "@/plugins/api";
import constants from "@/constants";

const HTTP_SUCCESS = 200;

//This is login function
export const getCategoryList = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.STD_CATEGORY).then(result => {
      commit(types.SET_CATEGORY_LIST, result.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(e => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(e);
    });
  });
};

export const createCategory = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.STD_CATEGORY, data).then(result => {
      commit(types.SET_CATEGORY, result.data);
      commit("setLoading", false, { root: true });
      resolve(HTTP_SUCCESS);
    })
    .catch(e => {
      commit("setLoading", false, { root: true });
      commit("notifyError", error, { root: true });
      reject(e);
    });
  });
};

export default {
  getCategoryList,
  createCategory
}
