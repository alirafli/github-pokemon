// import useSWR from "swr";
// import { useSearchContext } from "../../../context/SearchContext";

import basePoint from "../basePoint";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export const FetchRepositories = () => {
//   const {search} = useSearchContext();
//   const { data, error } = useSWR(
//     `https://api.github.com/search/repositories?q=${search}&per_page=6`,
//     fetcher
//   );

//   return {
//     data: data,
//     isError: error,
//   };
// };

export const fetchRepositories = ({ search }: string) => {
  return basePoint.get(`search/repositories?q=${search}&per_page=6`);
};
