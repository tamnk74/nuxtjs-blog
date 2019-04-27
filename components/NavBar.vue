<template>
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark primary-color">
  <!-- Navbar brand -->
  <nuxt-link :to="{name: 'index'}" class="navbar-brand">Nuxt Js</nuxt-link>
  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="basicExampleNav">
    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <nuxt-link to="/" class="nav-link">Home
          <span class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/posts" class="nav-link">Posts</nuxt-link>
      </li>
    </ul>
    <!-- Links -->
    <form class="form-inline">
      <div class="md-form my-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
      </div>
    </form>
    <ul class="navbar-nav ml-auto nav-flex-icons">
    <!-- Dropdown -->
    <li v-if="authenticated" class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">{{ getName }}</a>
      <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
        <nuxt-link to="/profile" class="dropdown-item">Profile</nuxt-link>
        <nuxt-link to="/posts/create" class="dropdown-item">New post</nuxt-link>
        <nuxt-link to="/my-post" class="dropdown-item">My post</nuxt-link>
        <a class="dropdown-item" href="#" @click="logout">Logout</a>
      </div>
    </li>
    <li v-else class="nav-item">
      <nuxt-link to="/login" class="nav-link">Login</nuxt-link>
    </li>
    </ul>
  </div>
  <!-- Collapsible content -->
</nav>
<!--/.Navbar-->
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: 'NavbarMenu',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('auth/check');
  },
  computed: {
    ...mapGetters({
      getName: 'auth/getName',
    }),
    ...mapState({
      authenticated: state => state.auth && state.auth.authenticated,
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout');
    }
  }
}
</script>

<style scoped>
.primary-color, ul.stepper li.active a .circle, ul.stepper li.completed a .circle {
    background-color: #4285f4!important;
}
</style>
