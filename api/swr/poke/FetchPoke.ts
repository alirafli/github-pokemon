import useSWR from "swr";
import { pokeBasePoint } from "../../basePoint";
import { Poke } from "../../interface/poke/poke";

const fetcher = async (page:number) => {
  const res = await pokeBasePoint.get<Poke>(
    `pokemon?limit=20&offset=${page}`
  );

  return res.data;
};

export const FetchPoke = (page:number) => {
  const { data, error } = useSWR(`${page}`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
