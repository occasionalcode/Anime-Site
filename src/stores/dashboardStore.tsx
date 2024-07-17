import { useFetchAnime } from "@/api/anime-fetch";
import { Anime } from "@/types/anime-types";
import test from "node:test";
import { create } from "zustand";

type DashboardStore = {
  selectedAnime: Anime | undefined;
  setSelectedAnime: (anime: Anime) => void;
  // selectedItemID: string;
  // setSelectedItemID: (selectedItem: string) => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  selectedAnime: undefined,
  setSelectedAnime: (anime: Anime) => set({ selectedAnime: anime }),
}));
