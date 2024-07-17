import { useDashboardStore } from "@/stores/dashboardStore";
import { Anime } from "@/types/anime-types";

type HeroAnimeCardsProps = {
  anime: Anime;
  category?: string;
};

export default function HeroAnimeCards({
  anime,
  category,
}: HeroAnimeCardsProps) {
  const { setSelectedAnime, selectedAnime } = useDashboardStore();
  return (
    <div
      className=" flex flex-col aspect-[3/4] h-52 overflow-hidden text-center"
      onClick={
        category === "HeroTrending" ? () => setSelectedAnime(anime) : () => null
      }
    >
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute size-full bg-gradient-to-t from-black/90 from-[percentage:0%_10%] to-transparent via-transparent "></div>
        <div className="absolute bottom-2 line-clamp-1 text-sm text-center items-end w-full ">
          <p>{anime.title.english}</p>
        </div>
        <img src={anime.image} alt={anime.title.english} />
      </div>

      {/* <div>
        <img src={`${anime.cover}`} alt={anime.title.english} />
      </div> */}
      {/* <div>
        <p>{anime.description}</p>
      </div> */}
    </div>
  );
}
