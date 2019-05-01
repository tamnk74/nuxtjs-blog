import markdown from 'markdown';
import constant from '@/constants';
import {get, post} from '@/plugins/api';
import {mapState, mapGetters} from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      // TODO: Replace booking code with data from 340 screen
      posts: state => state.posts.posts
    })
  },
  created() {
    this.initPage();
  },
  methods: {
    shortContent (post) {
      let content = document.createElement("div")
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
