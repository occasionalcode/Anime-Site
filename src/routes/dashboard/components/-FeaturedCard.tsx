import { Anime, AnimeLists } from "@/types/anilist-types";

type FeaturedCardProps = {
  anime: Anime;
};

export default function FeaturedCard({ anime }: FeaturedCardProps) {
  return (
    <div className="relative w-full">
      <div className="absolute">
        <img
          className="object-contain"
          src={anime.cover ?? anime.image ?? undefined}
          alt={anime.title.english ?? anime.title.romaji ?? anime.title.native}
        />
      </div>
      <div className=" flex flex-row">
        <img
          src={anime.image}
          alt={anime.title.english ?? anime.title.romaji ?? anime.title.native}
        />
        <div className="flex flex-col">
          <p>
            {anime.title.english ?? anime.title.romaji ?? anime.title.native}
          </p>
          <p>{anime.description}</p>
        </div>
      </div>
    </div>
  );
}
