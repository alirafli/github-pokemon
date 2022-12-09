import React from "react";
import { Button, Input, Meta, Text } from "../components";
import { IndexLayout } from "../layouts";
import { useSearchContext } from "../context/SearchContext";
import { FetchRepositories } from "./api/swr/FetchRepositories";

function Home() {
  const { setSearch } = useSearchContext();
  const { data, isError } = FetchRepositories();
  return (
    <>
      <Meta subTitle="Home" />
      <main className="">
        <Text variant="h2">
          Search more than <b>X</b> repositories
        </Text>
        <div className="flex mt-3">
          <Input placeHolder="Search GitHub" className="w-80 mx-0 mr-3" onChange={(e) => setSearch(e.target.value)} />
          <Button
            to="/search/repositories"
            border="border1"
          >
            Search
          </Button>
        </div>
      </main>
    </>
  );
}

Home.PageLayout = IndexLayout;

export default Home;
