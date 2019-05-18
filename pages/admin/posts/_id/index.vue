<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-success">
        <div class="panel-heading">
          <div class="row">
            <div class="col-sm-10">
              <h4>{{ post.title }}</h4>
            </div>
            <div class="col-sm-2 text-right">
              <nuxt-link :to="{ name: 'admin-posts'}" class="btn btn-default">Back</nuxt-link>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <div v-html="markedContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/posts/DetailBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/post";
</style>
