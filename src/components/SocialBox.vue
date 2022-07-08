<script lang="ts" setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
    default: null,
  },
  href: {
    type: String,
    required: false,
    default: null,
  },
  icon: {
    type: Object,
    required: false,
    default: null,
  },
  iconColor: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<template>
  <Component
    :is="href ? 'a' : 'div'"
    :key="props.value"
    :href="props.href"
    target="_blank"
    rel="noreferrer"
    class="flex items-center w-full px-4 py-2 space-x-2 text-black transition-all transform bg-white rounded-lg select-none hover:scale-105 hover:shadow-lg hover:-rotate-1"
  >
    <Component
      v-if="props.icon"
      :is="props.icon"
      class="w-8 h-8"
      :class="props.iconColor"
    />

    <span class="truncate">{{ props.value }}</span>
  </Component>
</template>
