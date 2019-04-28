<template>
<div class="container">
<div class="main-content">
  <h2>Categories</h2>
    <div class="list-group">
      <div class="list-group-item" v-for="(category, index) in categories" :key="index">
        <h2>
          <nuxt-link :to="{name: 'category-id', params: {id: category.id}}">{{ category.title }}</nuxt-link>
        </h2>
        <div>{{ category.title }}</div>
      </div>
    </div>
  </div>
</div>
</template>
<script  src="@/business/categories/CategoryBusiness.js"></script>
