import { mapActions, mapState } from 'vuex';
import constants from '@/constants';

export default {
  name: 'CreatePost',
  layout: 'default',
  head() {
    return {
      title: 'Create new post'
    }
  },
  data() {
    return {
      error: false,
      is_submit: false,
      title: '',
      content: '',
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start();
          // Get user input
          let post = {
            title: this.title,
            content: this.content,
          };
          this.error = false;
          this.is_submit = true;
          this.$store.dispatch('posts/createPost', post);
          this.$router.push({name: 'posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
