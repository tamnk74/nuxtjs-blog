import * as types from './mutation-types';
import { debug } from 'util';

export default {
  [types.SET_POST_LIST](state, data) {
    state.posts = data.data;
    state.pageInfo = data.pageInfo;
  },
  [types.SET_MY_POST_LIST](state, data) {
    state.myposts = data.data;
    state.pageInfo = data.pageInfo;
  },
  [types.SET_POST](state, post) {
    state.post = post;
  },
  [types.SET_CATEGORY](state, category) {
    state.category = category;
  },
  [types.UPDATE_POST](state, data) {
    state.posts = [...state.posts.filter(post => post !== data.id), data];
  },
  [types.DELETE_POST](state, id) {
    state.posts = state.posts.filter(post => post.id !== id);
  },
  [types.DELETE_MY_POST](state, id) {
    state.myposts = state.myposts.filter(post => post.id !== id);
  },
}
