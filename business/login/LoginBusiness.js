import { mapActions } from 'vuex';

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
      email: '',
      password: '',
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
     * Check an email is valid or not
     */
    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
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
          let user = Object.assign({
            password: this.password,
          }, this.isValidEmail(this.email) ? { email: this.email } : { name: this.email });
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
