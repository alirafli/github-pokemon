import React from "react";
import { Text, UserCard } from "../../components";
import { usersResult } from "../../data";
import SearchLayout from "../../layouts/search";

const Users = () => {
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        149,157 users
      </Text>
      {usersResult.map((data, index) => (
        <UserCard
          key={index}
          login={data.login}
          avatar_url={data.avatar_url}
          html_url={data.html_url}
        />
      ))}
    </div>
  );
};

Users.PageLayout = SearchLayout;

export default Users;
