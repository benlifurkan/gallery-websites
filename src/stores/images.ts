import { defineStore } from "pinia";

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

export const useImageStore = defineStore("counter", {
  state: () => {
    return { images };
  },
  actions: {
    changeOrder() {
      const imagesCopy = [...images];

      for (let i = imagesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imagesCopy[i], imagesCopy[j]] = [imagesCopy[j], imagesCopy[i]];
      }

      this.images = imagesCopy;
    },
  },
});
