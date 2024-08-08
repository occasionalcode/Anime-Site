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
      className="relative aspect-[2/3] h-72 font-Montserrat"
    >
      <div className="absolute inset-0 transition-opacity duration-300 ease-in-out">
        <div className="w-full h-full absolute bg-gradient-to-t from-mainBackground/70 from-[percentage:0%_5%] via-mainBackground/10 to-transparent z-20 transition-opacity duration-300 ease-in-out"></div>
        <img
          className={`object-cover rounded-lg h-72 w-full transition-opacity duration-300 ease-in-out ${
            hoverTrigger ? "opacity-0" : "opacity-100"
          }`}
          src={character.image}
          alt={character.name}
        />
        <p
          className={`absolute font-semibold text-sm bottom-0 z-30 w-full text-wrap text-center text-white line-clamp-1 transition-opacity duration-300 ease-in-out ${
            hoverTrigger ? "opacity-0" : "opacity-100"
          }`}
        >
          {character.name}
        </p>
      </div>

      <div className="absolute inset-0 transition-opacity duration-300 ease-in-out">
        <div className="w-full h-full absolute bg-gradient-to-t from-mainBackground/85 from-[percentage:0%_10%] via-mainBackground/10 to-transparent z-20 transition-opacity duration-300 ease-in-out"></div>
        {character.voiceActor.image ? (
          <img
            className={`object-cover rounded-lg h-72 w-full transition-opacity duration-300 ease-in-out ${
              hoverTrigger ? "opacity-100" : "opacity-0"
            }`}
            src={character.voiceActor.image}
            alt={character.voiceActor.name}
          />
        ) : (
          <div
            className={`rounded-lg h-72 w-full text-white flex justify-center items-center transition-opacity duration-300 ease-in-out ${
              hoverTrigger ? "opacity-100" : "opacity-0"
            }`}
          >
            ?
          </div>
        )}
        <p
          className={`absolute font-semibold text-sm z-20 bottom-0 w-full text-wrap text-center text-white line-clamp-1 transition-opacity duration-300 ease-in-out ${
            hoverTrigger ? "opacity-100" : "opacity-0"
          }`}
        >
          {character.voiceActor.name}
        </p>
      </div>
    </div>
  );
}
