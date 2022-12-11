import Image from "next/image";
import { FetchPokeDetails } from "../../../api/swr/poke/FetchPokeDetails";
import Text from "../../Text";
import Link from "next/link";

type Props = {
  name: string;
};

export const PokeCard = ({ name }: Props) => {
  const { data, isError } = FetchPokeDetails(name);
  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Link
      href={`pokemon/${name}`}
      className="border-4 text-center rounded-3xl border-gray-400/20 w-fit py-5 px-16 hover:scale-105 transition"
    >
      <Image
        src={data.sprites.front_default}
        alt={`Picture of ${name}`}
        width={100}
        height={100}
      />
      <Text variant="p2" weight="semiBold">{name}</Text>
    </Link>
  );
};
