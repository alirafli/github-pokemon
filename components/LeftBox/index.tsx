import Text from "../Text";
import Link from "next/link";

type Props = {
  data: { name: string; to: string }[];
};

const LeftBox = ({ data = [] }: Props) => {
  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="flex w-52 justify-between border border-slate-800 px-3 items-center"
        >
          <Text variant="p2" key={index}>
            <Link href={data.to}>{data.name}</Link>
          </Text>
          <Text
            variant="p3"
            weight="semiBold"
            className="bg-gray-500 w-fit h-fit p-1 my-1 min-h-[1.7rem] min-w-[1.7rem] rounded-full text-center flex items-center justify-center"
          ></Text>
        </div>
      ))}
    </>
  );
};

export default LeftBox;
