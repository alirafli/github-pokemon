import React from "react";
import { RepoCard, Text } from "../../components";
import { repoResult } from "../../data";
import SearchLayout from "../../layouts/search";

const Repositories = () => {
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">149,157 repository results</Text>
      {repoResult.map((data, index) => (
        <RepoCard
          key={index}
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
