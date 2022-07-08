import { defineStore } from "pinia";

const images = [
  "https://i.imgur.com/laNsoq6.jpg",
  "https://i.imgur.com/Xc7I1JK.jpg",
  "https://i.imgur.com/LaS0WcG.jpg",
  "https://i.imgur.com/e7nFPly.jpg",
  "https://i.imgur.com/ZG8WWnm.jpg",
  "https://i.imgur.com/hbO5St2.jpg",
  "https://i.imgur.com/hHozp2F.jpg",
  "https://i.imgur.com/qKp7aGj.jpg",
  "https://i.imgur.com/n7x06fI.jpg",
  "https://i.imgur.com/j02TPsh.jpg",
  "https://i.imgur.com/ztcXGJw.jpg",
  "https://i.imgur.com/jFN1xIs.jpg",
  "https://i.imgur.com/IYw5g6u.jpg",
  "https://i.imgur.com/oV9Jbwu.jpg",
  "https://i.imgur.com/xPJvOIv.jpg",
  "https://i.imgur.com/qcJuw6F.jpg",
  "https://i.imgur.com/vDutvq0.jpg",
  "https://i.imgur.com/EvRjWB1.jpg",
  "https://i.imgur.com/QK6d4pj.jpg",
  "https://i.imgur.com/iEFroXQ.jpg",
  "https://i.imgur.com/1NghaCV.jpg",
  "https://i.imgur.com/SwbDY4l.jpg",
  "https://i.imgur.com/N3OdSYe.jpg",
  "https://i.imgur.com/0TqTcAj.jpg",
  "https://i.imgur.com/tQtYeJv.jpg",
  "https://i.imgur.com/joOcgK9.jpg",
  "https://i.imgur.com/tH5XKpa.jpg",
  "https://i.imgur.com/VdjZG18.jpg",
  "https://i.imgur.com/7mwiVrq.jpg",
  "https://i.imgur.com/ot4rJ3s.jpg",
  "https://i.imgur.com/271WnmL.jpg",
  "https://i.imgur.com/VFbQ5hG.jpg",
  "https://i.imgur.com/LGYuBwr.jpg",
];

export const useImageStore = defineStore("images", {
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
