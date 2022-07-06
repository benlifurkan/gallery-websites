<script lang="ts" setup>
import Image from "./Image.vue";

const getRandomRotateClass = () => {
  const classes = [
    "-rotate-1",
    "-rotate-2",
    "-rotate-3",
    "rotate-1",
    "rotate-2",
    "rotate-3",
  ];

  return classes[Math.floor(Math.random() * classes.length)];
};

const props = defineProps({
  image: {
    type: String,
    required: true,
    default: "",
  },
  caption: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex flex-col px-4 pt-4 pb-6 space-y-2 transition-transform bg-white shadow-md hover:scale-105 hover:rotate-0"
    :class="getRandomRotateClass()"
  >
    <Image :src="props.image" class="h-52 w-52" />
    <span v-if="caption" class="text-xs text-black/50">{{
      props.caption
    }}</span>
  </div>
</template>
