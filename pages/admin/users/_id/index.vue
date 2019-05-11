<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="well well-sm">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <img
                v-if="user && user.avatar"
                :src="getAvatarFullPath(user)"
                alt
                class="img-rounded img-responsive"
              >
              <img v-else src="http://placehold.it/380x500" alt class="img-rounded img-responsive">
            </div>
            <div v-if="user" class="col-sm-6 col-md-8">
              <h4>{{ user.fullName }}</h4>
              <small>
                <i class="glyphicon glyphicon-globe"></i>
                {{ user.role }}
              </small>
              <cite title="San Francisco, USA">
                <i class="glyphicon glyphicon-map-marker"></i>
                {{ user.address || 'updating...' }}
              </cite>
              <p>
                <i class="glyphicon glyphicon-envelope"></i>
                {{ user.email }}
                <br>
                <i class="glyphicon glyphicon-gift"></i>
                {{ formatDate(user.birthday) }}
              </p>
            </div>
          </div>
          <div class="row action">
            <div>
              <nuxt-link :to="{name: 'admin-users-id-edit', params: { id: user.id }}" class="btn btn-info">Edit</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  src="@/business/admin/users/DetailBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/users";
</style>