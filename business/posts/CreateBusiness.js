import { mapState } from 'vuex';
import constants from '@/constants';
import { CoolSelect } from 'vue-cool-select'
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'CreatePost',
  layout: 'default',
  middleware: 'authenticated',
  head() {
    return {
      title: 'Create new post'
    }
  },
  components: {
    CoolSelect: CoolSelect,
    MarkdownEditor: MarkdownEditor,
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      post: state => state.posts.post,
    })
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    },
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$nuxt.$loading.start();
          this.$store.dispatch('posts/createPost', this.post);
          this.$router.push({name: 'posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
