<script setup>
const props = defineProps({
  totalDemand: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div style="position: absolute; top: 80px; right: 40px; background: white; padding: 15px 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 5px solid #d73027; text-align: left; z-index: 100;">
    <div style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Total Grid Demand</div>
    <div style="font-size: 28px; font-weight: 800; color: #2c3e50;">
      {{ props.totalDemand.toLocaleString(undefined, { maximumFractionDigits: 0 }) }} <span style="font-size: 14px; font-weight: 400;">MW</span>
    </div>
  </div>
</template>