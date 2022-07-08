<script lang="ts" setup>
import { computed } from "vue";
import { useBackgroundStore } from "@/stores/background";

const store = useBackgroundStore();

const getBackgroundWithoutCurrent = computed(() =>
  store.backgrounds.filter((name) => name !== store.currentBackground)
);
</script>

<template>
  <footer
    class="container flex flex-col items-center pt-24 pb-16 mx-auto space-y-8"
  >
    <div class="flex flex-col items-center space-y-2 transition-all">
      <span class="text-xs uppercase text-white/50">Renk Seç</span>

      <div class="flex flex-wrap items-center space-x-2">
        <button
          v-for="background in getBackgroundWithoutCurrent"
          :key="background"
          class="w-6 h-6 transition-all rounded-full shadow-md hover:ring-0 ring-1 ring-white/50"
          :class="background"
          @click="() => store.changeBackground(background)"
        />
      </div>
    </div>

    <p class="text-center font-extralight">
      by
      <a
        href="https://eggsy.xyz"
        rel="noreferrer"
        target="_blank"
        class="border-b"
        >EGGSY</a
      >
    </p>
  </footer>
</template>
