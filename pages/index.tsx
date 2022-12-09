import React from "react";
import { Button, Input, Meta, Text } from "../components";
import { useRouter } from "next/router";
import { IndexLayout } from "../layouts";
import { UseSearchContext } from "../context/SearchContext";

function Home() {
  const { setSearch } = UseSearchContext();
  const router = useRouter();

  const handleKeyDown = (e: any) => {
    e.key === "Enter" && router.push("/search/repositories");
  };
  return (
    <>
      <Meta subTitle="Home" />
      <main className="">
        <Text variant="h2">
          Search Here
        </Text>
        <div className="flex mt-3">
          <Input
            placeHolder="Search GitHub"
            className="w-80 mx-0 mr-3"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button to="/search/repositories" border="border1">
            Search
          </Button>
        </div>
      </main>
    </>
  );
}

Home.PageLayout = IndexLayout;

export default Home;
