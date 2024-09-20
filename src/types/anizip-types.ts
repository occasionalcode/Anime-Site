import { AnifyInfo, Datum } from "./anify-types";
import { AnilistInfo, AnilistEpisode } from "./anilist-types";

export interface AnizipList {
  titles: Titles;
  episodes: { [key: string]: AnizipEpisode };
  episodeCount: number;
  specialCount: number;
  images: AnizipImage[];
  mappings: Mappings;
}

export interface AnizipEpisode {
  tvdbShowId?: number;
  tvdbId?: number;
  seasonNumber?: number;
  episodeNumber?: number;
  absoluteEpisodeNumber?: number;
  title: AnizipTitle;
  airDate?: Date;
  airDateUtc?: Date;
  runtime?: number;
  overview?: string;
  image?: string;
  episode: string;
  anidbEid: number;
  length: number;
  airdate: string;
  rating?: string;
  summary?: string;
  finaleType?: string;
}

export interface AnizipTitle {
  ja?: string;
  en: string;
  de?: string;
  fr?: string;
  it?: string;
  ru?: string;
  ko?: string;
  "pt-BR"?: string;
  th?: string;
  "x-jat"?: string;
  "zh-Hans"?: string;
  es?: string;
  "zh-Hant"?: string;
  pt?: string;
  "x-other"?: string;
}

export interface AnizipImage {
  coverType: string;
  url: string;
}

export interface Mappings {
  animeplanet_id: string;
  kitsu_id: number;
  mal_id: number;
  type: string;
  anilist_id: number;
  anisearch_id: number;
  anidb_id: number;
  notifymoe_id: string;
  livechart_id: number;
  thetvdb_id: number;
  imdb_id: string;
  themoviedb_id: string;
}

export interface Titles {
  "x-jat": string;
  ja: string;
  it: string;
  ru: string;
  tr: string;
  bg: string;
  tl: string;
  mn: string;
  zh: string;
  en: string;
  de: string;
  fr: string;
  es: string;
  ko: string;
  pl: string;
  ar: string;
  pt: string;
  no: string;
  "pt-BR": string;
  da: string;
  fi: string;
  el: string;
  he: string;
  hu: string;
  th: string;
  my: string;
  vi: string;
  id: string;
  uk: string;
  "zh-Hant": string;
  "zh-Hans": string;
  bd: string;
  "es-GA": string;
  fa: string;
}

export type EpisodesFromProvider = {
  anifyEpisodes: Datum[];
  anilistEpisodes: AnilistEpisode[];
  anizipData: AnizipList;
};
