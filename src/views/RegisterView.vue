<script setup>
import {reactive} from "vue";

import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";

import {registration} from "@/api/methods/auth/registration.js";
import Button from "@/components/Button.vue";

const inputData = reactive({
  email: '',
  password: '',
  first_name: '',
  last_name: ''
})

const errors = reactive({
  data: {}
})

const onSubmit = () => {
  errors.data = {}
  const data = registration(inputData.email, inputData.password, inputData.first_name, inputData.last_name)

  console.log(data)
}

</script>

<template>
  <main>
    <h1>Регистрация</h1>

    <Form :submit="onSubmit" method="POST">
      <FormItem
        id="email"
        label="Введите почту"
        placeholder="Введите почту"
        type="email"
        :value="inputData.email"
        :error-messages="errors.data?.email"
      />

      <FormItem
          id="password"
          label="Введите пароль"
          placeholder="Введите пароль"
          type="password"
          :value="inputData.password"
          :error-messages="errors.data?.password"
      />

      <FormItem
          id="firstname"
          label="Введите имя"
          placeholder="Введите имя"
          :value="inputData.first_name"
          :error-messages="errors.data?.first_name"
      />

      <FormItem
          id="lastname"
          label="Введите фамилию"
          placeholder="Введите фамилию"
          :value="inputData.last_name"
          :error-messages="errors.data?.last_name"
      />

      <Button @submit.prevent="onSubmit" type="submit">Зарегистрироваться</Button>
    </Form>
  </main>
</template>
