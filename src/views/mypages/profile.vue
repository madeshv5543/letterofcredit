<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-form @submit.prevent="updateUser()">
          <b-card>
            <div slot="header">
              <strong>My Profile</strong>
            </div>
            <b-row v-if="user">
              <b-col md="6">
                <b-form-group>
                  <label for="company">Email</label>
                  <b-form-input type="text" id="company" v-model="user.email" disabled></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <label for="accountType">AccountType</label>
                  <b-form-input type="text" id="accountType" v-model="user.accountType" disabled></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group>
                  <label for="firstname">First Name</label>
                  <b-form-input type="text" id="firstname" name="firstname" v-model="user.firstName"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <label for="lastname">Last Name</label>
                  <b-form-input type="text" id="lastname" name="lastname" v-model="user.lastName"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group>
                  <label for="address">Address</label>
                  <b-form-input type="text" id="address" name="address" v-model="user.address"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <label for="city">City</label>
                  <b-form-input type="text" id="city" name="city" v-model="user.city"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group>
                  <label for="pincode">Postal code</label>
                  <b-form-input type="text" id="pincode" name="pincode" v-model="user.pincode"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <label for="country">Country</label>
                  <b-form-input type="text" id="country" name="country" v-model="user.country"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group>
                  <label for="companyName">Company Name</label>
                  <b-form-input type="text" id="companyName" v-model="user.companyName"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group>
                  <label for="phonenumber">Phone Number</label>
                  <b-form-input type="text" id="phonenumber" v-model="user.phoneNumber"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <div slot="footer" style="text-align:center">
              <b-button type="submit" size="md" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <!-- <b-button type="reset" size="md" variant="danger"><i class="fa fa-ban"></i> Reset</b-button> -->
            </div>
          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import userService from '@/services/userService.js';
  export default {
    name: 'profile',
    data() {
      return {
        user: {},
        showerr: false,
        errmsg: null,
        succesmsg:false,
        succmsg: ''
      }
    },
    methods: {
      updateUser() {
        console.log("update user")
        let self = this;
        self.showerr = false;
        self.errmsg = "";
        userService.updateUser(self.user)
          .then(
            res => {
              if (res.status != 200) {
                self.showerr = true;
                self.errmsg = res.message;
              } else {
                // self.user = res.data
              }
            },
            err => {
              this.errhandler(err)
            }
          )
      },
      errhandler(err) {
        let self = this;
        if (err.message) {
          self.showerr = true;
          self.errmsg = err.message;
        } else {
          self.showerr = true;
          self.errmsg = 'Something Went wrong. Please try after sometime.';
        }
      },
      getUserDetails() {
        let self = this;
        self.showerr = false;
        self.errmsg = "";
        userService.getUser()
          .then(
            res => {
              if (res.status != 200) {
                self.showerr = true;
                self.errmsg = res.message;
              } else {
                self.user = res.data
              }
            },
            err => {
              this.errhandler(err)
            }
          )
      }
    },
    created: function () {
      this.getUserDetails()
    }
  }

</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
