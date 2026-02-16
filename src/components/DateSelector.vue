<script setup>
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div style="margin-bottom: 30px; display: inline-block; padding: 10px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <label for="date-picker" style="font-weight: 600;">Observation Date: </label>
    <input id="date-picker" type="date" :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" style="padding: 5px 10px; border: 1px solid #ddd; border-radius: 4px;" />
  </div>
</template>