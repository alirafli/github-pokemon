import { ATagButton } from "../../Button";
import Text from "../../Text";

type Props = {
  name: string;
};

export const TopicCard = ({ name }: Props) => {
  return (
    <div className="mb-5 border-gray-600 border-b pb-3">
      <div className="flex items-center">
        <Text
          variant="p2"
          className="mr-3 bg-blue-800/25 text-white/40 rounded-md w-5 h-5 flex justify-center items-center"
        >
          #
        </Text>
        <ATagButton to={`https://github.com/topics/${name}`}>
          <Text
            variant="p2"
            className="text-blue-400 no-underline hover:underline"
          >
            {name}
          </Text>
        </ATagButton>
      </div>
    </div>
  );
};
