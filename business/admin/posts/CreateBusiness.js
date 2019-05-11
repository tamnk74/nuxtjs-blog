import { mapActions, mapState } from 'vuex';
import constants from '@/constants';
import { CoolSelect } from 'vue-cool-select';
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'CreatePost',
  layout: 'default',
  middleware: 'admin',
  head() {
    return {
      title: 'Create new post'
    }
  },
  components: {
    CoolSelect: CoolSelect,
    MarkdownEditor: MarkdownEditor
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    })
  },
  data() {
    return {
      error: false,
      is_submit: false,
      title: '',
      content: '',
      categoryId: null
    }
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
          // Get user input
          let post = {
            title: this.title,
            content: this.content,
            categoryId: this.categoryId
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
