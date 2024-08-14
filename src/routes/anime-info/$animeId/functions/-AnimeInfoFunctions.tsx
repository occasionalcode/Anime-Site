import { useFetchAnifyAnimeInfo } from "@/api/animeinfo-fetch";
import { AnifyInfo } from "@/types/anify-types";
import { AnilistInfo, AnilistLists } from "@/types/anilist-types";

export type AnimeReturnEpisodeFromProvider = {
  episode?: string;
  number?: number;
  img?: string | null;
  title?: string;
};

export function getAnimeEpisodesFromProvider(
  anifyInfo: AnifyInfo,
  anilistInfo: AnilistInfo
): AnimeReturnEpisodeFromProvider[] | null {
  const gogoAnimeAnifyEpisodes = anifyInfo?.episodes.data.find(
    (episodeData) => episodeData.providerId === "gogoanime"
  );
  const zoroAnifyEpisodes = anifyInfo?.episodes.data.find(
    (episodeData) => episodeData.providerId === "zoro"
  );
  const animepaheAnifyEpisodes = anifyInfo?.episodes.data.find(
    (episodeData) => episodeData.providerId === "animepahe"
  );
  const anilistEpisode = anilistInfo?.episodes;
  if (gogoAnimeAnifyEpisodes && gogoAnimeAnifyEpisodes?.episodes.length !== 0) {
    const a = gogoAnimeAnifyEpisodes?.episodes.map((episode, i) => ({
      episode: episode.id,
      number: episode.number,
      img: animepaheAnifyEpisodes
        ? animepaheAnifyEpisodes?.episodes[i].img
        : anilistEpisode![i].image,
      title: zoroAnifyEpisodes && zoroAnifyEpisodes?.episodes[i].title,
    }));
    return a;
  }
  return null;
}
