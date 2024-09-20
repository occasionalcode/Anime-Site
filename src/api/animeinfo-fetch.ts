import {
  AnimeReturnEpisodeFromProvider,
  getAnimeEpisodesFromProvider,
} from "@/routes/anime-info/$animeId/functions/-AnimeInfoFunctions";
import { AnifyInfo, Datum, Episode, AnifyEpisodes } from "@/types/anify-types";
import {
  AnilistEpisode,
  AnilistInfo,
  AnilistLists,
  Anime,
} from "@/types/anilist-types";
import { AnizipList, EpisodesFromProvider } from "@/types/anizip-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//used to fetch anify anime infos
export function useFetchAnifyAnimeInfo(id: string) {
  return useQuery<AnifyInfo>({
    queryKey: ["animeInfo", id],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: animeInfo } = await axios.get(
        `https://anify.eltik.cc/info/${id}?fields=[episodes,bannerImage,coverImage,title,rating,trailer,genres,description,type,id,totalEpisodes,year,status,format,characters]`
      );
      return animeInfo as AnifyInfo;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
    refetchInterval: false,
  });
}

//used to fetch the list of Anify anime Episodes
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

export function useFetchEpisodesFromProviders(id: string) {
  return useQuery({
    queryKey: ["episodesFromProvider", id],
    queryFn: async () => {
      console.log("fetching counters");
      const [anifyInfoResponse, anilistInfoResponse] = await axios.all([
        axios
          .get(`https://anify.eltik.cc/info/${id}?fields=[episodes]`)
          .catch(() => null),
        axios
          .get(
            `https://consumet-sitegabriel.vercel.app/meta/anilist/info/${id}`
          )
          .catch(() => null),
      ]);
      if (!anifyInfoResponse && !anifyInfoResponse) {
        throw new Error("error niggaa!!");
      }
      const anizipResponse = await axios.get(
        `https://api.ani.zip/mappings?anilist_id=${id}`
      );

      const anifyEpisodes = anifyInfoResponse?.data.episodes.data as Datum[];
      const anilistEpisodes = anilistInfoResponse?.data as AnilistEpisode[];
      const anizipData = anizipResponse.data as AnizipList;
      return { anifyEpisodes, anilistEpisodes, anizipData };
    },
  });
}

// used to fetch both anify and anilist episode datas
export function useFetchEpisodeLists(
  episodesInfo: EpisodesFromProvider | undefined
) {
  return useQuery<AnimeReturnEpisodeFromProvider[] | null>({
    queryKey: ["EpisodeLists", episodesInfo],
    queryFn: () => {
      const anifyEpisodes = episodesInfo?.anifyEpisodes;
      const anilistEpisodes = episodesInfo?.anilistEpisodes;
      const anizipData = episodesInfo?.anizipData;
      console.log("fetching episodes");
      const episodes = getAnimeEpisodesFromProvider(
        anifyEpisodes,
        anizipData,
        anilistEpisodes
      );
      return episodes;
    },
    enabled: !!episodesInfo,
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useFetchAnizipEpisodes(id: string) {
  return useQuery<AnizipList>({
    queryKey: ["anizipEpisodes", id],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: anizipEpisodes } = await axios.get(
        `https://api.ani.zip/mappings?anilist_id=${id}`
      );
      return anizipEpisodes as AnizipList;
    },
    gcTime: Infinity,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
