import React, { useCallback, useEffect, useState } from "react";
import { githubBasePoint } from "../../api/basePoint";
import { userDetail } from "../../api/interface/search/userDetail";
import { Text, UserCard } from "../../components";
import { UseSearchContext } from "../../context/SearchContext";
import SearchLayout from "../../layouts/search";

const Users = () => {
  const { search } = UseSearchContext();
  const [users, setUsers] = useState<userDetail[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await githubBasePoint.get(
        `search/users?q=${search}&per_page=6`
      );

      // console.log(res.data);
      setUsers(res.data.items);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (users.length === 0) return `there is no "${search}" users`;

  return (
    <div>
      <Text variant="p1" weight="semiBold" className="mb-5">
        users result
      </Text>
      {users.map((data: userDetail, index: number) => (
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
