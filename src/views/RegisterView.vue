<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="text-center" lg="4" offset-lg="4" md="6" offset-md="3" sm="8" offset-sm="2" xs="12" offset-xs="0">
        <v-card class="mx-auto pa-5 mt-12 text-center form" flat>
          <v-img src="../assets/img/logo-with-text.svg" width="150" class="mx-auto" />
          <div class="mt-4 font-weight-medium text-grey mb-4">
            <h2>
              Sign up
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
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              label="Password"
              variant="underlined"
              color="primary"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.confirmPassword]"
              :type="show1 ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              label="Confirm password"
              variant="underlined"
              color="primary"
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              label="Do you agree?"
              required
              color="primary"
            ></v-checkbox>
          </div>
          

          <v-btn
            @click="submit"
            color="primary"
            block
            large
          >
            Sign up
          </v-btn>

          <div class="my-4">
            <v-row>
              <v-col class="pr-0" style="align-self: center;">
                <hr role="separator" aria-orientation="horizontal" class="my-1 v-divider" style="color:rgba(0, 0, 0, 0.30);" />
              </v-col>
              <v-col class="px-0" cols="auto">
                <span class="text-overline mx-1" style="color:rgba(0, 0, 0, 0.50);font-family: Heebo,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif!important;">
                  OR SIGN UP WITH
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
        </v-card>   
        <div class="mx-auto mt-6 text-center" style="width:500">
          <span class="grey--text">Already have an account? </span>
          <a href="/login">Sign in</a>
        </div>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>


  export default {
    setup () {

    },
    data: () => ({
      email: '',
      checkbox: false,
      show1: false,
      show2: false,
      password: '',
      confirmPassword: '',
      rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          confirmPassword: v => v === this.password || 'The password confirmation does not match.'
        },
    }),

    computed: {

    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>
