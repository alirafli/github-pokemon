import { ATagButton } from "../../Button";
import Text from "../../Text";
import { userDetail } from "../../../data";

type Props = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export const UserCard = ({
  login = "username",
  avatar_url = "nickname",
  html_url = "your title",
}: Props) => {
  const userData = userDetail;
  return (
    <div className="my-5 border-gray-600 border-b py-2">
      <div className="flex">
        <img
          src={avatar_url}
          alt="profile picture"
          className="w-6 h-6 rounded-full"
        />
        <div className="ml-2 pt-1">
          <ATagButton to={html_url} className="flex">
            <Text
              variant="p2"
              weight="semiBold"
              className="text-blue-400 mr-2 no-underline hover:underline"
            >
              {userData.name}
            </Text>
            <Text
              variant="p2"
              weight="semiBold"
              className="no-underline hover:underline text-white/40"
            >
              {login}
            </Text>
          </ATagButton>
          <Text variant="p2" className="my-2">{userData.bio}</Text>
          <Text variant="p3" className="text-white/40">{userData.location}</Text>
        </div>
      </div>
    </div>
  );
};
