<script lang="ts" setup>
import Image from "../components/Image.vue";
import SocialBox from "../components/SocialBox.vue";

import Instagram from "~icons/mdi/instagram";
import Twitter from "~icons/mdi/twitter";
import Email from "~icons/mdi/email-edit-outline";
import Tiktok from "~icons/ic/sharp-tiktok";
import Gallery from "~icons/mdi/image";

const links = [
  {
    value: "Instagram",
    href: "https://instagram.com/sayargulsum_",
    icon: Instagram,
    iconColor: "text-red-600",
  },
  {
    value: "Twitter",
    href: "https://twitter.com/sayargulsumm_",
    icon: Twitter,
    iconColor: "text-blue-500",
  },
  {
    value: "TikTok",
    href: "https://www.tiktok.com/@sayargulsum_",
    icon: Tiktok,
  },
  {
    value: "Email",
    href: `mailto:sayargulsumm@gmail.com?subject=${encodeURIComponent(
      "Merhaba!"
    )}`,
    icon: Email,
    iconColor: "text-blue-600",
  },
];
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-full space-y-8">
      <header class="flex flex-col items-center">
        <div class="px-1.5 pt-1.5 bg-white rounded-t-lg">
          <Image
            src="https://i.imgur.com/bAz6lJn.jpg"
            class="rounded-t-lg w-44 h-44"
          />
        </div>

        <div class="px-3 py-1 bg-white rounded-lg">
          <h1 class="text-4xl font-bold text-black">Gülsüm Sayar</h1>
        </div>
      </header>

      <div class="flex flex-col w-full mx-auto space-y-3 lg:w-1/4">
        <RouterLink to="/galeri">
          <SocialBox
            value="Galeri"
            :icon="Gallery"
            icon-color="text-violet-600"
          />
        </RouterLink>

        <SocialBox
          v-for="link in links"
          :key="link.value"
          :href="link.href"
          :value="link.value"
          :icon="link.icon"
          :icon-color="link.iconColor"
        />
      </div>
    </div>
  </div>
</template>
