import { Anifylists } from "@/types/anify-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchAnimeInfo(id: string) {
  return useQuery<Anifylists>({
    queryKey: ["trendingAnime", id],
    queryFn: async () => {
      console.log("fetching counters");
      const { data: animeInfo } = await axios.get(
        `https://anify.eltik.cc/info/${id}?fields[episodes,bannerImage,coverImage,title,rating,trailer,genres,description,type,id,totalEpisodes,year,status,format]`
      );
      return animeInfo as Anifylists;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
