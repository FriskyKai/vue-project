<script setup>
  import {useAuthStore} from "@/stores/auth.js";
  import {storeToRefs} from "pinia";
  import router from "@/router";
  import Button from "@/components/Button.vue";
  import {logOut} from "@/api/methods/logOut.js";

  const state = useAuthStore()
  const { token } = storeToRefs(state)

  const handleLogout = async () => {
    await logOut()
    state.setToken('')

    await router.replace({name: 'login'})
  }
</script>

<template>
  <header class="header">
    <ul class="list">
      <template v-if="token">
        <li class="item">
          <Button @click="router.back()">Назад</Button>
        </li>
        <li class="item">
          <router-link to="/">Список загруженных файлов</router-link>
        </li>
        <li class="item">
          <router-link to="/upload">Загрузка файлов</router-link>
        </li>
        <li class="item">
          <router-link to="/accesses">Список доступных файлов</router-link>
        </li>
        <li class="item">
          <Button @click="handleLogout()">Выход</Button>
        </li>
      </template>

      <template v-else>
        <li class="item">
          <router-link to="login">Вход</router-link>
        </li>
        <li class="item">
          <router-link to="register">Регистрация</router-link>
        </li>
      </template>
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
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  list-style-type: none;
}

.item a {
  padding: 8px 10px;

  transition: .15s linear all;
}

.item a:hover {
  color: var(--secondary-color);
}

.item a:active {
  color: var(--color-pink);
}
</style>