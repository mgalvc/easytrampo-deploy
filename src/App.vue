<template>
  <div id="app">
    <easy-header></easy-header>
    <router-view></router-view>
    <easy-footer></easy-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: "app",
  components: {
    'easy-header': Header,
    'easy-footer': Footer,
  }
};
</script>

<style scoped>
</style>
