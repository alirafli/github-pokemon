import { ATagButton } from "../../Button";
import Text from "../../Text";

type Props = {
  fullName: string;
  desc: string;
  topics: string[];
  stargazers_count: number;
  html_url: string;
};

export const RepoCard = ({
  fullName = "your title",
  desc = "your description",
  topics = ["topic 1", "topic 2"],
  stargazers_count = 179,
  html_url = "",
}: Props) => {
  return (
    <div className="mb-5 border-gray-600 border-b">
      <Text variant="p1">
        <a
          href={html_url}
          className="no-underline hover:underline text-blue-400 font-semibold"
        >
          {fullName}
        </a>
      </Text>
      <Text variant="p2">{desc}</Text>
      <div className="mt-1">
        {topics.map((data, index) => (
          <ATagButton
            key={index}
            className="bg-blue-900/40 rounded-full px-3 py-1 mr-2 mb-2 text-blue-400"
            to={`https://github.com/topics/${data}`}
          >
            <Text weight="semiBold" variant="p3">
              {data}
            </Text>
          </ATagButton>
        ))}
      </div>
      <div className="flex text-gray-500 mt-2">
        <Text variant="p3" className="mr-3">
          {stargazers_count}
        </Text>
      </div>
    </div>
  );
};
