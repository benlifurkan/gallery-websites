<script lang="ts" setup>
import PictureFrame from "../components/PictureFrame.vue";

const images = [
  "https://i.imgur.com/odZMJQe.jpg",
  "https://i.imgur.com/6Z0rhUz.jpg",
  "https://i.imgur.com/5f1D7bB.jpg",
  "https://i.imgur.com/srBCOAn.jpg",
  "https://i.imgur.com/27sWsTt.jpg",
  "https://i.imgur.com/tBaQc6D.jpg",
  "https://i.imgur.com/tLvoCU8.jpg",
  "https://i.imgur.com/PqyrjMC.jpg",
  "https://i.imgur.com/ga2knc9.jpg",
  "https://i.imgur.com/qRPaQtn.jpg",
  "https://i.imgur.com/B0dV5yD.jpg",
  "https://i.imgur.com/8yLSRJy.jpg",
  "https://i.imgur.com/1J0DR7R.jpg",
  "https://i.imgur.com/b7jy7Bo.jpg",
  "https://i.imgur.com/5Erh16T.jpg",
  "https://i.imgur.com/YBreojP.jpg",
  "https://i.imgur.com/ldukMVv.jpg",
  "https://i.imgur.com/fRnxJfJ.jpg",
  "https://i.imgur.com/orMDbgY.jpg",
  "https://i.imgur.com/EByy6f5.jpg",
];

const getImagesInRandomOrder = () => {
  const imagesCopy = [...images];

  for (let i = imagesCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imagesCopy[i], imagesCopy[j]] = [imagesCopy[j], imagesCopy[i]];
  }

  return imagesCopy;
};
</script>

<template>
  <header class="flex flex-col items-center">
    <h1 class="text-6xl text-center font-bold">Öykü Liva Sayar</h1>
    <span class="font-light text-lg">'ın fotoğraf galerisi</span>
  </header>

  <main class="mt-24 flex flex-wrap items-center justify-center gap-8">
    <PictureFrame
      v-for="image in getImagesInRandomOrder()"
      :image="image"
      caption="22.06.2001"
    />
  </main>
</template>
