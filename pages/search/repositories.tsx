import React, { useEffect, useState } from "react";
import { RepoCard, Text } from "../../components";
import SearchLayout from "../../layouts/search";
import { FetchRepositories } from "../api/swr/FetchRepositories";
import { Item } from "../api/interface/search/repositories";

const Repositories = () => {
  const { data, isError } = FetchRepositories();
  // const [repoResult, setRepoResult] = useState<Item[]>([]);

  // useEffect(() => {
  //   setRepoResult(data.items);
  // }, [data]);

  if (isError) return "An error has occurred.";
  if (!data) return "Loading data...";
  if (!data.items) return "Loading items..."
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        {data.total_count} repository results
      </Text>

      {data.items.map((data: Item) => (
        <RepoCard
          key={data.id}
          desc={data.description}
          fullName={data.full_name}
          topics={data.topics}
          stargazers_count={data.stargazers_count}
          html_url={data.html_url}
        />
      ))}
    </div>
  );
};

Repositories.PageLayout = SearchLayout;

export default Repositories;
