import * as types from "./mutation-types";
import {get, post, put, del} from "@/plugins/api";
import constants from "@/constants";

const HTTP_SUCCESS = 200;

/**
 * GEt category list
 * @param commit
 * @param {Object} data
 * @returns {Promise<any>}
 */
export const getCategoryList = ({commit}, data) => {
  commit("setLoading", true, {root: true});

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.STD_CATEGORY, data).then(result => {
      commit(types.SET_CATEGORY_LIST, result.data);
      commit("setLoading", false, {root: true});
      resolve(HTTP_SUCCESS);
    })
      .catch(error => {
        commit("setLoading", false, {root: true});
        commit("notifyError", error, {root: true});
        reject(error);
      });
  });
};

/**
 * Get category by id
 * @param commit
 * @param {int} id
 * @returns {Promise<any>}
 */
export const getCategory = ({commit}, id) => {
  commit("setLoading", true, {root: true});
  return new Promise((resolve, reject) => {
    return get(constants.api.STD_CATEGORY + '/' + id).then(result => {
      commit(types.SET_CATEGORY, result.data.data.category);
      commit("setLoading", false, {root: true});
      resolve(HTTP_SUCCESS);
    })
      .catch(error => {
        commit("setLoading", false, {root: true});
        commit("notifyError", error, {root: true});
        reject(error);
      });
  });
};

/**
 * Create category
 *
 * @param commit
 * @param data
 * @returns {Promise<any>}
 */
export const createCategory = ({commit}, data) => {
  commit("setLoading", true, {root: true});

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.STD_CATEGORY, data).then(result => {
      commit(types.SET_CATEGORY, result.data);
      commit("setLoading", false, {root: true});
      resolve(HTTP_SUCCESS);
    })
      .catch(error => {
        commit("setLoading", false, {root: true});
        commit("notifyError", error, {root: true});
        reject(error);
      });
  });
};

/**
 * Update category
 *
 * @param commit
 * @param data
 * @returns {Promise<any>}
 */
export const updateCategory = ({commit}, data) => {
  commit("setLoading", true, {root: true});

  return new Promise((resolve, reject) => {
    // Put data to API by Axios
    return put(constants.api.STD_CATEGORY + '/' + data.id, data).then(result => {
      commit(types.UPDATE_CATEGORY, result.data);
      commit("setLoading", false, {root: true});
      resolve(HTTP_SUCCESS);
    })
      .catch(error => {
        commit("setLoading", false, {root: true});
        commit("notifyError", error, {root: true});
        reject(error);
      });
  });
};

/**
 * Remove category
 *
 * @param commit
 * @param id
 * @returns {Promise<any>}
 */
export const deleteCategory = ({commit}, id) => {
  commit("setLoading", true, {root: true});

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return del(constants.api.STD_CATEGORY + '/' + id).then(result => {
      commit(types.DELETE_CATEGORY, id);
      commit("setLoading", false, {root: true});
      resolve(HTTP_SUCCESS);
    })
      .catch(error => {
        commit("setLoading", false, {root: true});
        commit("notifyError", error, {root: true});
        reject(error);
      });
  });
};

export default {
  getCategoryList,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
}
