import { useAnimeInfoStore } from "@/stores/animeInfoStore";
import { useEffect } from "react";
import AnimeInfoOverview from "./-AnimeInfoOverview";
import AnimeInfoCharacters from "./-AnimeInfoCharacters";
import AnimeInfoEpisodes from "./-AnimeInfoEpisodes";

type AnimeInfoNavProps = {
  id: string;
};

export default function AnimeInfoNav({ id }: AnimeInfoNavProps) {
  const { setNavigation, navigation } = useAnimeInfoStore();

  useEffect(() => {
    setNavigation("Overview");
  }, []);

  return (
    <div>
      <nav className="pb-10">
        <ul className="flex w-full justify-start gap-10 text-white font-semibold text-lg">
          <li onClick={() => setNavigation("Overview")}>Overview</li>
          <li onClick={() => setNavigation("Episodes")}>Episodes</li>
          <li onClick={() => setNavigation("Characters")}>Characters</li>
        </ul>
      </nav>
      {navigation === "Overview" ? (
        <AnimeInfoOverview id={`${id}`} />
      ) : navigation === "Episodes" ? (
        <AnimeInfoEpisodes id={`${id}`} />
      ) : navigation === "Characters" ? (
        <AnimeInfoCharacters id={`${id}`} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
