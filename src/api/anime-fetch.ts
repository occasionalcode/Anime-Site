import { AnimeLists } from "@/types/anilist-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchTrendingAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["trendingAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: trendingAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["TRENDING_DESC"]&!status=NOT_YET_RELEASED`
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
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["POPULARITY_DESC"]&status=RELEASING`
      );
      return popularAnime as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchFavoriteAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["favouriteAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: favouriteAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["FAVOURITES_DESC"]`
      );
      return favouriteAnime as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchPopularAnimeMovies() {
  return useQuery<AnimeLists>({
    queryKey: ["popularAnimeMovies"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularAnimeMovies } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?format=MOVIE&sort=["POPULARITY_DESC"]`
      );
      return popularAnimeMovies as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchUpcomingAnime() {
  return useQuery<AnimeLists>({
    queryKey: ["popularUpomingAnimes"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularAnimeMovies } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["POPULARITY_DESC","SCORE_DESC"]&status=NOT_YET_RELEASED`
      );
      return popularAnimeMovies as AnimeLists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
