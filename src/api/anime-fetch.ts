import { AnilistInfo, AnilistLists } from "@/types/anilist-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchAnilistTrendingAnime() {
  return useQuery<AnilistLists>({
    queryKey: ["trendingAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: trendingAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["TRENDING_DESC"]&status=RELEASING`
      );
      return trendingAnime as AnilistLists;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnilistPopularAnime() {
  return useQuery<AnilistLists>({
    queryKey: ["popularAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["POPULARITY_DESC"]&status=RELEASING`
      );
      return popularAnime as AnilistLists;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnilistFavoriteAnime() {
  return useQuery<AnilistLists>({
    queryKey: ["favouriteAnime"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: favouriteAnime } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["FAVOURITES_DESC"]`
      );
      return favouriteAnime as AnilistLists;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnilistPopularAnimeMovies() {
  return useQuery<AnilistLists>({
    queryKey: ["popularAnimeMovies"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularAnimeMovies } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?format=MOVIE&sort=["POPULARITY_DESC"]`
      );
      return popularAnimeMovies as AnilistLists;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnilistPopularUpcomingAnime() {
  return useQuery<AnilistLists>({
    queryKey: ["popularUpcomingAnimes"],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: popularUpcomingAnimes } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/advanced-search?sort=["POPULARITY_DESC","SCORE_DESC"]&status=NOT_YET_RELEASED`
      );
      return popularUpcomingAnimes as AnilistLists;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnilistInfo(animeId: string) {
  return useQuery<AnilistInfo>({
    queryKey: ["anilistEpisodes", animeId],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: anilistEpisodes } = await axios.get(
        `https://consumet-sitegabriel.vercel.app/meta/anilist/info/${animeId}`
      );
      return anilistEpisodes as AnilistInfo;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
