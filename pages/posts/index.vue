<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-info">
        <div class="panel-heading">Latest Posts</div>
        <div class="panel-body">
          <div class="overlay" v-show="loading">
            <i class="fa fa-sync rotating"></i>
          </div>
          <div class="alert alert-info" v-if="filteredPosts.length <= 0">
            <strong>Whoops!</strong> There is no post!
          </div>
          <div v-else class="list-group">
            <div class="list-group-item" v-for="(post, index) in filteredPosts" :key="index">
              <h2>
                <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">{{ post.title }}</nuxt-link>
              </h2>
              <ul class="list-inline">
                <li>
                  <i class="fa fa-user"></i> By:
                  <a href="#">{{ post.user && (post.user.fullName) }}</a>
                </li>
                <li>
                  |
                  <i class="fa fa-calendar"></i>
                  {{ formatDate(post.createdAt) }} |
                </li>
                <li>
                  |
                  <i class="fa fa-comments"></i>
                  <a href="#">{{ post.view }} viewer</a>|
                </li>
                <li v-if="post.category">
                  |Categories:
                  <span class="label label-primary">{{ post.category.title }}</span>
                </li>
              </ul>
              <div>{{ shortContent(post) }}</div>
            </div>
          </div>
          <div class="row text-center">
            <paginate
              :page-count="pageTotal"
              :page-range="5"
              :margin-pages="2"
              :click-handler="changePage"
              :prev-text="'Prev'"
              :next-text="'Next'"
              :container-class="'pagination'"
              :page-class="'page-item'"
            ></paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/posts/PostBusiness.js"></script>
