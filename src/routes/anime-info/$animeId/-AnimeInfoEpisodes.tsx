import {
  useFetchAnifyAnimeInfo,
  useFetchAnifyEpisodesData,
  useFetchAnizipEpisodes,
  useFetchEpisodeLists,
  useFetchEpisodesFromProviders,
} from "@/api/animeinfo-fetch";
import { getAnimeEpisodesFromProvider } from "./functions/-AnimeInfoFunctions";
import { useFetchAnilistInfo } from "@/api/anime-fetch";

type AnimeInfoEpisodesProps = {
  id: string;
};

export default function AnimeInfoEpisodes({ id }: AnimeInfoEpisodesProps) {
  const { data, isLoading, error } = useFetchEpisodesFromProviders(id);
  const { data: episodes } = useFetchEpisodeLists(data);
  const anify = data?.anifyEpisodes;
  if (isLoading) {
    return <div className="text-white">loading</div>;
  }
  if (error) {
    return <div className="text-white">error</div>;
  }
  if (data) {
    return episodes ? (
      <section>
        <div className="pb-5 flex flex-row gap-2 font-Montserrat">
          <div className="w-1 rounded-3xl bg-white"></div>
          <h3 className="font-semibold text-xl text-white">Episodes</h3>
        </div>
        <div className="grid grid-cols-5 text-white gap-5">
          {episodes.map((episode) => (
            <div
              key={episode.number}
              className="relative aspect-[3/2] overflow-hidden"
            >
              {episode.img ? (
                <img
                  className="h-full w-full object-cover rounded-md object-center"
                  src={`${episode.img}`}
                  alt={`${episode.title}`}
                />
              ) : (
                <div className="h-full w-full object-cover rounded-md object-center bg-slate-900">
                  <img
                    className="h-full w-full object-cover rounded-md object-center"
                    // src={anifyInfo.bannerImage}
                    // src={anify.e}
                    alt=""
                  />
                </div>
              )}
              <div className="absolute bottom-0 px-2 pb-2">
                <p>{episode.title}</p>
                <p>{episode.number}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-white">{JSON.stringify(episodes, null, 2)}</div> */}
      </section>
    ) : (
      <div className="text-white">Loading</div>
    );
  } else {
    return (
      <div>
        <div className="pb-5 flex flex-row gap-2 font-Montserrat">
          <div className="w-1 rounded-3xl bg-white"></div>
          <h3 className="font-semibold text-xl text-white">Episodes</h3>
        </div>
        <div className="text-white w-full h-full">
          <p>no episodes available</p>
        </div>
      </div>
    );
  }
  // const {
  //   data: anifyInfo,
  //   isLoading: isAnifyInfoLoading,
  //   error: anifyInfoError,
  // } = useFetchAnifyAnimeInfo(id);
  // const {
  //   data: anilistInfo,
  //   isLoading: isAnilistInfoLoading,
  //   error: anilistInfoError,
  // } = useFetchAnilistInfo(id);
  // const { data: anizipInfo } = useFetchAnizipEpisodes(id);
  // const { data: episodes } = useFetchEpisodeLists(
  //   anifyInfo,
  //   anilistInfo,
  //   anizipInfo
  // );

  // if (isAnifyInfoLoading && isAnilistInfoLoading) {
  //   return <div className="text-white">loading</div>;
  // }
  // if (anifyInfoError && anilistInfoError) {
  //   return <div className="text-white">error</div>;
  // }

  // if (anilistInfo && anifyInfo) {
  //   return episodes ? (
  //     <section>
  //       <div className="pb-5 flex flex-row gap-2 font-Montserrat">
  //         <div className="w-1 rounded-3xl bg-white"></div>
  //         <h3 className="font-semibold text-xl text-white">Episodes</h3>
  //       </div>
  //       <div className="grid grid-cols-5 text-white gap-5">
  //         {episodes.map((episode) => (
  //           <div
  //             key={episode.number}
  //             className="relative aspect-[3/2] overflow-hidden"
  //           >
  //             {episode.img ? (
  //               <img
  //                 className="h-full w-full object-cover rounded-md object-center"
  //                 src={`${episode.img}`}
  //                 alt={`${episode.title}`}
  //               />
  //             ) : (
  //               <div className="h-full w-full object-cover rounded-md object-center bg-slate-900">
  //                 <img
  //                   className="h-full w-full object-cover rounded-md object-center"
  //                   src={anifyInfo.bannerImage}
  //                   alt=""
  //                 />
  //               </div>
  //             )}
  //             <div className="absolute bottom-0 px-2 pb-2">
  //               <p>{episode.title}</p>
  //               <p>{episode.number}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       {/* <div className="text-white">{JSON.stringify(episodes, null, 2)}</div> */}
  //     </section>
  //   ) : (
  //     <div className="text-white">Loading</div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <div className="pb-5 flex flex-row gap-2 font-Montserrat">
  //         <div className="w-1 rounded-3xl bg-white"></div>
  //         <h3 className="font-semibold text-xl text-white">Episodes</h3>
  //       </div>
  //       <div className="text-white w-full h-full">
  //         <p>no episodes available</p>
  //       </div>
  //     </div>
  //   );
  // }
}
