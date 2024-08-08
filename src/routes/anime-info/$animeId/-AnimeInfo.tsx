import { useFetchAnimeInfo } from "@/api/animeinfo-fetch";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import { Angry, Heart, Laugh, Meh, Smile } from "lucide-react";
import AnimeInfoNav from "./-AnimeInfoNav";
import ErrorScreen from "@/routes/components/-ErrorScreen";

type AnimeInfoProps = {
  id: string;
};
export default function AnimeInfo({ id }: AnimeInfoProps) {
  const { data: anifyLists, isLoading, error } = useFetchAnimeInfo(id);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  if (anifyLists) {
    const rating = anifyLists.rating.anilist * 10;

    return (
      <div className="bg-mainBackground min-h-screen w-screen ">
        <div className="h-56">
          <div className="w-full h-[450px] absolute bg-gradient-to-t from-mainBackground/100 from-[percentage:0%_10%]  via-mainBackground/40    to-transparent z-20 "></div>
          <img
            src={anifyLists?.bannerImage}
            className="object-cover size-full h-[450px] "
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center w-full  top-52 gap-5 items-center">
          <div className="w-full flex items-center justify-start px-32">
            <div className="z-20  flex flex-row">
              <img
                className="aspect-[3/4] h-96 object-cover rounded-2xl"
                src={anifyLists?.coverImage}
                alt=""
              />
              <div className="flex flex-col justify-end text-white pb-5 pl-5 gap-2">
                <h2 className="font-bold text-5xl">{`${anifyLists?.title.english}`}</h2>
                <p>{`${anifyLists?.title.romaji}`}</p>
                <div className="flex flex-row gap-2 pb-5">
                  {rating >= 80 ? (
                    <Laugh className="text-green-500" />
                  ) : rating >= 70 && rating < 80 ? (
                    <Smile />
                  ) : rating > 60 && rating < 70 ? (
                    <Meh />
                  ) : (
                    <Angry className="text-red-500" />
                  )}
                  <p>{`${anifyLists.rating.anilist * 10}%`}</p>
                  <div className="h-full w-0.5 bg-white rounded-xl"></div>
                  <p>{`${anifyLists?.status}`}</p>
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
          <div className="z-20 w-full px-32 flex flex-row gap-5 ">
            <AnimeInfoNav id={`${anifyLists.id}`} />
          </div>
        </div>
      </div>
    );
    // return (
    //   <div className="w-full min-h-screen bg-mainBackground">
    //     <div className="  font-Montserrat overflow-x-hidden">
    //       <div className="w-full max-h-[400px] bg-red-600">
    //         <div className="size-full absolute bg-gradient-to-t from-mainBackground/100 from-[percentage:50%_0%]  via-mainBackground/20    to-transparent z-20 "></div>
    //         <img
    //           src={anifyLists?.bannerImage}
    //           className="object-cover w-full h-[450px]"
    //           alt=""
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center w-screen absolute top-52 gap-5 items-center">
    //         <div className="w-full flex items-center justify-start px-32">
    //           <div className="z-20  flex flex-row">
    //             <img
    //               className="aspect-[3/4] h-96 object-cover rounded-2xl"
    //               src={anifyLists?.coverImage}
    //               alt=""
    //             />
    //             <div className="flex flex-col justify-end text-white pb-5 pl-5 gap-2">
    //               <h2 className="font-bold text-5xl">{`${anifyLists?.title.english}`}</h2>
    //               <p>{`${anifyLists?.title.romaji}`}</p>
    //               <div className="flex flex-row gap-2 pb-5">
    //                 {rating >= 80 ? (
    //                   <Laugh className="text-green-500" />
    //                 ) : rating >= 70 && rating < 80 ? (
    //                   <Smile />
    //                 ) : rating > 60 && rating < 70 ? (
    //                   <Meh />
    //                 ) : (
    //                   <Angry className="text-red-500" />
    //                 )}
    //                 <p>{`${anifyLists.rating.anilist * 10}%`}</p>
    //                 <div className="h-full w-0.5 bg-white rounded-xl"></div>
    //                 <p>{`${anifyLists?.status}`}</p>
    //               </div>
    //               <div className="flex flex-row gap-3 items-center">
    //                 <Heart />
    //                 <button className="px-5 py-2 bg-transparent border-white border-2 rounded-sm ">
    //                   Watch Trailer
    //                 </button>
    //                 <button className="px-5 py-2 bg-red-500 rounded-sm ">
    //                   Play Now
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="z-20 w-full px-32 flex flex-row gap-5 ">
    //           <AnimeInfoNav id={`${anifyLists.id}`} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
