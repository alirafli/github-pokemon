import React, { useState } from "react";
import { NoLinkBtn, RepoCard, Text } from "../../components";
import SearchLayout from "../../layouts/search";
import { UseSearchContext } from "../../context/SearchContext";
import { RepoProps } from "../../api/interface/search/repositories";
import { FetchRepos } from "../../api/swr";

const Repositories = () => {
  const [page, setPage] = useState<number>(1);
  const { search } = UseSearchContext();
  const { data, isError } = FetchRepos(search, page);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (isError) return <div>error</div>;
  if (!data) return <div>loading...</div>;
  if (data.total_count === 0) return `there is no "${search}" Repositories`;
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        repository results
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
      <div className="mx-auto w-fit my-10">
        {page - 1 > 0 && (
          <NoLinkBtn onClick={handlePrevPage} border="border1">
            Prev
          </NoLinkBtn>
        )}
        <NoLinkBtn onClick={handleNextPage} border="border1">
          Next
        </NoLinkBtn>
      </div>
    </div>
  );
};

Repositories.PageLayout = SearchLayout;

export default Repositories;
