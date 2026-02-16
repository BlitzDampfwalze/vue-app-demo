<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)
</script>

<template>
  <nav style="background: #2c3e50; color: white; padding: 10px; position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; display: flex; align-items: center;">
    <button @click="isSidebarOpen = !isSidebarOpen" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">
      ☰
    </button>
    <span style="margin-left: 20px; font-size: 18px; font-weight: bold;">Trader Dashboard</span>

    <div v-if="isSidebarOpen" style="position: absolute; top: 55px; left: 0; background: white; color: #333; width: 250px; height: 100vh; box-shadow: 2px 0 10px rgba(0,0,0,0.2); padding: 20px;">
      <ul style="list-style: none; padding: 0;">
        <li><router-link to="/dashboard" @click="isSidebarOpen = false">Dashboard</router-link></li>
      </ul>
    </div>
  </nav>
</template>