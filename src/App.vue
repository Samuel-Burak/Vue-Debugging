<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Welcome/>
    <!-- <component :is="option.type" v-for="option in options" :key="option">{{option.text}}</component> -->
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>
