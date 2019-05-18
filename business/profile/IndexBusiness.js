import {mapState} from "vuex";
import moment from 'moment';
import constants from "@/constants";

export default {
  name: 'Profile',
  middleware: 'authenticated',
  async asyncData({store}) {
    await store.dispatch("auth/check");
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      user: state => state.auth.user,
    }),

  },
  methods: {
    /**
     * Format date
     *
     * @param datetime
     * @returns {string}
     */
    formatDate(datetime) {
      return moment(datetime).format('DD-MMM-YYYY');
    },
    /**
     * Get full avatar path
     *
     * @param user
     * @returns {string}
     */
    getAvatarFullPath(user) {
      return process.env.baseUrl.concat(constants.path.USER_AVATAR + '/' + user.avatar);
    },
  }
}