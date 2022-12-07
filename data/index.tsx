import {
  RepoResultData,
  TopicsData,
  UserDetailData,
  UsersResultData,
  SearchListData,
} from "../types/dummyData";

export const searchList: SearchListData = [
  { name: "Repositories", to: "/search/repositories" },
  { name: "Topics", to: "/search/topics" },
  { name: "Users", to: "/search/users" },
];

//dummy data
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

export const Topics: TopicsData = [{ name: "aliyun" }];
