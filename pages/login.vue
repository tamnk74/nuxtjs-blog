<template>
  <div class="container">
      <div class="panel panel-default width-100">
          <div class="panel-heading">Login</div>
          <div class="panel-body">
              <form class="form-horizontal" role="form">
                  <div class="form-group">
                      <label for="email" class="col-md-4 control-label">E-Mail</label>
                      <div class="col-md-6">
                        <input type="text" name="email" class="form-control" v-validate="'required'" v-model="email" data-vv-as="Email or Username">
                        <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
                      </div>
                  </div>

                  <div class="form-group">
                      <label for="password" class="col-md-4 control-label">Password</label>
                      <div class="col-md-6">
                        <input type="password" name="password" class="form-control" v-validate="'required'" v-model="password" autocomplete="on" data-vv-as="Password">
                        <span>{{ errors.first('password') }}</span>
                      </div>
                  </div>

                  <div class="form-group">
                      <div class="col-md-8 col-md-offset-4">
                          <button type="button" class="btn btn-primary" @click="onSubmit()">Login</button>
                          <nuxt-link class="btn btn-link" :to="{name: 'register'}">Register an account</nuxt-link>
                      </div>
                  </div>
              </form>
            </div>
      </div>
  </div>
</template>

<script src="@@/business/login/LoginBusiness.js"></script>

<style scoped>
.width-100 {
  width: 100%
}
</style>
