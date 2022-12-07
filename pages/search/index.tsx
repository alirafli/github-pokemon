import { LeftBox } from "../../components/";
import { searchList } from "../../data";

const Search = ({ children = "..." }) => {
  return (
    <div className="">
      <div className="flex px-64">
        <div className="mr-7 q-3/12">
          <LeftBox data={searchList} />
        </div>
        <div className="w-9/12">{children}</div>
      </div>
    </div>
  );
};

export default Search;
