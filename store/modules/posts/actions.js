import * as types from "./mutation-types";
import { get, post, put, del } from "@/plugins/api";
import constants from "@/constants";

const HTTP_SUCCESS = 200;

//This is login function
export const getPostList = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.GET_POST_LIST, data).then(result => {
      commit(types.SET_POST_LIST, result.data);
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
//This is login function
export const getPostListByCategory = ({ commit }, id, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.STD_CATEGORY + '/' + id, data).then(result => {
      commit(types.SET_POST_LIST, {
        data: result.data.data.posts,
        pageInfo: result.data.pageInfo
      });
      commit(types.SET_CATEGORY, result.data.data.category);
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

export const getMyPostList = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.STD_MY_POST, data).then(result => {
      commit(types.SET_MY_POST_LIST, result.data);
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

export const getPost = ({ commit }, id) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return get(constants.api.STD_POST + '/' + id).then(result => {
      commit(types.SET_POST, result.data.data);
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


export const createPost = ({ commit }, data) => {
  commit("setLoading", true, { root: true });

  return new Promise((resolve, reject) => {
    // Post data to API by Axios
    return post(constants.api.CREATE_NEW_POST, data).then(result => {
      commit(types.SET_POST, result.data);
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

export const updatePost = ({ commit }, data) => {
  commit("setLoading", true, { root: true });
  return new Promise((resolve, reject) => {
    return put(constants.api.STD_POST+'/' + data.id, data).then(result => {
      commit(types.UPDATE_POST, result.data);
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

export const deletePost = ({ commit }, id) => {
  commit("setLoading", true, { root: true });
  return new Promise((resolve, reject) => {
    return del(constants.api.STD_POST+'/' + id).then(result => {
      commit(types.DELETE_POST, id);
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

export const deleteMyPost = ({ commit }, id) => {
  commit("setLoading", true, { root: true });
  return new Promise((resolve, reject) => {
    return del(constants.api.STD_POST+'/' + id).then(result => {
      commit(types.DELETE_MY_POST, id);
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
  getPostList,
  getMyPostList,
  getPostListByCategory,
  getPost,
  createPost,
  updatePost,
  deletePost,
  deleteMyPost,
}
