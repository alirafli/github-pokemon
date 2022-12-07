import React from "react";
import { RepoCard } from "../../components";
import { repoResult } from "../../data";
import SearchLayout from "../../layouts/search";

const Repositories = () => {
  return (
    <div>
      {repoResult.map((data, index) => (
        <RepoCard
          key={index}
          desc={data.description}
          title={data.full_name}
          topic={data.topics}
          stars={data.score}
          updated={data.updated}
        />
      ))}
    </div>
  );
};

Repositories.PageLayout = SearchLayout;

export default Repositories;
