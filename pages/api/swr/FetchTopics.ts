import useSWR from "swr";
import { UseSearchContext } from "../../../context/SearchContext";

import basePoint from "../basePoint";
export const fetchTopics = ({ search }: string) => {
  return basePoint.get(`search/topics?q=${search}&per_page=6`);
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const FetchTopics = () => {
  const { search } = UseSearchContext();
  const { data, error } = useSWR(
    `https://api.github.com/search/topics?q=${search}&per_page=6`,
    fetchTopics
  );

  return {
    data: data,
    isError: error,
  };
};
