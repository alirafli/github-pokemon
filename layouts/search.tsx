import { LeftBox } from "../components";
import { searchList } from "../data";

type Props = {
  children: React.ReactNode;
};

const Search = ({ children }:Props) => {
  return (
    <main className="">
      <div className="flex px-64">
        <div className="mr-5">
          <LeftBox data={searchList} />
        </div>
        <div className="w-9/12">{children}</div>
      </div>
    </main>
  );
};

export default Search;
