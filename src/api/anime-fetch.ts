import { AnimeLists } from "@/types/anime-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchTrendingAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["trendingAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: trendingAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["TRENDING_DESC"]&perPage=10`
      );
      return trendingAnime as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchPopularAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["popularAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["POPULARITY_DESC"]`
      );
      return popularAnime as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
