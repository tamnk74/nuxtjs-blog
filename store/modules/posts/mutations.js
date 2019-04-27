import * as types from './mutation-types';

export default {
  [types.SET_POST_LIST](state, data) {
    state.posts = data.data;
    state.pageInfo = data.pageInfo;
  },
  [types.SET_POST](state, post) {
    state.post = post;
  },
}
