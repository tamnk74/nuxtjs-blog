<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-1">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h4>{{ post.title }}</h4>
        </div>
        <div class="panel-body">
          <div class="overlay" v-show="loading">
            <i class="fa fa-sync rotating"></i>
          </div>
          <div v-html="markedContent"></div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="panel panel-info">
        <div class="panel-heading">Related Posts</div>
        <div class="panel-body"></div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/posts/DetailBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/post";
</style>
