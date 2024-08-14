import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselFeatured";
import { AnilistLists } from "@/types/anilist-types";
import HeroAnimeCards from "./-HeroAnimeCards";
import { Link } from "@tanstack/react-router";

type FeaturedCarouselProps = {
  animelist: AnilistLists;
};

export default function FeaturedCarousel({ animelist }: FeaturedCarouselProps) {
  //   const { selectedItemID, setSelectedItemID } = useDashboardStore();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-2/3   z-40 "
    >
      <div className="flex flex-col ">
        <div className="flex flex-row justify-left gap-5 items-end">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <p className="my-4">Trending now</p>
        <CarouselContent className="-ml-7 relative">
          {animelist.results.map((anime) => {
            return (
              <CarouselItem key={anime.id} className="pl-7 basis-1/6">
                <HeroAnimeCards category="HeroTrending" anime={anime} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
