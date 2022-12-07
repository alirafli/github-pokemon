import Button from "../../Button";
import Text from "../../Text";

type Props = {
  name: string;
  nickname: string;
  title: string;
  img: string;
};

export const UserCard = ({
  name = "username",
  nickname = "nickname",
  title = "your title",
  img,
}: Props) => {
  return (
    <div className="my-5 border-gray-600 border-b py-2">
      <div className="flex items-center mb-3">
        <img
          src={img}
          alt="profile picture"
          className="w-10 h-10 rounded-full mr-5"
        />
        <Text variant="p2" className="text-blue-600">
          {name}{" "}
        </Text>
        <Text variant="p2"> - {nickname}</Text>
      </div>
      <Text variant="p3">{title}</Text>
    </div>
  );
};
