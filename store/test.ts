import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const store = persist<BearState>(
  (set, get) => ({
    bears: 0,
    increasePopulation: () =>
      set((state: { bears: number }) => ({ bears: get().bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }),
  {
    name: "test",
    storage: createJSONStorage(() => AsyncStorage),
  }
);

export const useBearStore = create(store);
