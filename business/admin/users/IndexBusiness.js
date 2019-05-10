import constants from "@/constants";
import {mapState} from 'vuex';

export default {
  async asyncData ({ store }) {
    await store.dispatch('users/getUserList');
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      users: state => state.users.users
    })
  },
  created() {
    // this.initPage();
  },
  methods: {
    async initPage () {
      await this.$store.dispatch('users/getUserList');
    },
    getAvatarFullPath (user) {
      return process.env.baseUrl.concat(constants.path.USER_AVATAR + '/' + user.avatar);
    },
    deleteUser (id) {
      if (confirm('Are you sure to delete this user')) {
        this.$store.dispatch('users/deleteUser', id);
        this.$router.push({name: 'admin-users'})
      }
    }
  }
}
