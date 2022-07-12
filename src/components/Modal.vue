<script lang="ts" setup>
import { computed, onBeforeMount, onMounted } from "vue";
import { useImageStore } from "@/stores/images";
import { useImageModalStore } from "@/stores/modal";
import { useBackgroundStore } from "@/stores/background";

import ChevronLeft from "~icons/mdi/chevron-left";
import ChevronRight from "~icons/mdi/chevron-right";

const modal = useImageModalStore();
const imageStore = useImageStore();
const backgroundStore = useBackgroundStore();

const getProxifiedImage = computed(
  () => `https://proxy.duckduckgo.com/iu/?u=${encodeURIComponent(modal.image)}`
);

const imageIndexInStore = computed(() =>
  imageStore.images.findIndex((item) => item === modal.image)
);

const handlePagination = (
  event: MouseEvent | null,
  direction: "previous" | "next"
) => {
  event?.stopPropagation();

  const imageStoreImages = imageStore.images;
  const currentIndex = imageIndexInStore.value;

  if (currentIndex === -1) return;

  const nextItem =
    direction === "previous"
      ? imageStoreImages[currentIndex - 1]
      : imageStoreImages[currentIndex + 1];

  if (!nextItem) return;

  modal.setImage(nextItem);
};

/* Lifecycle */
const handleKeyDown = (event: KeyboardEvent) => {
  if (modal.isVisible) {
    switch (event.key) {
      case "ArrowLeft":
        handlePagination(null, "previous");
        break;
      case "ArrowRight":
        handlePagination(null, "next");
        break;
      case "Escape":
        modal.toggle();
        break;
    }
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onBeforeMount(() => {
  window.removeEventListener("keydown", handleKeyDown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" mode="out-in">
      <div
        v-show="modal.isVisible"
        class="fixed inset-0 z-30 flex items-center justify-center bg-black/75"
        @click="() => modal.toggle()"
      >
        <div @click="(e) => e.stopPropagation()">
          <div
            class="bg-center bg-cover rounded-xl"
            :style="{
              backgroundImage: `url('${getProxifiedImage}')`,
            }"
          >
            <img
              :src="getProxifiedImage"
              alt="gallery image"
              class="invisible max-h-[90vh] max-w-[90vw]"
            />
          </div>
        </div>

        <!-- Controls -->
        <div
          v-if="imageIndexInStore !== -1"
          class="fixed inset-x-0 bottom-0 flex items-center justify-center w-full gap-4 mb-4 text-white"
        >
          <button
            class="p-1 transition-all rounded-full shadow-md focus:outline-none hover:ring-1 ring-white"
            :class="backgroundStore.currentBackground"
            @click="(e) => handlePagination(e, 'previous')"
          >
            <ChevronLeft class="w-8 h-8" />
          </button>

          <button
            class="p-1 transition-opacity rounded-full shadow-md focus:outline-none hover:ring-1 ring-white"
            :class="backgroundStore.currentBackground"
            @click="(e) => handlePagination(e, 'next')"
          >
            <ChevronRight class="w-8 h-8" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
