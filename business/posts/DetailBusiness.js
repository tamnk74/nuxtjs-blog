import markdown from 'markdown';
import constant from '@/constants';
import {get, post} from '@/plugins/api';

export default {
  validate ({ params }) {
    const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    return v4.test(params.id);
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
