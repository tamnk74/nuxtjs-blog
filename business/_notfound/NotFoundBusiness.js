import { mapActions } from 'vuex';

export default {
  methods: {
    /**
     * Function go to Back page
     */
    back() {
      this.$router.go(-1);
    },
  }
}
