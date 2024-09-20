import { useFetchAnifyAnimeInfo } from "@/api/animeinfo-fetch";
import ErrorScreen from "@/routes/components/-ErrorScreen";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import AnimeInfoCarousel from "./components/-AnimeInfoCarousel";
import {
  useFetchAnilistInfo,
  useFetchAnilistQuickInfo,
} from "@/api/anime-fetch";
import { Status } from "@/types/anilist-types";

type AnimeInfoOverviewProps = {
  id: string;
};

export default function AnimeInfoOverview({ id }: AnimeInfoOverviewProps) {
  const { data: anifylists, isLoading, error } = useFetchAnifyAnimeInfo(id);

  const {
    data: anilistList,
    isLoading: anilistLoading,
    error: anilistError,
  } = useFetchAnilistQuickInfo(id);
  const status = anilistList?.status;
  if (isLoading && anilistLoading) {
    <LoadingScreen />;
  }
  if (error && anilistError) {
    <ErrorScreen />;
  }

  if (anifylists || anilistList) {
    return (
      <div className="w-full">
        <div className="flex flex-col">
          <div className="text-white w-full text-wrap flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="text-justify">{`${anifylists?.description ? anifylists!.description.replace(/<[^>]*>/g, "") : anilistList?.description.replace(/<[^>]*>/g, "")}`}</p>
          </div>
          <div className="flex justify-start gap-2 flex-wrap text-white py-2">
            <h3 className="font-semibold">Genres:</h3>
            {anifylists?.genres.map((genre, i) => {
              return <div key={i}>{genre}</div>;
            }) ??
              anilistList?.genres.map((genre, i) => {
                return <div key={i}>{genre}</div>;
              })}
          </div>
          <div className="flex text-white justify-between">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Type</h3>
              <p>{anifylists?.format ?? anilistList?.type ?? "N/A"}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Episodes</h3>
              <p>
                {anifylists?.episodes.latest.latestEpisode ??
                  anilistList?.currentEpisode ??
                  "-"}
                /
                {anifylists?.totalEpisodes ?? anilistList?.totalEpisodes ?? "-"}
              </p>
            </div>
            <div className="flex flex-col items-center ">
              {/* {[Status.NOT_YET_RELEASED, Status.NotYetAired].includes(
                anilistList?.status 
              ) ? (
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">Airing</h3>
                  <p>
                    {anifylists?.year ??
                      anilistList?.releaseDate ??
                      anilistList?.startDate.year ??
                      "N/A"}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">Aired</h3>
                  <p>
                    {anifylists?.year ??
                      anilistList?.releaseDate ??
                      anilistList?.startDate.year}
                  </p>
                </div>
              )} */}

              {anifylists?.status ? (
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">Aired</h3>
                  <p>
                    {anifylists?.year ??
                      anilistList?.releaseDate ??
                      anilistList?.startDate.year}
                  </p>
                </div>
              ) : anilistList?.status ? (
                <div>
                  {[Status.NOT_YET_RELEASED, Status.NotYetAired].includes(
                    anilistList.status
                  ) && (
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-lg font-semibold">Airing</h3>
                      <p>
                        {anifylists?.year ??
                          anilistList?.releaseDate ??
                          anilistList?.startDate.year ??
                          "N/A"}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">Airing</h3>
                  <p>N/A</p>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Status</h3>
              <p>{anifylists?.status ?? anilistList?.status ?? "N/A"}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Season</h3>
              <p>{anifylists?.season ?? anilistList?.season ?? "N/A"}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Country</h3>
              <p>
                {anifylists?.countryOfOrigin ??
                  anilistList?.countryOfOrigin ??
                  "N/A"}
              </p>
            </div>
          </div>
        </div>
        <div>
          <AnimeInfoCarousel id={id} category="Characters and Voice Actors" />
        </div>
      </div>
    );
  }
}
