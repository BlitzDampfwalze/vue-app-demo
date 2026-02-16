<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
/* Global styles */
#app { font-family: sans-serif; background: #fdfdfd; min-height: 100vh; }
</style>