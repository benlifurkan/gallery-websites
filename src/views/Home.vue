<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useImageStore } from "../stores/images";

// Components
import PictureFrame from "../components/PictureFrame.vue";

const store = useImageStore();
onBeforeMount(() => {
  store.changeOrder();
});
</script>

<template>
  <header class="flex flex-col items-center">
    <h1 class="text-6xl font-bold text-center">Öykü Liva</h1>
    <span class="text-lg font-light">{{ "'" }}nın fotoğraf galerisi</span>
  </header>

  <main class="flex flex-wrap items-center justify-center gap-8 mt-16 lg:mt-24">
    <PictureFrame v-for="image in store.images" :image="image" />
  </main>
</template>
