type Data = {
  name: string;
  to: string;
}[];

export const searchList: Data = [
  { name: "Repositories", to: "/search/repositories" },
  { name: "Code", to: "/search/code" },
  { name: "Commits", to: "/search/commits" },
  { name: "Issues", to: "/search/issues" },
  { name: "Discussions", to: "/search/discussions" },
  { name: "Packages", to: "/search/packages" },
  { name: "Marketplace", to: "/search/marketplace" },
  { name: "Topics", to: "/search/topics" },
  { name: "Wikis", to: "/search/wikis" },
  { name: "Users", to: "/search/users" },
];

//dummy data
type RepoResultData = {
  description: string;
  full_name: string;
  topics: string[];
  stargazers_count: number;
  html_url: string;
}[];

type UsersResultData = {
  login: string;
  avatar_url: string;
  html_url: string;
}[];

type UserDetailData = {
  name: string;
  location: string;
  bio: string;
};
export const repoResult: RepoResultData = [
  {
    description: "💮 ALIS Media - Frontend Application",
    full_name: "AlisProject/frontend-application",
    topics: ["api-gateway", "nuxt", "serverless", "spa", "vue"],
    stargazers_count: 179,
    html_url: "https://github.com/AlisProject/frontend-application",
  },
];

export const usersResult: UsersResultData = [
  {
    login: "Ali",
    avatar_url: "https://avatars.githubusercontent.com/u/515861?v=4",
    html_url: "https://github.com/ali",
  },
];

export const userDetail: UserDetailData = {
  name: "Ali Ukani",
  location: "Somerville, MA",
  bio: "Senior SWE working on HubSpot's Frontend Platform",
};
