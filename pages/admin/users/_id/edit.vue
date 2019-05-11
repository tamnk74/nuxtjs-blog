<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="well well-sm">
          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="form-group"  v-if="user">
                <label for="avatar">Avatar</label>
                <image-input v-model="user.avatar" name="avatar">
                  <div slot="activator">
                    <div v-if="!user.avatar" class="pick-thumbnail">
                      <span>Pick a thumbnail</span>
                    </div>
                    <div v-else class="thumbnail">
                      <img :src="user.avatar.url || getAvatarFullPath(user)" alt="avatar">
                    </div>
                  </div>
                </image-input>
              </div>
              <img v-else src="http://placehold.it/380x500" alt="" class="img-rounded img-responsive" />
            </div>
            <div v-if="user" class="col-sm-6 col-md-8">
              <div class="form-group">
                <label for="name">User Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.name"
                >
                <div
                  v-if="errors.has('name')"
                  class="invalid-feedback"
                >{{ errors.first('name') }}</div>
              </div>
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.fullName"
                  data-vv-as="full name"
                >
                <div
                  v-if="errors.has('fullName')"
                  class="invalid-feedback"
                >{{ errors.first('fullName') }}</div>
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  name="address"
                  class="form-control"
                  v-model="user.address"
                >
                <div
                  v-if="errors.has('address')"
                  class="invalid-feedback"
                >{{ errors.first('address') }}</div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  v-validate="'required|existMail:' + user.id"
                  v-model="user.email"
                >
                <div v-if="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
              </div>
              <div class="form-group">
                <label for="birthday">Birthday</label>
                <datepicker
                  v-model="user.birthday"
                  name="birthday"
                  format="dd-MMM-yyyy"
                  input-class="form-control"
                ></datepicker>
                <div
                  v-if="errors.has('birthday')"
                  class="invalid-feedback"
                >{{ errors.first('birthday') }}</div>
              </div>
              <div class="form-group">
                <label for="role">Role</label>
                <select
                  type="text"
                  name="role"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.role"
                >
                <option value="USER" selected="selected">User</option>
                <option value="ADMIN">Admin</option>
                </select>
                <div v-if="errors.has('role')" class="invalid-feedback">{{ errors.first('role') }}</div>
              </div>
              <div class="form-group">
                <label for="status">Status</label>
                <select
                  type="text"
                  name="status"
                  class="form-control"
                  v-validate="'required'"
                  v-model="user.status"
                >
                <option value="BLOCKED" :selected="user.status == 'BLOCKED' ? 'selected' : ''">BLOCKED</option>
                <option value="INACTIVE" :selected="user.status == 'INACTIVE' ? 'selected' : ''">INACTIVE</option>
                <option value="ACTIVE" :selected="user.status == 'ACTIVE' ? 'selected' : ''">ACTIVE</option>
                </select>
                <div v-if="errors.has('status')" class="invalid-feedback">{{ errors.first('status') }}</div>
              </div>
              <div class="form-group">
                <label for="verify_code">Verify Code</label>
                <input
                  type="text"
                  name="verify_code"
                  class="form-control"
                  v-validate="'min:6'"
                  v-model="user.verify_code"
                >
                <div v-if="errors.has('verify_code')" class="invalid-feedback">{{ errors.first('verify_code') }}</div>
              </div>
              <div class="form-group">
                <label for="password">New Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  v-validate="'min:6|confirmed:confirmation'"
                  v-model="user.password"
                >
                <div v-if="errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</div>
              </div>
              
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  class="form-control"
                  ref="confirmation"
                  v-model="user.confirmPassword"
                >
                <div v-if="errors.has('confirmPassword')" class="invalid-feedback">{{ errors.first('confirmPassword') }}</div>
              </div>
            </div>
          </div>
          <div class="row action">
            <div>
              <button type="button" @click="onSubmit()" class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  src="@/business/admin/users/EditBusiness.js"></script>

<style lang="scss">
@import "./assets/scss/users";
</style>