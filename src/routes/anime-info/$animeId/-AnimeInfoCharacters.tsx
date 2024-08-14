import { useFetchAnifyAnimeInfo } from "@/api/animeinfo-fetch";
import ErrorScreen from "@/routes/components/-ErrorScreen";
import LoadingScreen from "@/routes/components/-LoadingScreen";
import { unique } from "radash";
import { useState, useEffect } from "react";
import CharacterCard from "./components/-CharacterCards";
import UsePagination from "./-Pagination";
import { Character } from "@/types/anify-types";
import { useAnimeInfoStore } from "@/stores/animeInfoStore";

type AnimeInfoCharactersProps = {
  id: string;
};

export default function AnimeInfoCharacters({ id }: AnimeInfoCharactersProps) {
  const {
    data: anifycharacterData,
    isLoading,
    error,
  } = useFetchAnifyAnimeInfo(id);
  const {
    characterCurrentPagination: characterPagination,
    setCharacterCurrentPagination: setCharacterPagination,
  } = useAnimeInfoStore();
  const postPerPage = 12;
  const [paginatedCharacters, setPaginatedCharacters] = useState<Character[]>(
    []
  );

  useEffect(() => {
    if (anifycharacterData?.characters) {
      const uniqueCharacters = unique(
        anifycharacterData.characters,
        (character) => character.name
      );
      const firstPostIndex = (characterPagination - 1) * postPerPage;
      const lastPostIndex = firstPostIndex + postPerPage;
      setPaginatedCharacters(
        uniqueCharacters.slice(firstPostIndex, lastPostIndex)
      );
    }
  }, [anifycharacterData, characterPagination]);

  if (error) {
    return <ErrorScreen />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (anifycharacterData) {
    const totalCharacters = unique(
      anifycharacterData.characters,
      (character) => character.name
    ).length;
    const totalPages = Math.ceil(totalCharacters / postPerPage);

    return (
      <div className="overflow-auto  font-Montserrat">
        <div className="pb-5 flex flex-row gap-2">
          <div className="w-1 rounded-3xl bg-white"></div>
          <h3 className="font-semibold text-xl text-white">
            Characters & Voice Actors
          </h3>
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-6 min-w-96">
          {paginatedCharacters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5 w-full pb-10 pt-5">
          <UsePagination
            pages={totalPages}
            onPageChange={(page) => setCharacterPagination(page)} // Handle page change
          />
        </div>
      </div>
    );
  }

  return null;
}
