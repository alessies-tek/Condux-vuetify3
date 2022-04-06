<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="text-center" lg="4" offset-lg="4" md="6" offset-md="3" sm="8" offset-sm="2" xs="12" offset-xs="0">
        <v-form ref="form" class="form">
          <v-card class="py-5 px-8 mt-12" flat>
            <v-img src="../assets/img/logo-with-text.svg" width="150" class="mx-auto" />
            <div class="mt-4 font-weight-medium text-grey mb-4">
              <h2>
                Sign in
              </h2>     
            </div>
            <div class="text-left">
              <v-text-field
                v-model="email"
                required
                label="Email"
                variant="underlined"
                color="primary"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
                label="Password"
                variant="underlined"
                color="primary"
              ></v-text-field>
            </div>
            <v-btn
              @click="submit"
              color="primary"
              block
              large
            >
              Sign in
            </v-btn>

            <div class="my-4">
              <v-row>
                <v-col class="pr-0" style="align-self: center;">
                  <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider" style="color:rgba(0, 0, 0, 0.30);" />
                </v-col>
                <v-col class="px-0" cols="auto">
                  <span class="text-overline mx-1" style="color:rgba(0, 0, 0, 0.50);font-family: Heebo,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif!important;">
                    OR SIGN IN WITH
                  </span>
                </v-col>
                <v-col class="pl-0" style="align-self: center;">
                  <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider" style="color:rgba(0, 0, 0, 0.30);" />
                </v-col>
              </v-row>
            </div>

            <div class="mb-4">
              <v-row>
                <v-col>
                  <v-btn
                    block
                    variant="outlined"
                    large
                    color="primary"
                  >
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    block
                    variant="outlined"
                    large
                    color="primary"
                  >
                    <v-icon>mdi-google</v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn
                    block
                    variant="outlined"
                    large
                    color="primary"
                  >
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            
            <a href="/forgot-password">Forgot password?</a>
          </v-card> 
        </v-form>
        <div class="mx-auto mt-6" style="width:500">
          <span class="grey--text">Don't have an account? </span>
          <a href="/register">Create one here</a>
        </div>
      </v-col>
          
    </v-row>
  </v-container>
  
</template>

<script>
  import router from '../router/index'

  export default {
    data: () => ({
      email: '',
      checkbox: false,
      show1: false,
      show2: false,
      password: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
    }),
 
    computed: {

    },

    methods: {
      submit () {
        if(this.$refs.form.validate())
        {
          localStorage.setItem('user', 1);
          router.push("/")
        }
      },
    },
  }
</script>
