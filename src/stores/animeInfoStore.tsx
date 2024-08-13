import { create } from "zustand";

type AnimeInfoStoreValues = {
  navigation: string;
  characterCurrentPagination: number;
};

type AnimeInfoStoreActions = {
  setNavigation: (set: string) => void;
  setCharacterCurrentPagination: (set: number) => void;
};

type AnimeInfoStore = AnimeInfoStoreActions & AnimeInfoStoreValues;

const AnimeInfoDefaultValues: AnimeInfoStoreValues = {
  navigation: "Overview",
  characterCurrentPagination: 1,
};

export const useAnimeInfoStore = create<AnimeInfoStore>((set) => ({
  ...AnimeInfoDefaultValues,
  setNavigation: (nav: string) => set({ navigation: nav }),
  setCharacterCurrentPagination: (page: number) =>
    set({ characterCurrentPagination: page }),
}));
