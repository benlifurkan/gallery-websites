import { defineStore } from "pinia";

const backgrounds = [
  "bg-pink-600",
  "bg-blue-600",
  "bg-red-600",
  "bg-orange-600",
  "bg-violet-600",
  "bg-black",
] as const;

export const useBackgroundStore = defineStore("background", {
  state: () => {
    return {
      currentBackground: backgrounds[0] as typeof backgrounds[number],
      backgrounds,
    };
  },
  actions: {
    checkStorageAndSetBackground(storage: Storage) {
      const storedBackground = storage.getItem("background-option");

      if (storedBackground) {
        this.currentBackground = storedBackground as typeof backgrounds[number];
      }
    },
    changeBackground(value: typeof backgrounds[number]) {
      this.currentBackground = value;
      localStorage.setItem("background-option", value);
    },
  },
});
