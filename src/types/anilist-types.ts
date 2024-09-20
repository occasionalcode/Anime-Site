export type AnilistLists = {
  currentPage: number;
  hasNextPage: boolean;
  totalPages: number;
  totalResults: number;
  results: Anime[];
};

export type Anime = {
  id: string;
  malId: number;
  title: AnilistTitle;
  status: Status;
  image: string;
  imageHash: Hash;
  cover: null | string;
  coverHash: Hash;
  popularity: number;
  totalEpisodes: number;
  currentEpisode: number | null;
  countryOfOrigin: CountryOfOrigin;
  description: string;
  genres: string[];
  rating: number;
  color: string;
  type: Type;
  releaseDate: number;
};

export enum CountryOfOrigin {
  Jp = "JP",
}

export enum Status {
  RELEASING = "RELEASING",
  Ongoing = "Ongoing",
  FINISHED = "FINISHED",
  Completed = "Completed",
  NotYetAired = "Not yet aired",
  NOT_YET_RELEASED = "NOT_YET_RELEASED",
  CANCELLED = "CANCELLED",
  HIATUS = "HIATUS",
  Cancelled = "Cancelled",
}
export type AnilistTitle = {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
};

export enum Type {
  Tv = "TV",
}

export interface AnilistInfo {
  id: string;
  title: AnilistTitle;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: Trailer;
  image: string;
  imageHash: Hash;
  popularity: number;
  cover: string;
  coverHash: Hash;
  description: string;
  status: Status;
  releaseDate: number;
  startDate: EndDateClass;
  endDate: EndDateClass;
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: RecommendationType;
  recommendations: Recommendation[];
  characters: Character[];
  relations: Relation[];
  mappings: Mapping[];
  artwork: Artwork[];
  episodes: AnilistEpisode[];
}

export interface Artwork {
  img: string;
  type: ArtworkType;
  providerId: ProviderID;
}

export enum ProviderID {
  Anilist = "anilist",
  Kitsu = "kitsu",
  Tvdb = "tvdb",
}

export enum ArtworkType {
  Banner = "banner",
  ClearArt = "clear_art",
  ClearLogo = "clear_logo",
  Icon = "icon",
  Poster = "poster",
  TopBanner = "top_banner",
}

export interface Character {
  id: number;
  role: Role;
  name: Name;
  image: string;
  imageHash: Hash;
  voiceActors: VoiceActor[];
}

export enum Hash {
  Hash = "hash",
}

export interface Name {
  first: string;
  last: null | string;
  full: string;
  native: null | string;
  userPreferred: string;
}

export enum Role {
  Main = "MAIN",
  Supporting = "SUPPORTING",
}

export interface VoiceActor {
  id: number;
  language: Language;
  name: Name;
  image: string;
  imageHash: Hash;
}

export enum Language {
  English = "English",
  French = "French",
  German = "German",
  Hungarian = "Hungarian",
  Italian = "Italian",
  Japanese = "Japanese",
  Korean = "Korean",
  Portuguese = "Portuguese",
  Spanish = "Spanish",
}

export interface EndDateClass {
  year: number;
  month: number;
  day: number;
}

export interface AnilistEpisode {
  id: string;
  title: string;
  description: null;
  number: number;
  image: string;
  imageHash: Hash;
  airDate: null;
}

export interface Mapping {
  id: string;
  providerId: string;
  similarity: number;
  providerType: string;
}

export interface Recommendation {
  id: number;
  malId: number;
  title: AnilistTitle;
  status: Status;
  episodes: number | null;
  image: string;
  imageHash: Hash;
  cover: string;
  coverHash: Hash;
  rating: number;
  type: RecommendationType;
}

export enum RecommendationType {
  Movie = "MOVIE",
  Tv = "TV",
}

export interface Relation {
  id: number;
  relationType: string;
  malId: number;
  title: AnilistTitle;
  status: Status;
  episodes: number | null;
  image: string;
  imageHash: Hash;
  color: string;
  type: string;
  cover: string;
  coverHash: Hash;
  rating: number;
}

export interface Trailer {
  id: string;
  site: string;
  thumbnail: string;
  thumbnailHash: Hash;
}
