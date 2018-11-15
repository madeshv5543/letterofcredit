<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="register()">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <div v-if="showerr">
                  <b-alert show variant="danger">{{errmsg}}</b-alert>
                </div>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="newUser.username" placeholder="Username" autocomplete="username" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="newUser.email" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" v-model="newUser.password" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" v-model="newUser.confirmPassword" placeholder="Repeat password" autocomplete="new-password" />
                </b-input-group>

        <b-input-group class="mb-4">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-select id="basicSelect"
              :plain="true"
              v-model="newUser.accountType"
              :options="['Seller', 'Buyer']">
            </b-form-select>
        </b-input-group>
    

                <b-button type="submit" variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>

          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import auth from '../../services/authservice.js'
export default {
  name: 'Register',
  data () {
    return {
      newUser: {
        accountType:'Seller'
      },
      showerr:false,
      errmsg:null
    }
  },
  methods:{
    register:function() {
      let self = this;
      self.showerr = false;
      self.errmsg ="";
      auth.RegisterUser(this.newUser)
      .then( res => {
       if(res.status != 200) {
         self.showerr = true;
         self.errmsg = res.message;
       }
      },
      err => {
        if(err.message) {
              self.showerr = true;
              self.errmsg = err.message;
        }else{
              self.showerr = true;
              self.errmsg = 'Something Went wrong. Please try after sometime.';
        }
      })
    }
  }
}
</script>
