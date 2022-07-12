<script lang="ts" setup>
import Image from "./Image.vue";

const rotateClasses = [
  "-rotate-1",
  "-rotate-2",
  "-rotate-3",
  "rotate-1",
  "rotate-2",
  "rotate-3",
];

const getRandomRotateClass = () =>
  rotateClasses[Math.floor(Math.random() * rotateClasses.length)];

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex flex-col px-4 pt-4 pb-6 mx-6 space-y-2 transition-transform bg-white shadow-md md:mx-0 hover:scale-105 hover:rotate-0"
    :class="getRandomRotateClass()"
  >
    <Image :src="props.image" class="md:h-52 md:w-52" put-actual-image />
  </div>
</template>
