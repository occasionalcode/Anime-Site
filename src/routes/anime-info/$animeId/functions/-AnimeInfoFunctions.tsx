import { AnifyInfo, Datum } from "@/types/anify-types";
import { AnilistInfo, AnilistEpisode } from "@/types/anilist-types";
import { AnizipList, EpisodesFromProvider } from "@/types/anizip-types";

export type AnimeReturnEpisodeFromProvider = {
  episode?: string;
  number?: number;
  img?: string | null;
  title?: string | null;
};

export function getAnimeEpisodesFromProvider(
  anifyEpisodes: Datum[] | undefined,
  anizipData: AnizipList | undefined,
  anilistEpisodes: AnilistEpisode[] | undefined
): AnimeReturnEpisodeFromProvider[] | null {
  const gogoAnimeAnifyEpisodes = anifyEpisodes?.find(
    (episodeData) => episodeData.providerId === "gogoanime"
  );
  const zoroAnifyEpisodes = anifyEpisodes?.find(
    (episodeData) => episodeData.providerId === "zoro"
  );

  if (gogoAnimeAnifyEpisodes && gogoAnimeAnifyEpisodes?.episodes.length !== 0) {
    const a = gogoAnimeAnifyEpisodes?.episodes.map((episode) => ({
      episode: episode.id,
      number: episode.number,
      img:
        anizipData && anizipData.episodes[episode.number]
          ? anizipData.episodes[episode.number].image
          : null,
      title:
        anizipData && anizipData.episodes[episode.number]
          ? anizipData.episodes[episode.number].title.en
          : zoroAnifyEpisodes && zoroAnifyEpisodes?.episodes[episode.number]
            ? zoroAnifyEpisodes.episodes[episode.number].title
            : null,
    }));
    console.log("gogo");
    return a;
  } else if (anilistEpisodes && anilistEpisodes.length !== 0) {
    const a = anilistEpisodes.map((episode, i) => ({
      episodes: episode.id,
      number: episode.number,
      img:
        anizipData && anizipData.episodes[episode.number]
          ? anizipData.episodes[episode.number].image
          : null,
      title:
        anizipData && anizipData.episodes[episode.number]
          ? anizipData.episodes[episode.number].title.en
          : zoroAnifyEpisodes && zoroAnifyEpisodes?.episodes[episode.number]
            ? zoroAnifyEpisodes.episodes[episode.number].title
            : null,
    }));
    console.log("anilist");
    return a;
  } else {
    console.log("fail");
  }
  console.log("nooo");
  return null;
}
