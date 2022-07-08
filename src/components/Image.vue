<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useImageModalStore } from "@/stores/modal";

const props = defineProps({
  src: {
    type: String,
    required: true,
    default: "",
  },
  putActualImage: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isOpen = ref(false);

/* Lifecycle */
let listener: any;
onMounted(() => {
  listener = window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      isOpen.value = false;
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", listener);
});

/* Methods */
const getProxifiedImage = computed(() => {
  return `https://proxy.duckduckgo.com/iu/?u=${encodeURIComponent(props.src)}`;
});

const modal = useImageModalStore();

const handleImageClick = () => {
  modal.setImage(props.src);
  modal.toggle();
};
</script>

<template>
  <div
    class="transition-all bg-center bg-cover cursor-pointer"
    :style="{
      backgroundImage: `url('${getProxifiedImage}')`,
    }"
    @click="handleImageClick"
  >
    <img
      v-if="props.putActualImage === true"
      :src="getProxifiedImage"
      alt="gallery image"
      class="invisible md:hidden"
    />
  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
