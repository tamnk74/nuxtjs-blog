import { mapActions } from 'vuex';
import constants from '@/constants';

export default {
  name: 'Login',
  layout: 'default',
  head() {
    return {
      title: 'Login to system'
    }
  },
  data() {
    return {
      error: false,
      click_login: false,
      email: 'tamnk74@gmail.com',
      password: '123!@#',
    }
  },
  created() {
  },
  computed: {
    getEmailError() {
    }
  },
  methods: {
    ...mapActions('auth', [
      'login',
      'logout'
    ]),

    /**
     * Function go to Back page
     */
    back() {
      this.$router.go(-1);
    },

    /**
     * Function submit form for login
     *
     * @returns {void}
     */
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start();
          // Get user input
          let user = {
            email: this.email,
            password: this.password,
          };
          this.error = false;
          this.clickLogin = true;
          // Call function login to Login
          this.login(user)
            .then(res => {
              this.click_login = false;
              this.$nuxt.$loading.finish();
              this.$router.push({name: 'index'});
            })
            .catch(err => {
              this.error = true;
              this.$nuxt.$loading.finish();
              this.clickLogin = false;
            });
        }
      }).catch(() => {
        return false;
      });
    },

    /**
     * Function check validate
     *
     * @return {void}
     */
    validate() {
      this.error = false;
      this.$validator.validateAll().catch(() => {
        return false;
      });
    }
  }
}
