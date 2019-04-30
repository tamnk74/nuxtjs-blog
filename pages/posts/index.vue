<template>
<div class="container">
<div class="main-content">
  <h2>PostPage</h2>
    <div class="list-group">
      <div class="list-group-item" v-for="(post, index) in posts" :key="index">
        <h2>
          <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">{{ post.title }}</nuxt-link>
        </h2>
        <div>{{ shortContent(post) }}</div>
      </div>
    </div>
  </div>
</div>
</template>
<script  src="@/business/posts/PostBusiness.js"></script>
