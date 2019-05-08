<template>
  <div :class="className">
    <div><button type="button" @click="switchMode()">{{ mode }}</button></div>
    <div>
      <textarea
        v-if="mode === 'editor'"
        :name="name"
        @change="onChange($event.target)"
        :class="classInput"
        :value="value"
        rows="30"
      />
      <div v-else class="preview" v-html="previewHTML"></div>
    </div>
  </div>
</template>

<script>
import markdown from "markdown";

export default {
  name: "markdown-editor",
  data: () => ({
    mode: "editor",
    previewHTML: "",
  }),
  props: {
    className: {
      type: String,
      default: "editor"
    },
    name: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    classInput: {
      type: String,
      default: 'form-control'
    }
  },
  beforeUpdate () {
    this.previewHTML = markdown.markdown.toHTML(this.value);
  },
  methods: {
    switchMode(){
      this.mode = this.mode === 'editor' ? 'preview' : 'editor';
    },
    onChange(input) {
      this.previewHTML = markdown.markdown.toHTML(input.value);
      this.$emit("input", input.value);
    }
  }
};
</script>

<style scoped>
.preview {
  width: 100%;
  height: 100%;
  min-height: 200px;
}
.editor {
  width: 100%;
}
</style>
