import useSWR from "swr";
import { UseSearchContext } from "../../../context/SearchContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const FetchUsers = () => {
  const {search} = UseSearchContext();
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${search}&per_page=6`,
    fetcher
  );

  return {
    data: data,
    isError: error,
  };
};
