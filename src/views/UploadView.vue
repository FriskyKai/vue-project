<script setup>
import {ref} from "vue";

import Form from "@/components/Form.vue";
import FormItem from "@/components/FormItem.vue";
import {handleUploadFiles} from "@/utils/handleUploadFiles.js";

const isLoading = ref()
const uploadedFiles = ref([])

const onSubmit = async (event) => {
  const files = event.target.files
  if (!files.length) return

  isLoading.value = true

  try {
    uploadedFiles.value = await handleUploadFiles(files)
  }
  catch (e) {
    console.error(e)
  }
  finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main>
    <h1>Загрузка файлов</h1>

    <p>Выберите файлы для загрузки</p>

    <Form :submit="onSubmit" method="Post">
      <FormItem
          type="file"
          label="Загрузка файлов"
          id="fileInput"
          @change="onSubmit"
          multiple
      />
    </Form>
  </main>
</template>
