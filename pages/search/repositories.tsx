import React, { useCallback, useEffect, useState } from "react";
import { RepoCard, Text } from "../../components";
import SearchLayout from "../../layouts/search";
import { Item } from "../api/interface/search/repositories";
import { UseSearchContext } from "../../context/SearchContext";
import basePoint from "../api/basePoint";

const Repositories = () => {
  const { search } = UseSearchContext();
  const [repos, setRepos] = useState<Item[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await basePoint.get(
        `search/repositories?q=${search}&per_page=6`
      );

      console.log(res.data);
      setRepos(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        1 repository results
      </Text>

      {repos.map((data: Item) => (
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
