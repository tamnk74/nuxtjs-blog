import { mapState } from 'vuex';
import constants from '@/constants';
import { CoolSelect } from 'vue-cool-select';
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'admin-posts-create',
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
          // Get user input
          let post = {
            title: this.title,
            content: this.content,
            categoryId: this.categoryId
          };
          this.$store.dispatch('posts/createPost', post);
          this.$router.push({name: 'posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
