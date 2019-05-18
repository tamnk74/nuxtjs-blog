import constants from "@/constants";
import {mapState} from 'vuex';
import moment from 'moment';

export default {
  middleware: 'admin',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      users: state => state.users.users
    })
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * Load data
     */
    init() {
      this.$store.dispatch('users/getUserList');
    },
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
    /**
     * Remove user
     *
     * @param id
     */
    deleteUser(id) {
      if (confirm('Are you sure to delete this user')) {
        this.$store.dispatch('users/deleteUser', id);
        this.$router.push({name: 'admin-users'})
      }
    }
  }
}
