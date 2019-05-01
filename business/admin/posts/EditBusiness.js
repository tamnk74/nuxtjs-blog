import { mapActions, mapState } from 'vuex';
import constants from '@/constants';
import { CoolSelect } from 'vue-cool-select'

export default {
  name: 'EditPost',
  layout: 'default',
  validate ({ params }) {
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    return v4.test(params.id);
  },
  head() {
    return {
      title: 'Edit post'
    }
  },
  components: {
    CoolSelect: CoolSelect
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      posts: state => state.posts.posts,
    }),
    post: function() {
      const postId = this.$route.params.id;
      const postFilter = this.posts.filter(post => post.id === postId);
      return postFilter && postFilter[0] || {};
    }
  },
  data() {
    return {
      error: false,
      is_submit: false,
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage () {
      this.$store.dispatch('posts/getPostList');
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat('/uploads/' + category.image);
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start();
          // Get user input
          this.error = false;
          this.is_submit = true;
          this.$store.dispatch('posts/updatePost', {
            id: this.post.id,
            title: this.post.title,
            content: this.post.content,
            categoryId: this.post.categoryId
          });
          this.$router.push({name: 'admin-posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
