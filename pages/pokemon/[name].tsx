import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Meta, NoLinkBtn, Text } from "../../components";
import { FetchPokeDetails } from "../../api/swr";

const PokeDetail = () => {
  const router = useRouter();

  const [showMore, setShowMore] = useState(true);
  const pokeName = router.query.name as string;
  const { data, isError } = FetchPokeDetails(pokeName);
  const movesLength: number | undefined = data?.moves.length;

  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  return (
    <main className="w-7/12 mx-auto">
      <Meta subTitle={`${pokeName}`} />
      <div className="flex items-center justify-center">
        <Image
          src={data.sprites.front_default}
          alt={`Picture of ${router.query.name}`}
          width={200}
          height={200}
        />
        <div>
          <Text variant="h2" weight="semiBold">
            {router.query.name}
          </Text>
          <div className="flex mt-1 mb-5">
            {data.types.map((data, key) => (
              <Text
                variant="p2"
                key={key}
                className="mr-3 px-2 py-1 rounded-lg border-2 border-stone-400"
              >
                {data.type.name}
              </Text>
            ))}
          </div>
          <Text variant="p1" weight="semiBold">
            abilities
          </Text>
          <div className="flex mt-1">
            {data.abilities.map((data, key) => (
              <Text
                variant="p2"
                key={key}
                weight="semiBold"
                className="mr-3 px-2 py-1 rounded-lg text-black bg-stone-400"
              >
                {data.ability.name}
              </Text>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Text variant="h2" weight="semiBold">
          Moves
        </Text>
        <div className="flex mt-1 flex-wrap mb-4">
          {data.moves.slice(0, showMore ? 15 : movesLength).map((data, key) => (
            <Text
              variant="p2"
              key={key}
              weight="semiBold"
              className="mr-3 mt-2 px-2 py-1 rounded-lg text-black bg-stone-400"
            >
              {data.move.name}
            </Text>
          ))}
        </div>
        {(movesLength as number) >= 15 && (
          <NoLinkBtn onClick={() => setShowMore(!showMore)} border="border1">
            {showMore ? "show more" : "hide more"}
          </NoLinkBtn>
        )}
      </div>
    </main>
  );
};

export default PokeDetail;
