<template>
  <div class="container">
    <div class="panel panel-success">
      <div class="panel-heading">Profile</div>
      <!-- Panel body -->
      <div class="panel-body">
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
      </div>
      <!-- End panel body -->
      <div class="panel-footer text-center">
        <nuxt-link :to="{name: 'profile-edit'}" class="btn btn-info">Edit</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script  src="@/business/profile/IndexBusiness.js"></script>

<style lang="scss" >
@import "./assets/scss/profile";
</style>