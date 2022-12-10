import React from "react";
import { Result } from "../../api/interface/poke/poke";
import { FetchPoke } from "../../api/swr/poke/FetchPoke";

const Pokemon = () => {
  const { data, isError } = FetchPoke();
  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.results.map((data: Result, key: number) => (
        <h1 key={key}>{data.name}</h1>
      ))}
    </div>
  );
};

export default Pokemon;
