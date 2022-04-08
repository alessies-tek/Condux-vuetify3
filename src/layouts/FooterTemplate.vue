<template>
  <div>
    <v-footer 
      bottom
      class="footer"
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

        <v-row  
          justify="center"
          no-gutters
        >
          <v-btn
            color="primary"
            variant="text"
            rounded="xl"
            @click="dialogPrivacy = true"
            :small="mdAndDown"
          >
            Privacy
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            rounded="xl"
            @click="dialogTerms = true"
            :small="mdAndDown"
          >
            Terms
          </v-btn>     
        </v-row>
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
