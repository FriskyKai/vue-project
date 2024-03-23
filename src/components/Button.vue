<script setup>
defineProps({
  type: {
    required: false,
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button :type="type" class="button">
    <slot />
  </button>
</template>

<style scoped>


</style>