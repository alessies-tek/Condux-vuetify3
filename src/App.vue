<template>
  <v-app class="condux bg-color4">
    <MainLayout v-if="this.$route.meta.authenticatedLayout">
      <router-view></router-view>
    </MainLayout>
    <EmptyLayout v-else>
      <router-view></router-view>
    </EmptyLayout>
  </v-app>
</template>

<script>
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
//import { ref } from 'vue'
export default {
  name: 'App',
  data: () => ({
    darkMode: false
  }),

  watch: {
    darkMode(Value){
      this.$vuetify.theme.dark = Value
    }
  },
  components: {
    MainLayout,
    EmptyLayout
  },
  methods:
  {

  },
  setup () {
    // const theme = ref('light')

    // return {
    //   theme,
    //   toggleTheme: () => theme.value = theme.value === 'light' ? 'dark' : 'light'
    // }
  }
}
</script>
