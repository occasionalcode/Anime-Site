import { AnimeLists } from "@/types/anilist-types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselAnimeCategory";
import { Link } from "@tanstack/react-router";
import AnimeCards from "@/routes/dashboard/components/-AnimeCards";
import { Anifylists, Character } from "@/types/anify-types";
import CharacterCard from "./-CharacterCards";
import { useFetchAnimeInfo } from "@/api/animeinfo-fetch";
import { unique } from "radash";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import ErrorScreen from "@/routes/components/-ErrorScreen";

type AnimeInfoCarouselProps = {
  id: string;
  category: string;
};

export default function AnimeInfoCarousel({
  id,
  category,
}: AnimeInfoCarouselProps) {
  const { data: data, isLoading, error } = useFetchAnimeInfo(id);

  if (isLoading) {
    <LoadingScreen />;
  }

  if (error) {
    <ErrorScreen />;
  }

  if (data) {
    return (
      <section className="w-full bg-mainBackground py-20   font-Montserrat ">
        <div className="flex flex-col ">
          <div className="flex flex-row items-center gap-2 mb-5">
            <div className="h-7 w-1 bg-white flex items-center rounded-3xl"></div>
            <p className="text-white text-2xl font-semibold">{category}</p>
          </div>
          <div className="flex gap-7 flex-wrap">
            {/* {animeList?.results.map((anime) => {
              return <AnimeCards key={anime.id} anime={anime}></AnimeCards>;
            })} */}
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full "
            >
              <CarouselContent>
                {unique(data!.characters, (data) => data.name)?.map(
                  (anime, i) => {
                    return (
                      <Link>
                        <CarouselItem key={i} className="basis-1/7">
                          <CharacterCard character={anime} />
                        </CarouselItem>
                      </Link>
                    );
                  }
                )}

                {/* <CharacterCard character={data?.characters!} /> */}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 h-full  bg-gradient-to-r from-black to-transparent bg-transparent border-none rounded-none hover:bg-transparent" />
              <CarouselNext className="absolute right-0 h-full  bg-gradient-to-l from-black to-transparent bg-transparent border-none rounded-none hover:bg-transparent" />
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
