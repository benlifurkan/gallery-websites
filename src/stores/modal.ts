import { defineStore } from "pinia";

export const useImageModalStore = defineStore("imageModal", {
  state: () => {
    return {
      isVisible: false,
      image: "",
    };
  },
  actions: {
    setImage(value: string) {
      this.image = value;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
});
