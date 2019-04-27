<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Login</div>
      <div class="panel-body">
        <form class="form-horizontal" role="form" method="POST">
          <div class="form-group">
            <label for="name" class="col-md-4 control-label">Name</label>
            <div class="col-md-6">
              <input
                id="name"
                type="text"
                class="form-control"
                name="name"
                value
                required
                autofocus
              >
            </div>
          </div>

          <div class="form-group">
            <label for="email" class="col-md-4 control-label">E-Mail Address</label>
            <div class="col-md-6">
              <input id="email" type="email" class="form-control" name="email" value required>
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="col-md-4 control-label">Password</label>
            <div class="col-md-6">
              <input id="password" type="password" class="form-control" name="password" required>
            </div>
          </div>

          <div class="form-group">
            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

            <div class="col-md-6">
              <input
                id="password-confirm"
                type="password"
                class="form-control"
                name="password_confirmation"
                required
              >
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-6 col-md-offset-4">
              <button type="button" class="btn btn-primary">Register</button>
              <nuxt-link class="btn btn-link" :to="{name: 'login'}">Go to login</nuxt-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
