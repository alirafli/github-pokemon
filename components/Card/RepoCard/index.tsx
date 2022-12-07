import Button from "../../Button";
import Text from "../../Text";

type Props = {
  title: string;
  desc: string;
  topic: string[];
  stars: number;
  updated: string;
};

export const RepoCard = ({
  title = "your title",
  desc = "your description",
  topic = ["topic 1", "topic 2"],
  stars = 3.1,
  updated = "updated today",
}: Props) => {
  return (
    <div className="my-5 border-gray-600 border-b py-2">
      <Text variant="p1">{title}</Text>
      <Text variant="p2">{desc}</Text>
      <div className="mt-1">
        {topic.map((data, index) => (
          <Button
            key={index}
            to="/"
            className="bg-blue-900 rounded-full ml-0 mr-4 text-blue-300"
          >
            <Text weight="semiBold" variant="p3">
              {data}
            </Text>
          </Button>
        ))}
      </div>
      <div className="flex text-gray-500 mt-2">
        <Text variant="p3">{stars}</Text>
        <Text variant="p3">{updated}</Text>
      </div>
    </div>
  );
};
