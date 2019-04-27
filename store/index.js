import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';
import auth from './modules/auth';
import VueNotifications from 'vue-notifications'

Vue.use(Vuex);

const createStore = () => {
	return new Vuex.Store({
		// Assign the modules to the store
		modules: {
			posts,
			auth
		},
		// #root state
		state: () => ({
			loading: false,
			authentication: null
		}),
		// #root mutations
		mutations: {
			SET_LOADING(state, loading) {
				state.loading = loading;
			},
			notifyError(state, error) {
				state.error = error;
				debugger;
				VueNotifications.error({message: error.message})
			},
			setAuth(state, auth) {
        state.authentication = auth
      }
		},
		actions: {
			nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
						auth = JSON.parse(parsed.auth);
          } catch (err) {
            // No valid cookie found
          }
				}
				console.log('Auth: ', auth);
        commit('setAuth', auth)
      }
		}
		// If strict mode should be enabled
		// strict: debug,
	})
}

export default createStore;
