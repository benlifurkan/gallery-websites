<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useImageStore } from "@/stores/images";

// Components
import PictureFrame from "@/components/PictureFrame.vue";

const store = useImageStore();
onBeforeMount(() => {
  store.changeOrder();
});
</script>

<template>
  <div class="py-16">
    <header class="flex flex-col items-center">
      <RouterLink to="/">
        <h1
          class="text-6xl font-bold text-center transition-opacity hover:opacity-50"
        >
          Gülsüm
        </h1>
      </RouterLink>

      <span class="text-lg font-light">'ün fotoğraf galerisi</span>
    </header>

    <main
      class="flex flex-wrap items-center justify-center gap-8 mt-16 lg:mt-24"
    >
      <PictureFrame v-for="image in store.images" :image="image" />
    </main>
  </div>
</template>
