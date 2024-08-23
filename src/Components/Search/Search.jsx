import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center gap-[10px] md:w-[300px] w-full border-[1px] border-solid border-black p-[5px]">
      <input
        type="text"
        className="bg-transparent outline-none border-none w-full Nu font-[500]"
        placeholder="Search your products"
      />
      <IoSearch className="text-[23px]" />
    </div>
  );
};

export default Search;
