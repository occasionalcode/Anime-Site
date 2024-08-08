import { useFetchAnimeInfo } from "@/api/animeinfo-fetch";

type AnimeInfoOverviewProps = {
  id: string;
};

export default function AnimeInfoOverview({ id }: AnimeInfoOverviewProps) {
  const { data: anifylists, isLoading, error } = useFetchAnimeInfo(id);
  return (
    <div className="w-full py-5">
      <div className="text-white w-full text-wrap flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Description</h3>
        <p className="text-justify">{`${anifylists!.description.replace(/<[^>]*>/g, "")}}`}</p>
      </div>

      <div className="flex justify-start gap-2 flex-wrap text-white py-2">
        <h3 className="font-semibold">Genres:</h3>
        {anifylists?.genres.map((genre, i) => {
          return <div key={i}>{genre}</div>;
        })}
      </div>

      <div className="flex text-white justify-between">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Type</h3>
          <p>{anifylists?.format}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Episodes</h3>
          <p>
            {anifylists?.episodes.latest.latestEpisode}/
            {anifylists?.totalEpisodes}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Aired</h3>
          <p>{anifylists?.year}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Status</h3>
          <p>{anifylists?.status}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Season</h3>
          <p>{anifylists?.season}</p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Country</h3>
          <p>{anifylists?.countryOfOrigin}</p>
        </div>
      </div>
    </div>
  );
}
