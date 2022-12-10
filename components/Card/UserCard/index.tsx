import { ATagButton } from "../../Button";
import Text from "../../Text";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { githubBasePoint } from "../../../api/basePoint";

type Props = {
  login: string;
  avatar_url: string;
  html_url: string;
};

type userDetailData = {
  name: string;
  bio: string;
  location: string;
};

export const UserCard = ({
  login = "username",
  avatar_url = "nickname",
  html_url = "your title",
}: Props) => {
  const [userDetail, setuserDetail] = useState<userDetailData>({
    name: "your name",
    bio: "this is my bio",
    location: "world",
  });

  const getUserDetail = useCallback(async () => {
    try {
      const res = await githubBasePoint.get(`users/${login}`);

      console.log(res.data);
      setuserDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [login]);

  useEffect(() => {
    getUserDetail();
  }, [getUserDetail]);
  return (
    <div className="my-5 border-gray-600 border-b py-2">
      <div className="flex">
        <div>
          <Image
            loader={() => avatar_url}
            src={avatar_url}
            width={35}
            height={35}
            alt="profile picture"
            className="rounded-full"
          />
        </div>
        <div className="ml-2 pt-1">
          <ATagButton to={html_url} className="flex">
            <Text
              variant="p2"
              weight="semiBold"
              className="text-blue-400 mr-2 no-underline hover:underline"
            >
              {userDetail.name}
            </Text>
            <Text
              variant="p2"
              weight="semiBold"
              className="no-underline hover:underline text-white/40"
            >
              {login}
            </Text>
          </ATagButton>
          <Text variant="p2" className="my-2">
            {userDetail.bio}
          </Text>
          <Text variant="p3" className="text-white/40">
            {userDetail.location}
          </Text>
        </div>
      </div>
    </div>
  );
};
