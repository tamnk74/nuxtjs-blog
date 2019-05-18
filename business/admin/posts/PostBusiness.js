import markdown from 'markdown';
import {mapState} from 'vuex';

export default {
  name: 'admin-posts',
  layout: 'default',
  middleware: 'admin',
  created() {
    this.initPage();
  },
  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      totalPost: state => state.posts.pageInfo.count,
      key: state => state.key,
      loading: state => state.loading,
    }),
    pageTotal() {
      return Math.ceil(this.totalPost / this.limit);
    },
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.key));
    }
  },
  data() {
    return {
      page: 1,
      limit: 50,
    }
  },
  methods: {
    /**
     * Load new page
     *
     * @param page
     */
    changePage(page) {
      this.page = page;
      this.$store.dispatch('posts/getPostList', {
        page: this.page,
        key: this.key,
        limit: this.limit,
      });
    },
    /**
     * Get HTML content of markdown
     *
     * @param post
     * @returns {string}
     */
    shortContent(post) {
      let content = document.createElement("div");
      content.innerHTML = markdown.markdown.toHTML(post.content || '');
      return content.textContent.slice(0, 280);
    },
    /**
     * Load data
     */
    initPage() {
      this.$store.dispatch('posts/getPostList', {
        page: this.page,
        key: this.key,
        limit: this.limit,
      });
    },
    /**
     * Remove post
     *
     * @param id
     */
    deletePost(id) {
      if (confirm('Are you sure to delete this post')) {
        this.$store.dispatch('posts/deletePost', id);
        this.$router.push({name: 'admin-posts'})
      }
    }
  }
}
