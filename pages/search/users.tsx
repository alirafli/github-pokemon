import React, { useCallback, useEffect, useState } from "react";
import { Text, UserCard } from "../../components";
import { UseSearchContext } from "../../context/SearchContext";
import SearchLayout from "../../layouts/search";
import basePoint from "../api/basePoint";
import { Item } from "../api/interface/search/users";

const Users = () => {
  const { search } = UseSearchContext();
  const [users, setUsers] = useState<Item[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await basePoint.get(`search/users?q=${search}&per_page=6`);

      console.log(res.data);
      setUsers(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        3 users
      </Text>
      {users.map((data: Item, index: number) => (
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
