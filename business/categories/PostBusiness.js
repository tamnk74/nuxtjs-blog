import markdown from 'markdown';
import moment from 'moment';
import constants from '@/constants';
import { mapState } from 'vuex';

export default {
  name: 'category-post-list',
  layout: 'default',
  data() {
    return {
      page: 1,
      limit: 50,
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      category: state => state.posts.category,
      totalPost: state => state.posts.pageInfo.count,
      key: state => state.key,
      loading: state => state.loading,
    }),
    pageTotal() {
      return Math.ceil(this.totalPost/this.limit);
    },
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.key));
    }
  },
  watch: {
    key: function (val) {
      console.log("Watch key: ", val);
    },
  },
  created() {
    this.initPage();
  },
  methods: {
    formatDate (datetime) {
      return moment(datetime).format('DD-MMM-YYYY');
    },
    changePage(page) {
      this.page = page;
      this.$store.dispatch('posts/getPostList', {
        page: this.page,
        key: this.key,
        limit: this.limit,
      });
    },
    shortContent (post) {
      let content = document.createElement("div")
      content.innerHTML = markdown.markdown.toHTML(post.content || '');
      return content.textContent.slice(0, 280);
    },
    initPage () {
      this.$store.dispatch('posts/getPostListByCategory', this.$route.params.id,{
        page: this.page,
        key: this.key,
        limit: this.limit,
      });
    },
    getImageFullPath (category) {
      return process.env.baseUrl.concat(constants.path.CATEGORY_THUMBNAILS + '/' + category.image);
    }
  }
}
