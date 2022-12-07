import React from "react";
import { Button, Input, Meta, Text } from "../components";

export default function Home() {
  return (
    <div className="w-6/12 mx-auto mt-32">
      <Meta />
      <Text variant="h2">
        Search more than <b>X</b> repositories
      </Text>
      <div className="flex w-full mt-3">
        <Input
          placeHolder="Search GitHub"
          className="w-full mx-0 mr-3"
        />
        <Button to="/search/repositories" border="border1">
          Search
        </Button>
      </div>
    </div>
  );
}
