import React from "react";
import { Result } from "../../api/interface/poke/poke";
import { FetchPoke } from "../../api/swr/poke/FetchPoke";
import { PokeCard } from "../../components/Card/PokeCard";
import { Text } from "../../components";

const Pokemon = () => {
  const { data, isError } = FetchPoke();
  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="w-9/12 mx-auto">
      <Text variant="h1" weight="semiBold">
        PokePedia
      </Text>
      <div className="grid grid-cols-4 gap-11 w-fit mx-auto mt-10">
        {data.results.map((data: Result, key: number) => (
          <PokeCard key={key} name={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
