<script setup>
  defineProps({
    value: String,
    id: String,
    onChange: Function,
    label: String,
    placeholder: String,
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    errorMessages: {
      type: Array,
      default: [],
      required: false,
    }
  })
</script>

<template>
  <div class="inputWrapper">
    <label class="label" :for="id">
      {{ label }}
    </label>

    <input
        :class="['input', {error: errorMessages?.length}]"
        :type="type"
        :value="value"
        @input="onChange"
        :placeholder="placeholder"
        :id="id">

    <ul v-if="errorMessages.length">
      <li class="errorMessage" v-for="message in errorMessages">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .errorMessage,
  .error {
    color: var(--error-text);
  }
</style>