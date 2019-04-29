<template>
  <div class="container">
    <div class="main-content">
      <h2>Categories</h2>
      <div class="list-kanban">
        <div class="list-item" v-for="(category, index) in categories" :key="index">
          <nuxt-link :to="{name: 'categories-id', params: {id: category.id}}">
            <img :src="getImageFullPath(category)" class="thumbnail">
            <h3>{{ category.title }} <small>{{ category.posts.length }} <i class="fas fa-paste"></i></small></h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script  src="@/business/categories/CategoryBusiness.js"></script>
