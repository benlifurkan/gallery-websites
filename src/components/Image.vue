<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
    default: "",
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
const getProxifiedImage = (): string => {
  return `https://proxy.duckduckgo.com/iu/?u=${encodeURIComponent(props.src)}`;
};
</script>

<template>
  <div
    class="transition-all bg-center bg-cover cursor-pointer"
    :style="{
      backgroundImage: `url('${getProxifiedImage()}')`,
    }"
    @click="isOpen = true"
  >
    <img
      :src="getProxifiedImage()"
      alt="gallery image"
      class="invisible md:hidden"
    />

    <Teleport to="body">
      <transition name="fade" mode="out-in">
        <div
          v-show="isOpen"
          class="fixed inset-0 z-10 flex items-center justify-center bg-black/75"
          @click="isOpen = false"
        >
          <div @click="(e) => e.stopPropagation()">
            <div
              class="bg-center bg-cover rounded-xl"
              :style="{
                backgroundImage: `url('${getProxifiedImage()}')`,
              }"
            >
              <img
                :src="getProxifiedImage()"
                alt="gallery image"
                class="invisible max-h-[90vh] max-w-[90vw]"
              />
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
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
