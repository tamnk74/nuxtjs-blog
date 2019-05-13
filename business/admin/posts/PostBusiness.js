import markdown from 'markdown';
import { mapState } from 'vuex';

export default {
  name: 'admin-posts',
  layout: 'default',
  middleware: 'admin',
  computed: {
    ...mapState({
      posts: state => state.posts.posts
    })
  },
  created() {
    this.initPage();
  },
  methods: {
    shortContent (post) {
      let content = document.createElement("div");
      content.innerHTML = markdown.markdown.toHTML(post.content || '');
      return content.textContent.slice(0, 280);
    },
    initPage () {
      this.$store.dispatch('posts/getPostList');
    },
    deletePost (id) {
      if (confirm('Are you sure to delete this post')) {
        this.$store.dispatch('posts/deletePost', id);
        this.$router.push({name: 'admin-posts'})
      }
    }
  }
}
