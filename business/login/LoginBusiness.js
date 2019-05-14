import { mapActions } from 'vuex';

export default {
  name: 'login',
  layout: 'default',
  head() {
    return {
      title: 'Login to system'
    }
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('auth', [
      'login',
    ]),

    /**
     * Check an email is valid or not
     *
     * @param {String} email
     *
     * @return {Boolean}
     */
    isValidEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    /**
     * Function get login form data
     *
     * @returns {Object}
     */
    getLoginData () {
      return Object.assign({
        password: this.password,
      }, this.isValidEmail(this.email) ? { email: this.email } : { name: this.email });
    },

    /**
     * Function submit form for login
     *
     * @returns {*}
     */
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start();
          const user = this.getLoginData();
          this.login(user)
            .then(res => {
              this.$nuxt.$loading.finish();
              this.$router.push({name: 'index'});
            })
            .catch(err => {
              this.$nuxt.$loading.finish();
            });
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
