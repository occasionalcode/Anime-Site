import { useDashboardStore } from "@/stores/dashboardStore";
import FeaturedHero from "./-FeaturedHero";
import { useEffect } from "react";
import AnimeCategory from "./components/-AnimeCategory";
import {
  useFetchFavoriteAnime,
  useFetchPopularAnime,
  useFetchPopularAnimeMovies,
  useFetchTrendingAnime,
  useFetchUpcomingAnime,
} from "@/api/anime-fetch";
import LoadingScreen from "../components/-LoadingScreen";
import FeaturedCard from "./components/-FeaturedCard";

export default function Dashboard() {
  const {
    data: trendingAnimeLists,
    error,
    isLoading,
  } = useFetchTrendingAnime();
  const { data: popularAnimeLists } = useFetchPopularAnime();
  const { data: favouriteAnimeLists } = useFetchFavoriteAnime();
  const { data: popularAnimeMovies } = useFetchPopularAnimeMovies();
  const { data: popularUpcomimgAnimes } = useFetchUpcomingAnime();
  console.log("upcoming:", popularUpcomimgAnimes);
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
    return <LoadingScreen />;
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
        {/* <FeaturedCard anime={popularAnimeLists?.results[0]!} /> */}
        <AnimeCategory animeList={popularAnimeLists} category="Popular Now" />
        <AnimeCategory
          animeList={favouriteAnimeLists}
          category="Most Favorite"
        />
        <AnimeCategory
          animeList={popularAnimeMovies}
          category="Popular Movies"
        />
        <AnimeCategory
          animeList={popularUpcomimgAnimes}
          category="Upcoming Animes"
        />
      </div>
    );
  }
}
