<template>
  <v-app class="condux bg-color4" :theme="theme">
    <MainLayout v-if="this.$route.meta.authenticatedLayout" @darkMode="toggleTheme">
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
import { ref } from 'vue'
export default {
  name: 'App',
  data: () => ({

  }),

  watch: {

  },
  components: {
    MainLayout,
    EmptyLayout
  },
  methods:
  {

  },
  setup () {
    const theme = ref('light')

    return {
      theme,
      toggleTheme: (val) => theme.value = val? 'dark' : 'light'
    }
  }
}
</script>
