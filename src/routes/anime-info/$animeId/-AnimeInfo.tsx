import { useFetchAnifyAnimeInfo } from "@/api/animeinfo-fetch";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import { Angry, Heart, Laugh, Meh, Smile, Wind } from "lucide-react";
import AnimeInfoNav from "./-AnimeInfoNav";
import ErrorScreen from "@/routes/components/-ErrorScreen";
import { useFetchAnilistQuickInfo } from "@/api/anime-fetch";

type AnimeInfoProps = {
  id: string;
};
export default function AnimeInfo({ id }: AnimeInfoProps) {
  const {
    data: anifyLists,
    isLoading: anifyLoading,
    error: anifyError,
  } = useFetchAnifyAnimeInfo(id);
  const { data: anilistList, isLoading, error } = useFetchAnilistQuickInfo(id);

  if (anifyLoading && isLoading) {
    return <LoadingScreen />;
  }

  if (anifyError && error) {
    return <ErrorScreen />;
  }

  if (anifyLists || anilistList) {
    // const anifyRating = anifyLists!.rating.anilist * 10;
    const anifyRating = anifyLists?.rating.anilist
      ? anifyLists?.rating.anilist * 10
      : anifyLists?.rating.kitsu
        ? anifyLists?.rating.kitsu * 10
        : 0;
    const anilistRating = anilistList?.rating;

    const rating = anifyRating || anilistRating;

    // console.log(anifyRating);

    return (
      <div className="bg-mainBackground min-h-screen ">
        <div className="h-56">
          <div className="w-full h-[450px] absolute bg-gradient-to-t from-mainBackground/100 from-[percentage:0%_10%]  via-mainBackground/40    to-transparent z-20 "></div>
          <img
            src={anilistList?.cover ?? anifyLists?.bannerImage}
            className="object-cover size-full h-[450px] "
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center w-full  top-52 gap-5 items-center">
          <div className="w-full flex items-center justify-start px-32">
            <div className="z-20  flex flex-row">
              <img
                className="aspect-[3/4] h-96 object-cover rounded-2xl"
                src={anilistList?.image ?? anifyLists?.coverImage}
                alt=""
              />
              <div className="flex flex-col justify-end text-white pb-5 pl-5 gap-2">
                <h2 className="font-bold text-5xl">{`${anilistList?.title.english ?? anifyLists?.title.english ?? anilistList?.title.romaji ?? anifyLists?.title.romaji ?? anilistList?.title.native ?? anifyLists?.title.native}`}</h2>
                <p>{`${anilistList?.title.romaji ?? anifyLists?.title.romaji}`}</p>
                <div className="flex flex-row gap-2 pb-5">
                  {rating! >= 80 ? (
                    <Laugh className="text-green-500" />
                  ) : rating! >= 70 && rating! < 80 ? (
                    <Smile />
                  ) : rating! > 60 && rating! < 70 ? (
                    <Meh />
                  ) : rating! <= 0 ? (
                    <Wind />
                  ) : (
                    <Angry className="text-red-500" />
                  )}

                  <p>{`${anilistRating ?? anifyRating}%`}</p>
                  <div className="h-full w-0.5 bg-white rounded-xl"></div>
                  <p>{`${anifyLists?.status ?? anilistList?.status}`}</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <Heart />
                  <button className="px-5 py-2 bg-transparent border-white border-2 rounded-sm ">
                    Watch Trailer
                  </button>
                  <button className="px-5 py-2 bg-red-500 rounded-sm ">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* display the about info navigation */}
          <div className="z-20 w-full px-32 ">
            <AnimeInfoNav id={`${id}`} />
          </div>
        </div>
      </div>
    );
  }
}
