import { useDashboardStore } from "@/stores/dashboardStore";
import FeaturedHero from "./-FeaturedHero";
import { useEffect } from "react";
import AnimeDisplayType from "./components/-AnimeDisplayType";
import { useFetchPopularAnime, useFetchTrendingAnime } from "@/api/anime-fetch";

export default function Dashboard() {
  const {
    data: trendingAnimeLists,
    error,
    isLoading,
  } = useFetchTrendingAnime();
  const { data: popularAnimeLists } = useFetchPopularAnime();
  console.log("testing");
  console.log(trendingAnimeLists);
  const { selectedAnime, setSelectedAnime } = useDashboardStore();

  // useEffect(() => {
  //   if (!selectedAnime && animelists) {
  //     console.log("selected anime set to results[0]");
  //     setSelectedAnime(animelists.results[0]);
  //   }
  // }, []);

  useEffect(() => {
    if (trendingAnimeLists) {
      setSelectedAnime(trendingAnimeLists.results[0]);
    }
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>error</p>
      </div>
    );
  }

  if (trendingAnimeLists) {
    console.log("SELECTED ANIME: ", selectedAnime);
    return (
      <div className=" overflow-x-hidden">
        <div className="relative h-screen w-screen justify-end items-end z-0">
          <FeaturedHero
            animelist={trendingAnimeLists}
            anime={selectedAnime ?? trendingAnimeLists.results[0]}
          />
        </div>
        <AnimeDisplayType animeList={popularAnimeLists} category="Popular" />
      </div>
    );
  }
}
