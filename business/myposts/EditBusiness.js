import { mapState } from 'vuex';
import constants from '@/constants';
import { CoolSelect } from 'vue-cool-select'
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'admin-posts-edit',
  layout: 'default',
  middleware: 'authenticated',
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
    CoolSelect: CoolSelect,
    MarkdownEditor: MarkdownEditor,
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      posts: state => state.posts.posts,
      user: state => state.auth.user,
      post: state => state.posts.post,
    }),
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      this.$store.dispatch('posts/getPostList');
      this.$store.dispatch('posts/getPost', this.$route.params.id);
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' +  category.image);
    },
    onSubmit() {
      if (this.post.userId != this.user.id) {
        this.$router.push({name: 'myposts'});
      }
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$store.dispatch('posts/updatePost', {
            id: this.post.id,
            title: this.post.title,
            content: this.post.content,
            categoryId: this.post.categoryId
          });
          this.$router.push({name: 'myposts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
