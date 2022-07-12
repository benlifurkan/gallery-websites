<script lang="ts" setup>
import { useImageStore } from "../stores/images";
const store = useImageStore();
</script>

<template>
  <button
    class="fixed bottom-0 right-0 z-20 flex items-center justify-center p-2 m-6 text-black transition-shadow bg-white rounded-full shadow-md hover:shadow-xl"
    @click="() => store.changeOrder()"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M4 17a1 1 0 0 1 0-2h2l3-3l-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4l4-4h2V5l4 3.001L17 11V9h-1l-3 3l3 3h1v-2l4 3l-4 3v-2h-2l-4-4l-4 4H4Z"
      ></path>
    </svg>
  </button>
</template>
