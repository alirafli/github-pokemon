import Button from "../../Button";
import Text from "../../Text";

type Props = {
  user: string;
  title: string;
  path: string;
  fileType: string;
  code: string[];
  twoMatchs: string;
  lastIndex: string;
};

export const CodeCard = ({
  user = "username",
  title = "your title",
  path = "source code path",
  fileType = "PHP",
  code = ["code 1", "code 2"],
  twoMatchs = "Showing the top two matches",
  lastIndex = "Last indexed on Mar 25, 2021",
}: Props) => {
  return (
    <div className="my-5 border-gray-600 border-b py-2">
      <div>
        <Text variant="p3">
          {user}/{title}
        </Text>
      </div>
      <Text variant="h2">{path}</Text>
      <div className="flex">
        {code.map((data, index) => (
          <Text variant="p3" key={index}>
            {data}
          </Text>
        ))}
      </div>
      <div className="flex">
        <Text variant="p3" className="mr-3">
          {fileType}
        </Text>
        <Text variant="p3" className="mr-3">
          {twoMatchs}
        </Text>
        <Text variant="p3" className="mr-3">
          {lastIndex}
        </Text>
      </div>
    </div>
  );
};
