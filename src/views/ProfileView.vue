<template>
<div>
  <v-card class="bg-color4 border-none">
    <v-card-title class="bg-color5">
      Profile
    </v-card-title>
    <v-flex class="bg-color1 pa-5">
      <v-row>
        <v-flex xs11 sm6 md4 lg2>
          <v-avatar width="170" height="170">
            <v-img src="@/assets/img/researchers/test.jpg"/>
          </v-avatar>
        </v-flex>
        <v-flex lg5>
          <v-card elevation="0">
            <v-card-title>
              Alessio Pampana
            </v-card-title>
            <v-card-subtitle>
              pampana.alessio@gmail.com
            </v-card-subtitle>
            <div>
              <v-btn 
              color="primary" 
              class="ml-3"
              @click="dialogPassword = true"
              >
                Change password
              </v-btn>
            </div>
          </v-card>
        </v-flex>
      </v-row>
      
    </v-flex>   
  </v-card> 
  <v-dialog
      v-model="dialogPassword"
      width="500"
      persistent
    >
      <v-card class="pa-3">
        <v-card-title class="pa-0">
          Change password
        </v-card-title>
        <v-text-field label="Old password">
        </v-text-field>
        <v-text-field label="New password">
        </v-text-field>
        <v-text-field label="Confirm password">
        </v-text-field>
        <div class="text-right">
          <v-btn 
            color="secondary" 
            @click="dialogPassword = false"
            >
              Chiudi
          </v-btn>
          <v-btn 
            color="primary" 
            class="ml-3"
            @click="dialogPassword = false"
            >
              Salva
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
</div>
</template>

<script>
  export default {
    data () {
      return {
        dialogPassword : false
      }
    }
  }
</script>
