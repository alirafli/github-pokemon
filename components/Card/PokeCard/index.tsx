import Image from "next/image";
import { FetchPokeDetails } from "../../../api/swr/poke/FetchPokeDetails";
import Text from "../../Text";

type Props = {
  name: string;
};

export const PokeCard = ({ name }: Props) => {
  const { data, isError } = FetchPokeDetails(name);
  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="border-4 text-center rounded-3xl border-gray-400/20 w-fit py-3 px-10">
      <Image
        src={data.sprites.front_default}
        alt={`Picture of ${name}`}
        width={150}
        height={150}
      />
      <Text weight="semiBold">{name}</Text>
    </div>
  );
};
