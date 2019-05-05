import state from './state'
export default {
  isLogin: (state) => {
    return state.authenticated;
  },
  getName: (state) => {
    console.warn('Getter Name');
    
    if (state.user) {
      return state.user.fullName;
    }
    return '...';
  },
}
