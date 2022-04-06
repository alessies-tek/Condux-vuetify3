<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="text-center" lg="4" offset-lg="4" md="6" offset-md="3" sm="8" offset-sm="2" xs="12" offset-xs="0">
        <v-form ref="form" class="form">
          <v-card class="py-5 px-8 mt-12" flat>
            <v-img src="../assets/img/logo-with-text.svg" width="150" class="mx-auto" />
            <div class="mt-4 font-weight-medium text-grey mb-4">
              <h2>
                Reset password
              </h2>     
            </div>
            <div class="text-left">
              <v-text-field
                v-model="temporanyP"
                required
                label="Temporany Password"
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
                label="New Password"
                variant="underlined"
                color="primary"
              ></v-text-field>
              <v-text-field
                v-model="confirmP"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
                label="Confirm Password"
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
              Reset
            </v-btn>
            <span>o</span>
            <v-btn
              color="secondary"
              block
              large
              to="/login"
            >
              Torna alla login
            </v-btn>
          </v-card> 
        </v-form>
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
      confirmP: '',
      temporanyP: '',
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
          router.push("/login")
        }
      },
    },
  }
</script>
