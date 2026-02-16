<script setup>
import { ref } from 'vue'
import EnergyMap from '../components/EnergyMap.vue'
import DateSelector from '../components/DateSelector.vue'
import TotalDemandDisplay from '../components/TotalDemandDisplay.vue'

const date = ref('2025-07-01')
const totalDemand = ref(0)
</script>

<template>
  <div style="padding-top: 60px; text-align: center; position: relative;"> 
    <h1>Energy Transmission Monitor</h1>
    <DateSelector v-model="date" />
    <TotalDemandDisplay :totalDemand="totalDemand" />
    <EnergyMap :date="date" @update:totalDemand="totalDemand = $event" />
  </div>
</template>