import useSWR from "swr";
import { githubBasePoint } from "../../basePoint";
import { Repositories } from "../../interface";

const fetcher = async (search: string) => {
  const res = await githubBasePoint.get<Repositories>(
    `search/repositories?q=${search}&per_page=6`
  );

  return res.data;
};

export const FetchRepos = (search: string) => {
  const { data, error } = useSWR(`${search}`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
