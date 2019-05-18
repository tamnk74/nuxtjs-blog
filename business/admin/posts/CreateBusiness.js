import {mapState} from 'vuex';
import constants from '@/constants';
import {CoolSelect} from 'vue-cool-select';
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
      post: {},
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    /**
     * Load category list
     */
    initPage() {
      this.$store.dispatch('categories/getCategoryList');
    },
    /**
     * Get full path thumbnail of category
     *
     * @param category
     * @returns {string}
     */
    getImageFullPath(category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    },
    /**
     * Submit form
     */
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$store.dispatch('posts/createPost', this.post);
          this.$router.push({name: 'admin-posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
