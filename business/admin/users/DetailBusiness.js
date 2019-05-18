import {mapState} from "vuex";
import moment from 'moment';
import constants from "@/constants";

export default {
  name: 'UserDetail',
  middleware: 'admin',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      user: state => state.users.user
    }),
  },
  created() {
    this.$store.dispatch('users/getUser', this.$route.params.id);
  },
  methods: {
    /**
     * Format datetime
     *
     * @param datetime
     * @param format
     * @returns {string}
     */
    formatDate(datetime, format = 'DD-MMM-YYYY') {
      return moment(datetime).format(format);
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