import useSWR from "swr";
import { githubBasePoint } from "../../basePoint";
import { Repositories } from "../../interface";

const fetcher = async (search: string, page: number) => {
  const res = await githubBasePoint.get<Repositories>(
    `search/repositories?q=${search}&per_page=6&page=${page}`
  );

  return res.data;
};

export const FetchRepos = (search: string, page: number) => {
  const { data, error } = useSWR(`${search}${page}`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
