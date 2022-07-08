<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 bg-repeat bg-cover opacity-50 pointer-events-none"
      :style="{
        backgroundImage: `url('/background.svg')`,
      }"
    ></div>
  </Teleport>
</template>
