<script setup>

</script>

<template>
  <header class="header">
    <ul class="list">
      <li class="item">
        <router-link to="login">Вход</router-link>
      </li>
      <li class="item">
        <router-link to="register">Регистрация</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header {
  margin: 10px 0;
  padding: 10px 20px;
  background-color: var(--secondary-bg);
  border-radius: 10px;
}

.list {
  display: flex;
  gap: 10px;

  list-style-type: none;
}
</style>