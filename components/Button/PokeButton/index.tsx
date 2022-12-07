import Image from "next/image";
import POKEMON from "../../../public/images/pokemon.svg";

export const PokeButton = ({}) => {
  return (
    <div className="animate-pulse">
      <Image
        src={POKEMON}
        alt="Go to pokemon page!"
        width={90}
        height={90}
      />
    </div>
  );
};
