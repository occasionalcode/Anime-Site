export type AnifyInfo = {
  id: string;
  slug: string;
  coverImage: string;
  bannerImage: string;
  trailer: string;
  status: string;
  season: string;
  title: Title;
  currentEpisode: number;
  mappings: Mapping[];
  synonyms: string[];
  countryOfOrigin: string;
  description: string;
  duration: number;
  color: string;
  year: number;
  rating: Rating;
  popularity: Popularity;
  type: RelationType;
  format: string;
  relations: Relation[];
  totalEpisodes: number;
  genres: string[];
  tags: string[];
  episodes: Episodes;
  averageRating: number;
  averagePopularity: number;
  artwork: Artwork[];
  characters: Character[];
};

export type Artwork = {
  img: string;
  type: ArtworkType;
  providerId: ProviderID;
};

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

export type Character = {
  name: string;
  image: string;
  voiceActor: VoiceActor;
};

export type VoiceActor = {
  name: string;
  image: null | string;
};

export type Episodes = {
  data: Datum[];
  latest: Latest;
};

export type Datum = {
  episodes: Episode[];
  providerId: string;
};

export type Episode = {
  id: string;
  img: null | string;
  title: string;
  hasDub: boolean;
  number: number;
  rating: null;
  isFiller: boolean;
  updatedAt: number;
  description: null;
};

export type Latest = {
  updatedAt: number;
  latestTitle: string;
  latestEpisode: number;
};

export type Mapping = {
  id: string;
  providerId: string;
  similarity: number;
  providerType: string;
};

export type Popularity = {
  anilist: number;
};

export type Rating = {
  kitsu: number;
  anilist: number;
};

export type Relation = {
  id: string;
  type: RelationType;
  title: Title;
  format: null | string;
  relationType: RelationTypeEnum;
};

export enum RelationTypeEnum {
  Alternative = "ALTERNATIVE",
  Character = "CHARACTER",
  Other = "OTHER",
  Prequel = "PREQUEL",
  SideStory = "SIDE_STORY",
  Source = "SOURCE",
  Summary = "SUMMARY",
}

export type Title = {
  native: string;
  romaji: string;
  english: null | string;
};

export enum RelationType {
  Anime = "ANIME",
  Manga = "MANGA",
}
