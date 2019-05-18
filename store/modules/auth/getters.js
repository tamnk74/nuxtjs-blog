import state from './state'

export default {
  /**
   * Check is loggin
   *
   * @param state
   * @returns {authenticated|*|boolean|*}
   */
  isLogin: (state) => {
    return state.authenticated;
  },
  /**
   * Get user's fullname
   *
   * @param state
   * @returns {*}
   */
  getName: (state) => {
    console.warn('Getter Name');

    if (state.user) {
      return state.user.fullName;
    }
    return '...';
  },
}
