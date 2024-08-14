import {
  AnimeReturnEpisodeFromProvider,
  getAnimeEpisodesFromProvider,
} from "@/routes/anime-info/$animeId/functions/-AnimeInfoFunctions";
import { AnifyInfo, Episode, Episodes } from "@/types/anify-types";
import { AnilistInfo, AnilistLists, Anime } from "@/types/anilist-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchAnifyAnimeInfo(id: string) {
  return useQuery<AnifyInfo>({
    queryKey: ["animeInfo", id],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: animeInfo } = await axios.get(
        `https://anify.eltik.cc/info/${id}?fields[episodes,bannerImage,coverImage,title,rating,trailer,genres,description,type,id,totalEpisodes,year,status,format]`
      );
      return animeInfo as AnifyInfo;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnifyEpisodesData(id: string) {
  return useQuery<AnifyInfo>({
    queryKey: ["anifyEpisodes", id],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: anifyEpisodes } = await axios.get(
        `https://anify.eltik.cc/info/${id}?fields=[episodes]`
      );
      return anifyEpisodes as AnifyInfo;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchEpisodeLists(
  id: string,
  anifyInfo?: AnifyInfo,
  anilistInfo?: AnilistInfo
) {
  return useQuery<AnimeReturnEpisodeFromProvider[] | null>({
    queryKey: ["EpisodeLists", id],
    queryFn: () => {
      console.log("fetching episodes");
      const episodes = getAnimeEpisodesFromProvider(anifyInfo!, anilistInfo!);
      return episodes;
    },
    enabled: !!anifyInfo && !!anilistInfo,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
