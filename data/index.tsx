type Data = {
  name: string;
  to:string;
}[]

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
