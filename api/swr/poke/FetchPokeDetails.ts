import useSWR from "swr";
import { pokeBasePoint } from "../../basePoint";
import { PokeDetail } from "../../interface/poke/pokeDetail";

const fetcher = async (name:string) => {
  const res = await pokeBasePoint.get<PokeDetail>(
    `pokemon/${name}`
  );

  return res.data;
};

export const FetchPokeDetails = (name:string) => {
  const { data, error } = useSWR(`${name}`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
