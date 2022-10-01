import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface AppState {
  collection: number[] | [];
  addToCollection: (num: number) => void;
  clearCollection: () => void;
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      immer((set) => ({
        collection: [],
        addToCollection: (num: number) => set(state => ({
          collection: [
            ...state.collection,
            num
          ]
        })),
        clearCollection: () => set((state) => ({ collection: [] })),
      }))
    )
  )
);
