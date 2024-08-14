import {
  useFetchAnifyAnimeInfo,
  useFetchAnifyEpisodesData,
  useFetchEpisodeLists,
} from "@/api/animeinfo-fetch";
import { getAnimeEpisodesFromProvider } from "./functions/-AnimeInfoFunctions";
import { useFetchAnilistInfo } from "@/api/anime-fetch";

type AnimeInfoEpisodesProps = {
  id: string;
};

export default function AnimeInfoEpisodes({ id }: AnimeInfoEpisodesProps) {
  const { data: anifyInfo } = useFetchAnifyAnimeInfo(id);
  const { data: anilistInfo } = useFetchAnilistInfo(id);
  const { data: episodes } = useFetchEpisodeLists(id, anifyInfo, anilistInfo);
  console.log(episodes + "haha");
  return (
    <section>
      <div className="pb-5 flex flex-row gap-2 font-Montserrat">
        <div className="w-1 rounded-3xl bg-white"></div>
        <h3 className="font-semibold text-xl text-white">Episodes</h3>
      </div>
      <div className="text-white">{JSON.stringify(episodes, null, 2)}</div>
    </section>
  );
}
