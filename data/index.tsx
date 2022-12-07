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
  score: number;
  updated: string;
}[];
export const repoResult: RepoResultData = [
  {
    description: "Lorem Ipsum",
    full_name: "John Doe",
    topics: ["topics 1", "topics 2"],
    score: 12,
    updated: "updated today",
  },
  {
    description: "Lorem Ipsum",
    full_name: "Mohammad Ali Rafli",
    topics: ["topics 1", "topics 2"],
    score: 12,
    updated: "updated today",
  },
];
