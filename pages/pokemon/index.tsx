import React, { useState } from "react";
import { Result } from "../../api/interface/poke/poke";
import { FetchPoke } from "../../api/swr/poke/FetchPoke";
import { PokeCard } from "../../components/Card/PokeCard";
import { Text, NoLinkBtn } from "../../components";

const Pokemon = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isError } = FetchPoke(page);

  const handleNextPage = () => {
    setPage(page + 20);
  };

  const handlePrevPage = () => {
    setPage(page - 20);
  };

  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <main className="w-9/12 mx-auto">
      <Text variant="h1" weight="semiBold">
        PokePedia
      </Text>
      <section className="grid grid-cols-4 gap-11 w-fit mx-auto mt-10">
        {data.results.map((data: Result, key: number) => (
          <PokeCard key={key} name={data.name} />
        ))}
      </section>
      <div className="mx-auto w-fit my-10">
        {page - 20 >= 0 && (
          <NoLinkBtn onClick={handlePrevPage} border="border1">
            Prev
          </NoLinkBtn>
        )}
        <NoLinkBtn onClick={handleNextPage} border="border1">
          Next
        </NoLinkBtn>
      </div>
    </main>
  );
};

export default Pokemon;
