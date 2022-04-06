<template>
  <div>
    <v-footer 
      padless
      bottom
      style="z-index:10;"
    >
      <v-card
        flat
        tile
        width="100%"
        class="bg-footer text-center footer-height"
      >
        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Condux</strong>
        </v-card-text>

        <v-layout wrap justify-center align-center
        >
          <v-btn
            color="primary"
            text
            rounded
            @click="dialogPrivacy = true"
            :small="mdAndDown"
          >
            Privacy
          </v-btn>
          <v-btn
            color="primary"
            text
            rounded
            @click="dialogTerms = true"
            :small="mdAndDown"
          >
            Terms and conditions
          </v-btn>
          

          <v-speed-dial
            v-model="socials"
            :top=true
            :open-on-hover=false
            style="top:0 !important;"
          >
            <template v-slot:activator>
              <v-btn
            color="primary"
            text
            rounded
            v-model="socials"
            :small="mdAndDown"
          >
            Socials
          </v-btn>
   
            </template>
            <v-btn
              fab
              dark
              small
              color="primary"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="indigo"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="red"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-speed-dial>

        </v-layout>

      </v-card>
    </v-footer>

    <v-dialog
      v-model="dialogPrivacy"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      class="bg-color4"
    >
      <v-card>
        <v-toolbar
          class="bg-color5"
        >
          <v-toolbar-title>Privacy</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            depressed
            @click="dialogPrivacy = false"
          >
            Chiudi
          </v-btn>
        </v-toolbar>
        <v-card-text class="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis earum officia nulla dolor deserunt consequatur vel. Velit molestias dolores ex hic, neque ad dolor laborum debitis illum ipsam commodi.  
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialogTerms"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      class="bg-color4"
    >
      <v-card>
        <v-toolbar
          class="bg-color5"
        >
          <v-toolbar-title>Terms and conditions</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            rounded
            depressed
            @click="dialogTerms = false"
          >
            Chiudi
          </v-btn>
        </v-toolbar>
        <v-card-text class="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis earum officia nulla dolor deserunt consequatur vel. Velit molestias dolores ex hic, neque ad dolor laborum debitis illum ipsam commodi.  
        </v-card-text>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { useDisplay } from 'vuetify'
export default {
  name: 'FooterTemplate',
  data: () => ({
    dialogPrivacy : false,
    dialogTerms : false,
    socials : false
  }),
  methods:
  {

  },
  setup () {
    // Destructure only the keys we want to use
    const { mdAndDown } = useDisplay()

    return { mdAndDown }
  }
};
</script>
