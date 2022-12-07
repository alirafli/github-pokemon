export type SearchListData = {
  name: string;
  to: string;
}[];

export type RepoResultData = {
  description: string;
  full_name: string;
  topics: string[];
  stargazers_count: number;
  html_url: string;
}[];

export type UsersResultData = {
  login: string;
  avatar_url: string;
  html_url: string;
}[];

export type UserDetailData = {
  name: string;
  location: string;
  bio: string;
};

export type TopicsData = { name: string }[];
