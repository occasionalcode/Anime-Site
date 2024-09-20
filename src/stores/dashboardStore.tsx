import { Anime } from "@/types/anilist-types";
import { create } from "zustand";

type DashboardStoreValues = {
  selectedAnime: Anime | undefined;
};

type DashboardStoreAction = {
  setSelectedAnime: (anime: Anime) => void;
};

type DashboardStore = DashboardStoreAction & DashboardStoreValues;

const dashboardStoreDefaultValues: DashboardStoreValues = {
  selectedAnime: undefined,
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  ...dashboardStoreDefaultValues,
  setSelectedAnime: (anime: Anime) => set({ selectedAnime: anime }),
}));
