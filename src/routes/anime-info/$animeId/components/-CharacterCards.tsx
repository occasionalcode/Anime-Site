import { Character } from "@/types/anify-types";
import { useState } from "react";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const [hoverTrigger, setHoverTrigger] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoverTrigger(true)}
      onMouseLeave={() => setHoverTrigger(false)}
      className={`aspect-[2/3] h-72`}
    >
      {!hoverTrigger ? (
        <>
          <img
            className="object-cover rounded-lg h-72 w-full"
            src={character.image}
            alt={character.name}
          />
          <p className="text-wrap text-center text-white line-clamp-1">
            {character.name}
          </p>
        </>
      ) : (
        <>
          {character.voiceActor.image ? (
            <img
              className="object-cover rounded-lg h-72 w-full"
              src={character.voiceActor.image}
              alt={character.voiceActor.name}
            />
          ) : (
            <div className="rounded-lg h-72 w-full text-white flex justify-center items-center">
              ?
            </div>
          )}
          <p className="text-wrap text-center text-white">
            {character.voiceActor.name}
          </p>
        </>
      )}
    </div>
  );
}
