import {mapState} from 'vuex';
import constants from '@/constants';
import {CoolSelect} from 'vue-cool-select'
import MarkdownEditor from '@/components/MarkdownEditor.vue';

export default {
  name: 'admin-posts-edit',
  layout: 'default',
  middleware: 'admin',
  validate({params}) {
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
      post: state => state.posts.post,
    })
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * Load data
     */
    init() {
      this.$store.dispatch('posts/getPost', this.$route.params.id);
      this.$store.dispatch('categories/getCategoryList');
    },
    /**
     * Category path for thumbnail
     * @param category
     * @returns {string}
     */
    getImageFullPath(category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    },
    /**
     * submit form
     */
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.$store.dispatch('posts/updatePost', this.post);
          this.$router.push({name: 'admin-posts'});
        }
      }).catch(() => {
        return false;
      });
    },
  }
}
