import useSWR from "swr";
import { pokeBasePoint } from "../../basePoint";
import { Poke } from "../../interface/poke/poke";

const fetcher = async () => {
  const res = await pokeBasePoint.get<Poke>(
    `pokemon?limit=10&offset=0`
  );

  return res.data;
};

export const FetchPoke = () => {
  const { data, error } = useSWR(`getPoke`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
