<script lang="ts" setup>
import Footer from "./components/Footer.vue";
import FloatingButton from "./components/FloatingButton.vue";
</script>

<template>
  <div class="text-white py-16 px-6 lg:px-0">
    <div class="container min-h-screen mx-auto">
      <RouterView />
    </div>

    <Footer />

    <!-- Absolute items -->
    <FloatingButton />
  </div>
</template>
