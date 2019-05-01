<template>
  <div class="container">
    <div class="main-content">
      <div class="list-group">
        <div class="list-group-item" v-for="(post, index) in posts" :key="index">
          <h2>
            <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">{{ post.title }}</nuxt-link>
          </h2>
          <ul class="list-inline">
            <li>
              <i class="fa fa-user"></i> By:
              <a href="#">{{ post.user && (post.user.firstName + ' ' + post.user.lastName) }}</a>
            </li>
            <li>
              |
              <i class="fa fa-calendar"></i>
              {{ formatDate(post.createdAt) }} |
            </li>
            <li>
              |
              <i class="fa fa-comments"></i>
              <a href="#">{{ post.view }} viewer</a> |
            </li>
            <li v-if="post.category">
              | Categories:
              <span class="label label-primary">{{ post.category.title }}</span>
            </li>
          </ul>
          <div>{{ shortContent(post) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/posts/PostBusiness.js"></script>
