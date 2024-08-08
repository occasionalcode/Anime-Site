import { create } from "zustand";

type AnimeInfoStoreValues = {
  navigation: string;
};

type AnimeInfoStoreActions = {
  setNavigation: (set: string) => void;
};

type AnimeInfoStore = AnimeInfoStoreActions & AnimeInfoStoreValues;

const AnimeInfoDefaultValues: AnimeInfoStoreValues = {
  navigation: "Overview",
};

export const useAnimeInfoStore = create<AnimeInfoStore>((set) => ({
  ...AnimeInfoDefaultValues,
  setNavigation: (nav: string) => set({ navigation: nav }),
}));
