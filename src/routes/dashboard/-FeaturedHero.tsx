import { Anime, AnimeLists } from "@/types/anilist-types";
import FeaturedCarousel from "./-FeaturedCarousel";

type FeaturedHeroProps = {
  anime: Anime;
  animelist: AnimeLists;
};

export default function FeaturedHero({ anime, animelist }: FeaturedHeroProps) {
  console.log("ANIME PROPS IN FEATURED HERO", anime);
  if (anime) {
    return (
      <div className=" absolute size-full z-10 font-Montserrat  text-white overflow-x-hidden">
        <div className="size-full absolute bg-gradient-to-tr from-mainBackground/100 from-[percentage:0%_35%]  via-mainBackground/60    to-transparent z-20 "></div>
        <div className="absolute z-20 w-full h-full flex flex-col justify-end pb-6 ">
          <div className="flex flex-col mx-14  gap-6  ">
            <div className="flex flex-row justify-between size-full ">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-5xl font-bold w-[60rem] line-clamp-2">{`${anime.title.english ?? anime.title.romaji ?? anime.title.native}`}</h2>
                <div className="flex items-start w-full font-bold">
                  <div className="flex flex-col gap-1">
                    <p
                      className={`text-sm  ${`${anime.status}` === "Ongoing" && " text-orange-400"} ${`${anime.status}` === "Completed" && " text-white"}`}
                    >{`${anime.status}`}</p>
                    <div className="h-[1px] w-full bg-white "></div>
                  </div>
                </div>
                <div>
                  <p className="text-base line-clamp-3 w-[60rem]">{`${anime.description.replace(/<[^>]*>/g, "")}`}</p>
                  <button className="text-red-300">See more...</button>
                </div>
                <div className="flex flex-row justify-start w-full items-start gap-4">
                  {anime.genres.map((genre) => {
                    return (
                      <div
                        key={genre}
                        className={`text-white bg-slate-500 font-base rounded-3xl px-3 py-1 flex-wrap my-4 `}
                      >
                        <p className={`text-sm  `}>{genre}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-row justify-start w-full gap-5">
                  <button className="border-white border-2 px-7 py-2 rounded-sm">
                    Watch Trailer
                  </button>
                  <button className="bg-red-700 px-7 py-2 rounded-sm">
                    Watch Now
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center  w-full overflow-hidden ">
                <img
                  className="aspect-[2/3] h-96 rounded-2xl"
                  src={anime.image}
                  alt={
                    anime.title.english ??
                    anime.title.romaji ??
                    anime.title.native
                  }
                />
              </div>
            </div>

            <FeaturedCarousel animelist={animelist} />
          </div>
        </div>
        <img
          className="absolute size-full  object-cover z-[1] blur-sm"
          src={anime.cover ?? anime.image}
          alt=""
        />
      </div>
    );
  }
}
