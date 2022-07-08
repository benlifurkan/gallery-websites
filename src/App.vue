<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useBackgroundStore } from "@/stores/background";

import Background from "@/components/Background.vue";
import Footer from "@/components/Footer.vue";
import FloatingButton from "@/components/FloatingButton.vue";
import Modal from "@/components/Modal.vue";

const route = useRoute();
const store = useBackgroundStore();

onBeforeMount(() => {
  if (!localStorage) return;
  store.checkStorageAndSetBackground(localStorage);
});
</script>

<template>
  <div
    class="px-6 text-white transition-colors lg:px-0"
    :class="store.currentBackground"
  >
    <div class="container relative z-10 min-h-screen mx-auto">
      <RouterView />
    </div>

    <Footer />

    <!-- Absolute items -->
    <Background />
    <FloatingButton v-if="route.path === '/galeri'" />
    <Modal />
  </div>
</template>
