import { Anime, AnimeLists } from "@/types/anime-types";
import AnimeCards from "./-AnimeCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type AnimeDisplayTypeProps = {
  animeList: AnimeLists | undefined;
  category: string;
};

export default function AnimeDisplayType({
  animeList,
  category,
}: AnimeDisplayTypeProps) {
  return (
    <div className="w-screen py-10 bg-black px-20 ">
      <div className="flex flex-col">
        <p className="text-white mb-5 text-2xl font-semibold">{category}</p>
        <div className="flex gap-7 flex-wrap ">
          {/* {animeList?.results.map((anime) => {
            return <AnimeCards key={anime.id} anime={anime}></AnimeCards>;
          })} */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {animeList?.results.map((anime) => {
                return (
                  <CarouselItem className="basis-1/7">
                    <AnimeCards key={anime.id} anime={anime}></AnimeCards>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
