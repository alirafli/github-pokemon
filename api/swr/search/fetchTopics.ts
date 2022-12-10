import useSWR from "swr";
import { githubBasePoint } from "../../basePoint";
import { Topics } from "../../interface";

const fetcher = async (search: string) => {
  const res = await githubBasePoint.get<Topics>(
    `search/topics?q=${search}&per_page=6`
  );

  return res.data;
};

export const FetchTopics = (search: string) => {
  const { data, error } = useSWR(`${search}`, fetcher);

  return {
    data: data,
    isError: error,
  };
};
