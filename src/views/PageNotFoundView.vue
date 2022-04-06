<template>
  <v-content class="bg-color4 text-center">
    <div class="transition-swing text-h1 mb-3">404</div>
    <div class="transition-swing text-h2 mb-4">Ops, Page Not Found</div>
    <v-btn @click="back" color="primary">Back</v-btn>
  </v-content> 
</template>

<script>
  import router from '../router/index'
  export default {
    methods:
    {
      back()
      {
        if(localStorage.getItem('user'))
        {
          router.push("/")
        }
        else
        {
          router.push("/login")
        }
      }
    }
  }
</script>
