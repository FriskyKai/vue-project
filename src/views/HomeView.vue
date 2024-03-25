<script setup>
  import {handleDownloadFile} from "@/utils/handleDownloadFile.js";
  import {onMounted, ref} from "vue";
  import Button from "@/components/Button.vue";
  import {getFiles} from "@/api/methods/files/getFiles.js";
  import {deleteFile} from "@/api/methods/files/deleteFile.js";
  import router from "@/router/index.js";

  const isLoading = ref()
  const uploadedFiles = ref([])

  const handleGetFiles = async () => {
    isLoading.value = true

    try {
      uploadedFiles.value = await getFiles()
    }
    catch (e) {
      console.log(e)
    }
    finally {
      isLoading.value = false
    }
  }

  onMounted(async () => await handleGetFiles())

  const handleDeleteFile = async (fileId) => {
    const data = await deleteFile(fileId)

    if (!data.success) return

    await handleGetFiles()
  }

  const handleEditFileRights = async (fileId, fileName) =>
      router.push({name: 'rights', params: {id: fileId, name: fileName}})

  const handleEditFileName = async (fileId, fileName) =>
      router.push({name: 'edit', params: {id: fileId, name: fileName}})
</script>

<template>
  <main>
    <h1>Ваши файлы</h1>

    <section>
      <p v-if="isLoading">Загрузка...</p>
      <ul class="list" v-if="uploadedFiles.length">
        <li v-for="file in uploadedFiles">
          <h4>Имя: {{ file.name }}</h4>
          <Button @click="handleDownloadFile(file)">Скачать</Button>
          <Button @click="handleEditFileRights(file.file_id, file.name)">Редактировать права</Button>
          <Button @click="handleEditFileName(file.file_id, file.name)">Переименовать</Button>
          <Button @click="handleDeleteFile(file.file_id)">Удалить</Button>
        </li>
      </ul>
    </section>
  </main>
</template>
