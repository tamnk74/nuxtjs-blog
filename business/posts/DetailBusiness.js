import markdown from 'markdown';
import constant from '@/constants';
import {get, post} from '@/plugins/api';

export default {
  validate ({ params }) {
    // Must be a number
    return true; // /^\d+$/.test(params.id)
  },
  data() {
    return {
      id: '',
      post: {}
    }
  },
  computed: {
    markedContent () {
      return markdown.markdown.toHTML(this.post.content || '');
    }
  },
  created() {
    this.initPage();
  },
  methods: {
    initPage () {
      get(constant.api.GET_POST_DETAIL + '/' +this.$route.params.id).then(result => {
        this.post = result.data.data;
      })
    }
  }

}
