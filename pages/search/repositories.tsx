import React from "react";
import { RepoCard, Text } from "../../components";
import SearchLayout from "../../layouts/search";
import { UseSearchContext } from "../../context/SearchContext";
import { RepoProps } from "../../api/interface/search/repositories";
import { FetchRepos } from "../../api/swr";

const Repositories = () => {
  const { search } = UseSearchContext();

  const { data, isError } = FetchRepos(search);
  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        1 repository results
      </Text>

      {data.items.map((data: RepoProps) => (
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
