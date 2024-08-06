export type AnimeLists = {
  currentPage: number;
  hasNextPage: boolean;
  totalPages: number;
  totalResults: number;
  results: Anime[];
};

export type Anime = {
  id: string;
  malId: number;
  title: Title;
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

export enum Hash {
  Hash = "hash",
}

export type Status = {
  Completed: "Completed";
  Ongoing: "Ongoing";
};

export type Title = {
  romaji: string;
  english: string;
  native: string;
  userPreferred: string;
};

export enum Type {
  Tv = "TV",
}
