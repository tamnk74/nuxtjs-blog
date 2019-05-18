<template>
<div class="container">
  <div class="main-content">
      <h2 class="title">
        {{ post.title }}
      </h2>
      <div v-html="markedContent"></div>
  </div>
</div>
</template>
<script  src="@/business/posts/DetailBusiness.js"></script>

<style lang="scss" >
    @import "./assets/scss/post";
</style>
