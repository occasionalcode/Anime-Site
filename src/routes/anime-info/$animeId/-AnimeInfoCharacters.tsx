import { useFetchAnimeInfo } from "@/api/animeinfo-fetch";
import ErrorScreen from "@/routes/components/-ErrorScreen";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import { unique } from "radash";
import { useState, useEffect } from "react";
import CharacterCard from "./components/-CharacterCards";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Character = {
  name: string;
  image: string;
  voiceActor: {
    name: string;
    image: string | null;
  };
};

type AnimeInfoCharactersProps = {
  id: string;
};

export default function AnimeInfoCharacters({ id }: AnimeInfoCharactersProps) {
  const { data: anifycharacterData, isLoading, error } = useFetchAnimeInfo(id);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);
  const [paginatedCharacters, setPaginatedCharacters] = useState<Character[]>(
    []
  );
  let pages = [];

  useEffect(() => {
    if (anifycharacterData?.characters) {
      const uniqueCharacters = unique(
        anifycharacterData.characters,
        (character) => character.name
      );
      const firstPostIndex = (currentPage - 1) * postPerPage;
      const lastPostIndex = firstPostIndex + postPerPage;
      setPaginatedCharacters(
        uniqueCharacters.slice(firstPostIndex, lastPostIndex)
      );
    }
  }, [anifycharacterData, currentPage, postPerPage]);

  if (error) {
    return <ErrorScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (anifycharacterData) {
    // const totalPages = Math.ceil(
    //   (unique(anifycharacterData.characters, (character) => character.name)
    //     .length || 0) / postPerPage
    // );

    for (
      let i = 1;
      i <=
      Math.ceil(
        unique(anifycharacterData.characters, (character) => character.name)
          .length / postPerPage
      );
      i++
    ) {
      pages.push(i);
    }
    return (
      <div className="overflow-auto pt-10 font-Montserrat">
        <div className="pb-5 flex flex-row gap-2">
          <div className="w-1 rounded-3xl bg-white"></div>
          <h3 className="font-semibold text-xl text-white">
            Characters & Voice Actors
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-6 min-w-96 ">
          {paginatedCharacters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="flex gap-5 py-5">
            {pages.map((page, index) => {
              return (
                <button
                  className="text-white px-3 rounded-md"
                  key={index}
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-white p-2 m-2"
          >
            Previous
          </button>
          <span className="text-white">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="text-white p-2 m-2"
          >
            Next
          </button> */}
        </div>
      </div>
    );
  }

  return null;
}
